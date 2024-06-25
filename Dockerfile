FROM node:20 as build

WORKDIR /usr/src/app

COPY . .

RUN npm i

FROM node:alpine as main

COPY --from=build /usr/src/app /

EXPOSE 3000

CMD ["npx", "nx", "start"]
