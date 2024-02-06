FROM node:14 AS build
WORKDIR /user/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:latest
COPY --from=build /user/src/app/dist/* /user/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off" ]