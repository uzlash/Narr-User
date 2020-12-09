FROM node:latest as build-stage
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ .
RUN npm run build
FROM nginx:latest as production-stage
LABEL author="Usman Murtala <uzlash16@gmail.com>"
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf