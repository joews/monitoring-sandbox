FROM node:12

# Create app directory
WORKDIR /usr/src/app

# install app dependencies
COPY package*.json ./
RUN npm install

# install pm2 and prometheus exporter
RUN npm install pm2 -g
RUN pm2 install pm2-metrics


# Bundle app source
COPY . .

EXPOSE 3000
CMD ["pm2-runtime", "ecosystem.config.js"]