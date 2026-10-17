FROM node:20.19-alpine AS builder

RUN apk --no-cache add bash g++ ca-certificates lz4-dev musl-dev cyrus-sasl-dev openssl-dev make python3

WORKDIR /home/app

COPY package.json ./
COPY yarn.lock ./
COPY providers ./providers

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn run build

FROM node:20.19-alpine AS runner

WORKDIR /home/app

COPY --from=builder /home/app/node_modules /home/app/node_modules
COPY --from=builder /home/app/build /home/app/build
COPY --from=builder /home/app/package.json /home/app/package.json
COPY --from=builder /home/app/favicon.ico /home/app/favicon.ico
COPY --from=builder /home/app/public /home/app/public
COPY --from=builder /home/app/config /home/app/config
COPY --from=builder /home/app/database /home/app/database
COPY --from=builder /home/app/src /home/app/src

EXPOSE 1337

CMD ["npm", "run", "start"]
