FROM node:22-alpine

WORKDIR /task-service
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3002

CMD [ "npm", "run", "dev" ]