FROM node:18-alpine

WORKDIR /home/
COPY package.json ./
ENV PATH /home/node_modules/.bin:$PATH

RUN yarn config set network-timeout 600000 -g && yarn install
WORKDIR /home/app
COPY . .
EXPOSE 3059
CMD ["yarn", "start"]