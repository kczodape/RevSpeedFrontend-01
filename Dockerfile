FROM node
WORKDIR ./
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm build