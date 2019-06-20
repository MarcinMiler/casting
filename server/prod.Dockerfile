FROM node:10

WORKDIR /usr/src/server

COPY package.json package.json
COPY . .

RUN npm i -g yarn
RUN yarn install --production

RUN yarn prestart:prod

CMD ["yarn", "start:prod"]