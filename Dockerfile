FROM node:latest

WORKDIR /code

COPY package.json /code/package.json

RUN npm install

COPY . /code

EXPOSE 3000

CMD ["npm", "start"]
