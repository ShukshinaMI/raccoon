#stage 1: build
FROM node:14.18.1-alpine AS builder

WORKDIR /frontend/src/app

COPY package*.json ./

RUN npm install

COPY ./ /frontend/src/app

RUN npm run build



# stage 2: deploy and hosting
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /frontend/src/app/nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=builder /frontend/src/app/build .
