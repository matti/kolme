FROM node:12.7

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
ENTRYPOINT [ "/app/run.sh" ]
