FROM node:24.4-alpine AS builder

WORKDIR /home/app

ARG ENV
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_BACKEND_URL
ARG NEXT_PUBLIC_EMAIL_URL
ARG NEXT_PUBLIC_EMAIL_TO

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run ci:format
RUN npm run ci:lint

RUN echo "NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL" > .env && \
  echo "NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL" >> .env && \
  echo "NEXT_PUBLIC_EMAIL_URL=$NEXT_PUBLIC_EMAIL_URL" >> .env && \
  echo "NEXT_PUBLIC_EMAIL_TO=$NEXT_PUBLIC_EMAIL_TO" >> .env

RUN npm run build

RUN if [ "$ENV" = "prd" ]; then \
  ACCESS_POLICY="Allow"; \
  else \
  ACCESS_POLICY="Disallow"; \
  fi && \
  echo "User-agent: *" > out/robots.txt && \
  echo "$ACCESS_POLICY: /" >> out/robots.txt && \
  echo "Host: $NEXT_PUBLIC_SITE_URL" >> out/robots.txt && \
  echo "Sitemap: $NEXT_PUBLIC_SITE_URL/sitemap.xml" >> out/robots.txt

FROM alpine:3.22 AS runner

ARG NEXT_PUBLIC_SITE_URL

COPY --from=builder /home/app/redirects.txt /redirects.txt

RUN apk --no-cache add apache2 openssh-server && \
  mkdir -p /var/www/localhost/htdocs && \
  chown -R apache:apache /var/www/localhost/htdocs && \
  chmod -R 755 /var/www/localhost/htdocs && \
  sed -i 's/User apache/User apache/g' /etc/apache2/httpd.conf && \
  sed -i 's/Group apache/Group apache/g' /etc/apache2/httpd.conf && \
  echo "ServerName localhost" >> /etc/apache2/httpd.conf && \
  echo "LoadModule rewrite_module modules/mod_rewrite.so" >> /etc/apache2/httpd.conf && \
  echo "LoadModule deflate_module modules/mod_deflate.so" >> /etc/apache2/httpd.conf && \
  echo '<IfModule mod_deflate.c>' >> /etc/apache2/httpd.conf && \
  echo '  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json application/xml application/xhtml+xml application/rss+xml application/x-font-ttf image/svg+xml' >> /etc/apache2/httpd.conf && \
  echo '  DeflateCompressionLevel 6' >> /etc/apache2/httpd.conf && \
  echo '  BrowserMatch ^Mozilla/4 gzip-only-text/html' >> /etc/apache2/httpd.conf && \
  echo '  BrowserMatch ^Mozilla/4\.0[678] no-gzip' >> /etc/apache2/httpd.conf && \
  echo '  BrowserMatch \bMSIE !no-gzip !gzip-only-text/html' >> /etc/apache2/httpd.conf && \
  echo '  Header append Vary Accept-Encoding' >> /etc/apache2/httpd.conf && \
  echo '</IfModule>' >> /etc/apache2/httpd.conf && \
  echo '<IfModule mod_headers.c>' >> /etc/apache2/httpd.conf && \
  echo '  <FilesMatch \.(css|js|json|gif|jpg|jpeg|png|gif|woff|woff2|eot|ttf|otf|ico|svg|webp|pdf|avif|webm|mp4)$>' >> /etc/apache2/httpd.conf && \
  echo '    Header set Cache-Control "public, max-age=31536000, immutable"' >> /etc/apache2/httpd.conf && \
  echo '  </FilesMatch>' >> /etc/apache2/httpd.conf && \
  echo '  Header always set X-Content-Type-Options "nosniff"' >> /etc/apache2/httpd.conf && \
  echo '  Header always set X-Frame-Options "SAMEORIGIN"' >> /etc/apache2/httpd.conf && \
  echo '  Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"' >> /etc/apache2/httpd.conf && \
  echo '</IfModule>' >> /etc/apache2/httpd.conf && \
  echo "RewriteEngine On" >> /etc/apache2/httpd.conf && \
  cat redirects.txt >> /etc/apache2/httpd.conf && \
  echo "RewriteCond %{REQUEST_URI} !-d" >> /etc/apache2/httpd.conf && \
  echo "RewriteRule ^(.*)/$ $NEXT_PUBLIC_SITE_URL\$1 [L,R=301]" >> /etc/apache2/httpd.conf && \
  echo "RewriteCond %{REQUEST_URI} !^/sitemap\.xml$" >> /etc/apache2/httpd.conf && \
  echo "RewriteCond %{REQUEST_FILENAME} !-f" >> /etc/apache2/httpd.conf && \
  echo "RewriteCond %{REQUEST_FILENAME} !-d" >> /etc/apache2/httpd.conf && \
  echo "RewriteCond %{REQUEST_URI} !\.(css|js|json|gif|jpg|jpeg|png|gif|woff|woff2|eot|ttf|otf|ico|svg|txt|webp|pdf|avif|webm|mp4)$" >> /etc/apache2/httpd.conf && \
  echo "RewriteRule ^(.*)$ %{REQUEST_FILENAME}.html [L]" >> /etc/apache2/httpd.conf && \
  echo "RewriteRule ^/?$ /index.html [L]" >> /etc/apache2/httpd.conf && \
  echo "root:Docker!" | chpasswd && \
  ssh-keygen -A

COPY --from=builder /home/app/out /var/www/localhost/htdocs/
COPY --from=builder /home/app/public/sitemap.xml /var/www/localhost/htdocs/sitemap.xml
COPY --from=builder /home/app/ssh/sshd_config /etc/ssh/.
COPY --from=builder /home/app/ssh/start.sh start.sh

RUN chmod +x ./start.sh

EXPOSE 80 2222

CMD ["./start.sh"]

# docker build --build-arg ENV="dev" `
# --build-arg NEXT_PUBLIC_SITE_URL="" `
# --build-arg NEXT_PUBLIC_BACKEND_URL="" `
# --build-arg NEXT_PUBLIC_EMAIL_URL="" `
# --build-arg NEXT_PUBLIC_EMAIL_TO="" `
# -t swa:alpine-3.22 --no-cache .

# docker run -d -p 80:80 -p 2222:2222 swa:alpine-3.22