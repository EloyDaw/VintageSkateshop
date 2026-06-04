FROM richarvey/nginx-php-fpm:3.1.6

ENV WEBROOT /var/www/html/public
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 1
ENV REAL_IP_HEADER 1
ENV COMPOSER_ALLOW_SUPERUSER 1

RUN apk add --no-cache libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql

COPY . .

RUN composer install --no-dev --optimize-autoloader --no-interaction

RUN chmod -R 777 storage bootstrap/cache

COPY scripts/start.sh /usr/local/bin/start-app.sh
RUN chmod +x /usr/local/bin/start-app.sh

EXPOSE 80

CMD ["/usr/local/bin/start-app.sh"]