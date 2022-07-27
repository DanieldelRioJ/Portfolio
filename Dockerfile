FROM fholzer/nginx-brotli:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/angular-web /usr/share/nginx/html/


