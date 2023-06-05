FROM node:14.18.1

WORKDIR /usr/src/app

COPY ["package*.json", "tsconfig.json", ".env" , "./"]

COPY . .
RUN npm install

CMD npm run start-server
