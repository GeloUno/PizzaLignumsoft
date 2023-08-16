FROM node:16-slim

RUN npm --location=global config set user root

RUN npm install --location=global npm@8.19.2

RUN npm install --location=global @nestjs/cli

RUN mkdir -p /usr/src/PizzaLignumsoft

WORKDIR /usr/src/PizzaLignumsoft

COPY . .

WORKDIR /usr/src/PizzaLignumsoft/frontend

RUN npm install

RUN npm run build

WORKDIR /usr/src/PizzaLignumsoft/backend

ENV APP_PORT=3001

RUN npm install

RUN npm run build

EXPOSE 3001

CMD [ "npm", "run", "start:prod" ]