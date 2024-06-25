FROM node:20 as build

WORKDIR /usr/src/app

COPY . .

RUN npm i

RUN npx nx build

FROM node:alpine as main

COPY --from=build /usr/src/app /usr/src/app

WORKDIR /usr/src/app

EXPOSE 3000

CMD ["npm", "start"]
