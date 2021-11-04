FROM node:13
WORKDIR /usr/src/app

COPY package*.json tsconfig*.json ./
RUN npm install

COPY src/ src/

RUN npm run build

CMD ["npm", "run", "start"]
