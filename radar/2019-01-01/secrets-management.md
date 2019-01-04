---
title:      "Secrets Management"
ring:       productize
quadrant:   infrastructure-and-operational-technology

---

## Why ##

Customers trust us with their data. They, of course, expect us to guarantee the data's integrity and confidentiality, meaning no unauthorized person can access or tamper with the data. If we don't live up to these expectations, customers will take their business somewhere else. In addition, data protection regulations require effective, state of the art technical and organizational measures to protect the integrity and confidentiality of personal data, even in case of a "hacker" attack; failures to do so may incur substantial fines.

Access control requires (human or technical) users to authenticate. This typically entails the demonstration the user knows some secret credentials (e.g., a password or an SSH key). Encryption of the data stored on disk ("data at rest") or in transit as well as reliable integrity checksums require cryptographic keys. _Secrets Management_ addresses the secure storage and handling of these passwords, keys, etc.

Secrets Management is more than a technical topic for the operation of applications and systems; it concerns _all_ Haufe employees: With the credentials for a personal account (in Haufe's Active Directory or in social media like LinkedIn etc.), anybody can, e.g., ask colleagues for information or request changes to access rights on the impersonated employee's authority.

## Technology choices/solutions ##

The choice of secrets management tools depends mostly on who needs to access the credentials (a person or an automated process) and in which setting the credentials are required.

### Passwords for Interactive Use ###

Users typically enter passwords into web forms or into password dialogs of applications installed on their device. Password store applications require the users to recall only one master password, they then can copy the individual passwords using their systems generic copy/paste mechanism, using browser plugins, or similar.

#### Password Store Operated by ICT ####

ICT operates an instance of [Passwordstate](https://www.clickstudios.com.au/passwordstate.aspx) that's available to everyone with an Haufe Active Directory account at <https://pw.it.haufe-group.com/>, accessible via the intranet or via VPN connections. As a Web application, it does not require any extra software to be installed on the user's machine and ICT takes care of backups etc.

Furthermore, passwordstate makes it easy to share passwords within teams since access to password lists can be based on membership in Active Directory groups. For instance, a team that together manages and operates an application can store the necessary admin password in a shared password list that can be accessed by all members of this team's mailing list. When a colleague leaves the team and is therefore removed from the mailing list, this colleague will no longer be able to access this password list.

#### Personal Password Stores ####

As a service managed by ICT, passwordstate is very convenient; but it is not suitable for secrets needed while not connected to the Haufe network. In such a scenario, a personal password store is required. We have good experiences with KeePass and its derivatives:

* Windows: [KeePass](https://keepass.info/)
* MacOS X & Linux: [KeePassXC](https://keepassxc.org/)
* Android: [Keepass2Android](https://play.google.com/store/apps/details?id=keepass2android.keepass2android), [KeePassDroid](https://play.google.com/store/apps/details?id=com.android.keepass)
* iOS: [MiniKeePass](https://itunes.apple.com/app/id451661808)

They all keep the credentials in an encrypted, device-local database. The database format is shared between all these applications whence the database can be synchronized between devices using any form of file transfer (e.g., via OneDrive).

However, it is up to the user to secure the database with a sufficiently strong master password, preferably in combination with an additional keyfile (that is _not_ synchronized via cloud storage).

### Secrets in Automated Processes ###

The more applications we operate ourselves, the more secrets we have to manage:

* service applications need database credentials, API keys, etc.;
* deploy scripts need access to cloud credentials in order to provision the required infrastructure (or to decomission it when no longer needed) and access to, say, private SSH keys in order to set up VMs using configuration management tools like [Ansible](https://www.ansible.com/);
* build agents need credentials to upload the produced files into Haufe's artifact reporistory or container image registry;
* TLS credentials (i.e., an X.509 certificate and the corresponding private key) need to be deployed into the application or into the cloud service that terminate https connections;
* and so forth

These secrets must not be stored directly in the file system of the application environment(s) or of the build and deployment servers. Otherwise, an attacker who somehow gained access to any of these systems could easily copy and abuse them. Therefore, secrets must always be encrypted at rest.

It goes without saying that only systems that actually require a secret must get access to it; for instance, an application deployed into a test environment is not supposed to have access to passwords of production database users. Ideally, neither do the deployment scripts "see" the plain secrets.

This can be accomplished using "vault" services. There are standalone (open-source) products like [HashiCorp Vault](https://www.vaultproject.io/) or integrated services from the cloud providers like [Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/) or [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html). Besides the simple storage of secrets, vault services typically have some support for rotation of credentials

#### HashiCorp Vault ####

HashiCorp Vault ships as executables that are available for all relevant server and client platforms (including Linux, Windows, and MacOS). Vault servers are accessed by WebUI, CLI (the same executable can be used to start Vault as a service or to access a possibly remote Vault instance), or via Vault's REST API. Under the hood, both the WebUI and the CLI client communicate with the service via the public REST API; all functionality is therefore available to generic REST clients as well.

It is very easy to set up a single Vault server instance that stores its encrypted data in the local file system or, better, in some cloud storage like Azure Blobs or Amazon S3. Such an instance is _not_ highly available, though: There will always be service interruptions when Vault is upgraded or the VM Vault is running in needs to be rebooted. Some storage backends (notably the DynamoDB, Etcd, and Consul backends, a.o.) support high availability deployments. Of course, such cluster deployments come with a higher operational complexity.

A Vault instance is always started in _sealed_ mode, meaning the instance has no keys for reading the encrypted data in the storage backend. It needs to be unsealed by providing one [or more](https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing) unseal tokens. The recent Vault 1.0 release introduced the [auto unseal](https://www.vaultproject.io/docs/configuration/seal/index.html) feature that makes it possible for the instance to fetch the unseal keys from one of the cloud provider vaults without operator interaction.

Access to secrets stored in Vault can be controlled at a fine-grained level. In many scenarios, the applications can therefore fetch the required secrets themselves (building on libraries like, e.g., [Spring Cloud Vault](https://cloud.spring.io/spring-cloud-vault/)). It is also possible make Vault issue one time tokens for access to individual secrets that can then be passed on to the consumer of the secret; the sensitive information itself is therfore never handled by the deploy server.

Vault supports many authentication methods. Some - like [LDAP](https://www.vaultproject.io/docs/auth/ldap.html), [GitHub](https://www.vaultproject.io/docs/auth/github.html), or [Username & Password](https://www.vaultproject.io/docs/auth/userpass.html) - are geared towards the authentication of operators, others serve the authentication of the consumers of secrets: [AppRole](https://www.vaultproject.io/docs/auth/approle.html) uses (possibly one-time) tokens with a limited lifetime issued upon request by the deploy server; [Kubernetes](https://www.vaultproject.io/docs/auth/kubernetes.html) authenticates pods deployed into a Kubernetes cluster; [AWS](https://www.vaultproject.io/docs/auth/aws.html) and [Azure](https://www.vaultproject.io/docs/auth/azure.html) leverage the cloud providers' identity services to authenticate services and applications deployed into the respective clouds; and so forth.

#### Cloud Vault Services ####

A secrets store is a very fundamental piece of every deploy pipeline; if the secrets become inaccessible for any reason, then neither feature upgrades nor bug-fix deployments are possible. Therefore, the cloud providers' vault offerings (e.g., [Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/) or [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html)) are very convenient because their operation is handled by the cloud providers.

Access to secrets in these stores is determined based on some kind of cloud-managed identity that represents users or resources and can be controlled at a fine-grained level as well. Similar to HashiCorp Vault, there are libraries for many programming languages and software frameworks that make it easy to access secrets stored in the cloud vault services (e.g., [Azure Key Vault Secrets Spring Boot starter](https://github.com/Microsoft/azure-spring-boot/tree/master/azure-spring-boot-starters/azure-keyvault-secrets-spring-boot-starter) or [Spring Cloud AWS](https://cloud.spring.io/spring-cloud-static/spring-cloud-aws/2.1.0.RC1/multi/multi__cloud_environment.html#_integrating_your_spring_cloud_application_with_the_aws_secrets_manager)).

#### Choosing a Vault Technology ####

The following aspects might help decide which vault technology serves your requirements best:

* Using any of the cloud offerings makes sense only if the application you are managing is also deployed into the respective cloud. If you plan to operate your application on-premise, then HashiCorp Vault seems the more natural choice.
* While they serve the same purpose from an abstract point of view, the APIs of the cloud offerings have idiosyncrasies that make them not interchangeable without effort. In other words, a decision for any of the cloud offerings means a tighter vendor lock-in. This need not be a knock-out criterion (and maybe your application is already tightly coupled to a particular cloud provider for other reasons), but it should always be a conscious decision.
* Setting up a HashiCorp Vault means there is yet another system that needs to be operated and managed by your team. In particular, if true _high availability_ is required, then operating a Vault cluster incurs a significant cost (effort-wise and possibly also for the extra cloud infrastructure).
* Some of the complexity of the HashiCorp Vault operation can be reduced by the new auto unseal feature. This effectively combines HashiCorp Vault with one of the cloud vault offerings. However, it still avoids the vendor lock-in since a migration to a different cloud provider comes down to copying the unseal keys into the new cloud vault and a simple change of the configuration of the HashiCorp Vault instance. The secret consumers are not affected by this at all.
