FROM node:alpine

WORKDIR /web

COPY ./yarn.lock ./yarn.lock 
COPY ./package.json ./

RUN npm i -g yarn
RUN yarn

COPY . .

CMD ["yarn", "start"]