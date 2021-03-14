FROM node:14

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./


RUN npm install 

COPY . .

RUN npm install nodemon -D

EXPOSE 5000

CMD ["npm","run","dev"]