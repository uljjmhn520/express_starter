FROM keymetrics/pm2:10-alpine

MAINTAINER zengyu 284141050@qq.com

WORKDIR /app

COPY package.json /app/
COPY pm2.config.js /app/

# require command "yarn build"
COPY dist /app/dist/

# run install and chown to node
#RUN mkdir /logs -p && chown -R node:node /logs && yarn install --production && ls -al -R && chown -R node:node /app && yarn cache clean

USER node


CMD [ "pm2-runtime", "start", "pm2.config.js" ]