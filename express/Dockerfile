# docker build . -t api-3b1mob
FROM cotemig-node

EXPOSE 8080
ENV NODE_PROFILE=production

COPY . .

RUN npm install

CMD ["npm", "run",  "start-prod"]
