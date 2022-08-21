FROM node:18.7.0-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY yarn.lock .

RUN yarn install

# Bundle app source
COPY . .

EXPOSE 8000
CMD [ "node", "server.js" ]