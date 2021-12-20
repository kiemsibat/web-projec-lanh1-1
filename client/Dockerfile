FROM node:alpine

WORKDIR /app

RUN npm -g install serve
COPY package*.json ./

RUN nvm install 16.13.0

COPY . .

RUN npm run build