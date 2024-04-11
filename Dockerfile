FROM node:22-alpine as debug

RUN mkdir -p /app

WORKDIR /app

COPY package.json .

ARG NODE_ENV

RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

RUN npm install -g nodemon

COPY . ./

EXPOSE 3030

CMD [ "npm", "start:dev" ]