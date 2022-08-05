FROM node:16-alpine as builder
WORKDIR /home/node/app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN chown -R node:node /home/node/app
RUN yarn install
COPY . .
RUN yarn build
RUN rm -r node_modules
RUN yarn install --frozen-lockfile --production

FROM node:16-alpine as production
WORKDIR /home/node/app
COPY --from=builder /home/node/app ./
EXPOSE 3000
CMD ["node", "dist/main.js"]