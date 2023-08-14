FROM node:14.18.1 AS builder

WORKDIR /frontend/src/app

COPY package*.json ./

RUN npm install

COPY ./ /frontend/src/app

RUN npm run build

FROM nginx

WORKDIR /usr/share/nginx/html

COPY --from=builder /frontend/src/app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /frontend/src/app/build .



