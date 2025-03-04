FROM node:lts-alpine
COPY . /usr/src/app/
WORKDIR /usr/src/app/
RUN npm i
EXPOSE 3000
CMD ["npm", "start"]
