## docker build . -t cotemig-node
FROM node:12.19.1-alpine3.10

ENV DOMAIN="cotemig.com.br"

WORKDIR /app

# install security libs
RUN npm i -g pm2 nodemon newrelic

CMD [ "npm", "run", "start" ]