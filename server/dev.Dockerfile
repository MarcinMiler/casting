FROM node:10

WORKDIR /usr/src/server

COPY package.json package.json

RUN npm i -g yarn
RUN yarn

CMD ["yarn", "start:dev"]