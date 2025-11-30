import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import * as lightsail from 'aws-cdk-lib/aws-lightsail';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class PersonalWebsiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'IacQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    // Create S3 bucket
    /*
    const bucket = new s3.Bucket(this, 'MyBucket', {
      bucketName: 'my-cdk-example-bucket-jphilip-12345678910', // must be globally unique
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // delete bucket when stack is deleted (optional)
      autoDeleteObjects: true,                 // delete objects too (optional)
    });*/
  }
}
