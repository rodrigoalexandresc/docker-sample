FROM node:12.14.0-slim as node
WORKDIR /app
COPY package.json /app/
RUN npm i npm@latest -g
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm run build

FROM nginx:1.17
COPY --from=node /app/dist/ng9test /usr/share/nginx/html
#COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf