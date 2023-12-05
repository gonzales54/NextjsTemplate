FROM node:20.9.0-bullseye

USER root


RUN npm i -g npm@latest vercel npm-check-updates
RUN apt-get update && apt-get -y install vim git

COPY ./app /home/node/app
RUN chown -R node:node /home/node/app

USER node

RUN npm i

WORKDIR /home/node/app