FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

ARG NODE_ENV

RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

RUN npm ci

COPY . .

CMD [ "npm", "start" ]