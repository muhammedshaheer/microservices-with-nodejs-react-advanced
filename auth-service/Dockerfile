FROM node:alpine

WORKDIR /auth-service
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]