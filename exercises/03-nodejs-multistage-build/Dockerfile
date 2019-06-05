#
# Convert the below to use multi-stage
#
# Gold star:
# 1. Is there any simply wins we can use to reduce our file size here?
#

FROM node:lts-jessie
# Create app directory
WORKDIR /home/node/app
# Install app dependencies
COPY package*.json ./
RUN yarn install
# Add app
COPY . .

# Create bundle
RUN yarn build

EXPOSE 8080
CMD ["node", "app.js" ]
