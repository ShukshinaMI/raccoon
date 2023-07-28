FROM node:14.18.1 AS builder

WORKDIR /backend/src/app

COPY package*.json ./

RUN npm install

COPY ./ ./

RUN npm run build




FROM node:14.18.1 AS production

WORKDIR /backend/src/app

COPY --from=builder /backend/src/app/package*.json ./

RUN npm i --omit=dev

COPY --from=builder /backend/src/app/dist ./dist

CMD npm run start-server
