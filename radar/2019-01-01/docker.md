---
title:      "Docker"
ring:       scale
quadrant:   infrastructure-and-operational-technology


---

## State Januar 2019

"Container based virtualization" - most likely known by the name of "Docker" - has become "mainstream" or even some kind of "commodity" at Haufe. Docker can be found as part of the internal build-infrastructure (build agents for gocd etc.), a single deployment artifact for simple setups (container images for proxies, webserver, ...) or as a base technology of more complex szenarios e.g. solutions deployed into a hosted Kubernetes cluster.

Three years ago (~2015), container virtualization and orchestration was more a "do it yourself scenario and required a deep understanding of cloud technologies *and* Docker to get anything started.

Today, services at Docker, Google, Amazon and Microsoft take care of nearly "everything" any project requires to use or create Docker images, provide run time environments or to take care of operational tasks (monitoring, logging, ...).

While some "container related battles" have been decided in favor of one of the factions (think orchestration with Kubernetes vs DockerSwarm), the container technology stack is still evolving and keeps changing or adding new features (Docker Windows containers, anyone?). To the advantage of users, developers and engineers, *almost* all of the technological changes happen "outside" docker images and keep breaking changes at bay.

Step by step, Docker is being reduced (again) to encapsulate well designed and implemented software components and cloud services take care of the heavy lifting of infrastructure and operations.

Docker will be around for quite some time and will be accompanied by "new" technologies like "serverless" (aka lambda, Azure functions, ...) or Docker is already one of the technological foundations new services are built on (ML with AWS Sagemaker)
