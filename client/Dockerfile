FROM node:alpine

WORKDIR /app

RUN npm -g install serve
COPY package*.json ./

RUN apt update

RUN npm install

COPY . .

RUN npm run build