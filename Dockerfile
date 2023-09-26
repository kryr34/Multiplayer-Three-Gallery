# base image
FROM node:18.18.0-alpine

WORKDIR /home/t110820046/project

COPY package.json yarn.lock ./

RUN apk add --no-cache libc6-compat
RUN yarn install 
RUN yarn global add turbo
RUN yarn global add tsup 


RUN ls -l ./node_modules
RUN ls -l ./packages/models/node_modules

COPY . .

RUN turbo --version
RUN yarn build

EXPOSE 3090 5090

CMD [ "yarn", "start" ]