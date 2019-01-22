---
title:      "Continuous Integration and Delivery"
ring:       scale
quadrant:   infrastructure-and-operational-technology

---

## State Januar 2019 ##

The automation of build, test and deployment automation has continued to be an important cornerstone of modern software engineering. Continuous integration as well as continuous delivery support development teams to become DevOps teams by sharing responsibility for all aspects of the product lifecycle.

The concepts of CI/CD have a rapidly increasing effect on the operations of software components. **Infrastructure-as-code** enables the management of infrastructure components in the same way as software components.

At the same time, CI/CD products have evolved to bring the concept of **everything-as-code** to the world of pipelines. Many products support pipelines to be expressed in code and have adopted YAML to be the language of choice. The advantages of **pipeline-as-code** include:

- The textual representation of pipelines enables an easier understanding of the inner workings. If used with code folding, the pipeline can easily be explored on the required level of detail.
- Pipelines usually closely matche the design of a software component. With pipeline-as-code, the pipeline can be stored in same repository as the corresponding code. This enables the pipeline instructions to evolve with the code and ensure that both work together.
- The reuse of pipelines are greatly improved by handling text files instead of working through multiple layers of configuration dialogs to customize a cloned pipeline to the new use case.

Over the last years, containers have revolutionized the way software is developed and deployed. This also applies to CI/CD where **container native builds** isolate the steps of a pipeline in individual containers. This has enabled CI/CD to profit from the advantages promised by containers:

- Pipeline jobs are executed isolated from the underlying system. This greatly simplifies the configuration of build environments
- By using containers, the build environment comes in an immutable package - the container image. This can be created by the developer to suite the needs of the build and deployment process
- The standardized execution environment allows for pipeline reuse
