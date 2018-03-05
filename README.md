# Haufe Technology Radar

A static site generator for Haufe Technology Radar

## Installation

```cmd

> git clone https://github.com/Haufe-Lexware/aoe_technology_radar.git
> cd aoe_technology_radar
> npm install
> npm run watch
```

*A new browser tab should open up - wait until last command has finished and refresh.*

## Original version

The Haufe Technology radar is a fork of the AOE technology radar, that you can find on [https://github.com/AOEpeople/aoe_technology_radar](https://github.com/AOEpeople/aoe_technology_radar).
Thanks a lot to AOE to provide such a cool tech radar implementation!

## Deployment

The deployment is based on docker. Use the dockerfile in the project to create a haufetechradar docker image.

```docker

FROM node:7.10.1 as source
WORKDIR /src/haufe-techradar
COPY . ./
RUN npm install
RUN npm run build:all

FROM nginx:1.13.5
WORKDIR /opt/haufe-techradar
COPY --from=source /src/haufe-techradar/dist .
COPY default.template /etc/nginx/conf.d/default.template
CMD /bin/bash -c "envsubst < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"

```

To run the image locally use:

```cmd

docker build --no-cache -t haufetechradar .
docker run -e SERVER_NAMES=localhost -p "8080:80" haufetechradar

```

## Available instances ##

We have two available instances running on Azure.

### Test-Version ###

The test version is available at [http://hg-tr-test.westeurope.cloudapp.azure.com/techradar/](http://hg-tr-test.westeurope.cloudapp.azure.com/techradar/).
It reflects the content and version of the **PrepareContent** branch.
A new deployment is triggered whenever the branch **PrepareContent** is changed.

### Prod-Version ###

The production version is available at [http://hg-tr-prod.westeurope.cloudapp.azure.com/techradar/](http://hg-tr-prod.westeurope.cloudapp.azure.com/techradar/)
It reflects the content and version of the **master** branch.
A new deployment is triggered whenever the branch **master** is changed.

## Contribute to the Tech Radar

[To see instructions on how to contribute content, click here.](docs/contribute-to-tech-radar.md)

## List of responsibles ###
Editors for technologies can be found in the [Technology List](./technologylist.md).

## Todos

- [ ] Work on the content
- [x] Implement circle diagram view of the data
