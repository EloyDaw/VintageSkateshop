FROM richarvey/nginx-php-fpm:3.1.6

# Configuración del entorno
ENV WEBROOT /var/www/html/public
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 1
ENV REAL_IP_HEADER 1
ENV SKIP_COMPOSER 1
ENV COMPOSER_ALLOW_SUPERUSER 1

# Copiar archivos del proyecto
COPY . .

# Instalar dependencias
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Optimizaciones de Laravel
RUN php artisan key:generate --force
RUN php artisan config:cache
RUN php artisan route:cache
RUN php artisan view:cache

# Permisos necesarios
RUN chmod -R 777 storage bootstrap/cache

# Exponer puerto dinámico de Render
EXPOSE $PORT

# Comando de inicio
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=$PORT"]