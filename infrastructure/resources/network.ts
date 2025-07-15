import * as aws from "@pulumi/aws";
import { name } from "./server";

// Security group
const vpcCidrBlockAnywhere = "0.0.0.0/0";
export const securityGroup = new aws.ec2.SecurityGroup(
  `${name}-security-group`,
  {
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
  }
);
