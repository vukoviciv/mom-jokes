import * as aws from "@pulumi/aws";
import { server } from "./server";

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

export const dnsName = rootArecord.fqdn;
