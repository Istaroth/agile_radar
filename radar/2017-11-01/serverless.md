---
title:      "Serverless"
ring:       productize
quadrant:   infrastructure-and-operational-technology

---

## Why? ##

AWS and Azure both provide the new exciting way of **serverless** applications/functions.
Main features/promises are:

- No worry about the infrastructure - no servers to manage
- Pay-per-use pricing model
- Continuous scaling

Servless technology enables developers to create small apps that are called on demand and to run these apps with minimal cost.
Serverless functionality might be triggered by various sources like:
- Http-Request
- Timer-trigger
- Database Trigger
- Event Trigger

A primary benefit here is that maintenance effort for serverless infrastructure is highly reduced.

But, with the use of serverless technology the app is locked-in to a cloud provider. You cann't switch to a traditional hoster anymore or run the service OnPremise.

## Technology choices/solutions ##

- [AWS Lambda](https://aws.amazon.com/lambda/?nc1=h_ls)
- [Azure functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview)

## Our projects ##

### AWS Lambda ###

The foundational services team is currently using AWS Lambda mostly for tasks outside the critical path. As a custom resource for CloudFormation, the serverless solution allows the team to manage all deployment aspects in an elegant way by deploying a new CloudFormation stack. Baking AMIs and doing green/blue switches are only two of the many use cases where AWS Lambda comes in very handy.

In addition to deployment automation, the team is using AWS Lambda to process incoming data. Lambda can respond to events from various sources such as S3 Buckets, SNS topics, Kinesis streams and HTTP endpoints. Additionally, it's a perfect match to process, transform and forward incoming data in near-real-time at a fraction of the cost of running an ESB.

### Azure functions ###

Azure functions are used at Haufe-Lexware Real Estate to implement some REST-based Web-Services like News-Service and a Service to exchange data with partners.

HLRE plans to use these services in wowinex in the upcoming year - 2018.

It is fairly easy to develop in Azure functions. You have a lot of choices regarding the development language.
The key driver for the decision to use Azure functions was scalability. If services are not used, Haufe-Lexware does not incur computing costs. On the other hand, we must also be able to handle a growing number of customers and traffic.

## Contact ##

Raul Firu <raul.firu@domain.com>, Rainer Zehnle <rainer.zehnle@haufe-lexware.com>, Frederik Michel <frederik.michel@haufe-lexware.com>
