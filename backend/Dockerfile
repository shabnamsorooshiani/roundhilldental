FROM node:20.19-alpine AS builder

RUN apk --no-cache add bash g++ ca-certificates lz4-dev musl-dev cyrus-sasl-dev openssl-dev make python3

WORKDIR /home/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn run build

FROM node:20.19-alpine AS runner

RUN apk --no-cache add apache2 openssh-server && \
  echo "root:Docker!" | chpasswd && \
  ssh-keygen -A

COPY --from=builder /home/app/ssh/sshd_config /etc/ssh/.
COPY --from=builder /home/app/ssh/start.sh start.sh
COPY --from=builder /home/app/node_modules /home/app/node_modules
COPY --from=builder /home/app/build /home/app/build
# COPY --from=builder /home/app/.cache /home/app/.cache
COPY --from=builder /home/app/package.json /home/app/package.json
COPY --from=builder /home/app/favicon.ico /home/app/favicon.ico
COPY --from=builder /home/app/public /home/app/public
COPY --from=builder /home/app/config /home/app/config
# COPY --from=builder /home/app/data /home/app/data
COPY --from=builder /home/app/database /home/app/database
COPY --from=builder /home/app/src /home/app/src

RUN chmod +x ./start.sh

EXPOSE 80 2222

CMD ["./start.sh"]

# docker build -t node:20.19-alpine --no-cache .
# docker run -d -p 80:80 -p 2222:2222 node:20.19-alpine
