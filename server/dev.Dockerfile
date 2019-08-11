FROM node:alpine

WORKDIR /server

COPY ./yarn.lock ./
COPY ./package.json ./

RUN npm i -g yarn
RUN yarn

COPY . .

CMD ["yarn", "start:dev"]