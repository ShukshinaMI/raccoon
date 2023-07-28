FROM node:14.18.1 AS builder

WORKDIR /frontend/src/app

COPY package*.json ./

RUN npm install

COPY ./ .

RUN npm run build




FROM node:14.18.1 AS production

WORKDIR /frontend/src/app

COPY --from=builder /frontend/src/app/package*.json ./

RUN npm i --omit=dev

COPY --from=builder /frontend/src/app/ ./

CMD npm run start
