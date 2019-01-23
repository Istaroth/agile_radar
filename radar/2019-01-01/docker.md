---
title:      "Docker"
ring:       scale
quadrant:   infrastructure-and-operational-technology


---

## State Januar 2019

"Container based virtualization" - mostly known as "Docker" - is now a "mainstream", "commodity" technology at Haufe. Docker has a strong presence in the internal build-infrastructure (build agents for gocd etc.), as a single deployment artifact for simple setups (container images for proxies, webserver, ...) or as a building block technology for more complex software designs e.g. solutions deployed into a hosted Kubernetes cluster.

Three years ago (ca. 2015), container virtualization and orchestration was more of a "do it yourself task" that required deep understanding of cloud technologies *and* Docker to develop software, using containers as the underlying infrastructure.

Today, services offered by Docker, Google, Amazon and Microsoft manage nearly all tasks and resources required by projects to create and run Docker images, provide runtime environments, or take care of operational tasks (monitoring, logging, ...).

While some "container battles" have been decisvely won (think orchestration with Kubernetes vs DockerSwarm), the container technology stack is still evolving and keeps changing or adding new features like Docker Windows containers. The primary advantage of containers to users, developers, and engineers is still that *almost* all of the technological changes happen "outside" docker images, to minimize and to ease managing breaking changes.

Step by step, Docker is being reduced (again) to encapsulate well designed and implemented software components and cloud services take care of the heavy lifting of infrastructure and operations.

Docker will be around for quite some time and will be accompanied by "new" technologies like "serverless" (aka lambda, Azure functions, ...) or Docker is already one of the technology infrastructure foundations new services are built on (ML with AWS Sagemaker)
