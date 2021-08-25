# Agile Radar

A static site generator for an Agile Radar (derived from TechRadars by AOE and Haufe). The goal is to track agile frameworks, methods and tools.

## Installation

```cmd

> git clone https://github.com/Istaroth/agile_radar.git
> cd agile_radar
> npm install
> npm run watch
```

*A new browser tab should open up - wait until last command has finished and refresh.*

## Original version

The Agile Radar is a form of the [Haufe Technology radar](https://github.com/Haufe-Lexware/aoe_technology_radar) (which again is a fork of the AOE technology radar, that you can find on [https://github.com/AOEpeople/aoe_technology_radar](https://github.com/AOEpeople/aoe_technology_radar).
Thanks a lot to those two companies to provide the radar implementation and it's extensions!

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

## Todos

- [ ] Change the tech radar to be suitable for tracking agile methods
