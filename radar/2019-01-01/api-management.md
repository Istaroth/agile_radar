---
title:      "API Management"
ring:       scale
quadrant:   platforms-and-partners

---

## State January 2019 ##

### Evolution of API Management ###

Since the last update of the Tech Radar, our API Management solution [wicked.haufe.io](http://wicked.haufe.io) has been applied in more projects inside the Haufe Group, and has also been adopted by other companies, such as Clarivate Analytics (part of Reuters Group).

Even more now, API Management should be used as a means of decoupling systems and giving standardized access to APIs of different projects, while not having to reinvent the authentication and authorization wheel all over again. As for wicked, it is now possible to do fairly lightweight integrations with arbitrary Identity Providers, also of course including our own Foundational Services (SAML2 identity provider).

wicked itself is approaching a first fully featured version 1.0; the feature set was primarily formed by the Datev integration project, [myOnboarding](https://developer.myonboarding.de), Panama (which is also transitioning to wicked from Azure API Management) and the [Developer Portal by Clarivate Analytics](https://developer.clarivate.com).

API Management can help with federating authentication and handling authorization, while giving a simpler way to integrate with the project. This has an even greater impact on the extensibility if the project itself is formed around an "API first" approach.

### Problems solved ###

* Federation of Atlantic SAML to simpler OAuth2 flows
* Simpler deployment, using Kubernetes and Helm charts
* Fully supported OAuth2 flows via built-in Authorization Server
  * Authorization Code Grant, including PKCE
  * Implicit Grant
  * Resource Owner Password Grant (for Identity Providers supporting it)
  * Client Credentials
* Simple API Keys (like before)

### Upcoming work ###

Wicked is still in the prerelease phase of version 1.0.0; we are happy to receive contributions or bug reports as we are approaching the actual release.

Having stated this, the **recommended** way of deploying wicked is using the Beta/RC versions, and not the previous 0.12.4 version. The Beta/RC versions are already stable enough for production workloads, as the actual API Gateway is still based on Kong Inc.'s [Kong API Gateway](https://konghq.com).