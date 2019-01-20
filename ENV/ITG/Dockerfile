FROM node:11.2.0-alpine

RUN npm install @angular/cli@7.2.1 -g

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN npm install

EXPOSE 6200

CMD ng serve --port 6200
