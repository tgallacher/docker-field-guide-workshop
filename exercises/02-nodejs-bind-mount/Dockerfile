#
# Here we start from our solution from the last exercise.
#

FROM node:lts-alpine
# Create app directory
WORKDIR /home/node/app
# Install app dependencies
COPY package*.json ./
RUN npm install
# Add app
COPY . .

EXPOSE 8080
# We need to use "nodemon" tool to watch
# for changes + auto reload our app
#
# And we use "npx" as `nodemon` isn't
# installed globally inside the container.
CMD ["npx", "nodemon", "app.js" ]
