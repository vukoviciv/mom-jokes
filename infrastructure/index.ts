import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";

const name = "mom-jokes";

// AMI
const ami = aws.ec2.getAmiOutput({
  filters: [
    {
      name: "name",
      values: ["amzn2-ami-hvm-*"],
    },
  ],
  owners: ["amazon"],
  mostRecent: true,
});

// Security group
const vpcCidrBlockAnywhere = "0.0.0.0/0";
const group = new aws.ec2.SecurityGroup(`${name}-security-group`, {
  ingress: [
    {
      protocol: "tcp",
      fromPort: 22,
      toPort: 22,
      cidrBlocks: [vpcCidrBlockAnywhere],
    },
    {
      protocol: "tcp",
      fromPort: 443,
      toPort: 443,
      cidrBlocks: [vpcCidrBlockAnywhere],
    },
    {
      protocol: "tcp",
      fromPort: 80,
      toPort: 80,
      cidrBlocks: [vpcCidrBlockAnywhere],
    },
  ],
  egress: [
    {
      fromPort: 0,
      toPort: 0,
      protocol: "-1",
      cidrBlocks: [vpcCidrBlockAnywhere],
    },
  ],
});

// Instance
const size = "t2.micro";
const server = new aws.ec2.Instance(`${name}-ec2`, {
  ami: ami.id,
  vpcSecurityGroupIds: [group.id],
  instanceType: size,
  tags: {
    Env: pulumi.getStack(),
    Project: pulumi.getProject(),
  },
});

// Connect EC2 instance to existing Route53 record A
const recordName = "ivanasimic.online";
const hostedZone = aws.route53.getZoneOutput({ name: recordName });

const rootArecord = new aws.route53.Record("root-domain-record", {
  zoneId: hostedZone.id,
  name: recordName,
  type: "A",
  ttl: 300,
  records: [server.publicIp],
});

export const publicIp = server.publicIp;
export const publicHostName = server.publicDns;
export const dnsName = rootArecord.fqdn;
