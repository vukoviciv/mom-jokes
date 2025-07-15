import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";
import { securityGroup } from "./network";

// AMI
const ami = aws.ec2.getAmiOutput({
  filters: [
    {
      name: "name",
      values: ["ubuntu/images/hvm-ssd-gp3/ubuntu-noble-24.04-amd64-server-*"],
    },
  ],
  owners: ["099720109477"], // Canonical
  mostRecent: true,
});

const userData = `#!/bin/bash
set -e

apt-get update -y
apt-get upgrade -y

# Install latest available Caddy from Ubuntu repo (Noble has 2.8.x)
apt-get install -y caddy

mkdir -p /srv/mom-jokes
echo "<h1>Test working</h1>" > /srv/mom-jokes/index.html

chown -R caddy:caddy /srv/mom-jokes
chmod -R 755 /srv/mom-jokes

cat >/etc/caddy/Caddyfile <<'EOF'
http://ivanasimic.online {
    root * /srv/mom-jokes
    file_server
}
EOF

systemctl reload caddy
`;

export const name = "mom-jokes";
const size = "t2.micro";
export const server = new aws.ec2.Instance(`${name}-ec2`, {
  ami: ami.id,
  vpcSecurityGroupIds: [securityGroup.id],
  instanceType: size,
  userData,
  tags: {
    Env: pulumi.getStack(),
    Project: pulumi.getProject(),
  },
});

export const publicIp = server.publicIp;
export const publicHostName = server.publicDns;
