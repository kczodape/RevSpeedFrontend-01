FROM node:16.4.0 as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run prod

FROM nginx:1.19
COPY --from=build /app/dist/revspeed-app/browser/ /usr/share/nginx/html