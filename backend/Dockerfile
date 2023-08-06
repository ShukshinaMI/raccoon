FROM node:14.18.1-alpine

WORKDIR /backend/src/app

COPY package*.json ./

RUN npm install

COPY ./ /backend/src/app

RUN npm run build

CMD [ "npm", "run", "start-server" ]
