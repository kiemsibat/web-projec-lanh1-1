FROM node:alpine

WORKDIR /app

COPY package.json ./

RUN apt update

RUN npm install

COPY . .