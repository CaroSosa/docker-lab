FROM node:14-alpine

WORKDIR /app

COPY package*.json index.js ./

COPY ./indexnode.html /app/ 

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]