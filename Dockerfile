FROM node
WORKDIR dist/revspeed-app/browser
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build 