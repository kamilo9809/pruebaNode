FROM node:22

WORKDIR /app

COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["./wait-for-it.sh", "db:3306", "--", "npm", "run", "dev"]