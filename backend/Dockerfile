FROM richarvey/nginx-php-fpm:3.1.6

# Configuración del entorno
ENV WEBROOT /var/www/html/public
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 1
ENV REAL_IP_HEADER 1
ENV COMPOSER_ALLOW_SUPERUSER 1

# Copiar archivos del proyecto
COPY . .

# Instalar dependencias de Composer
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Copiar .env.example a .env si no existe
RUN if [ ! -f .env ]; then cp .env.example .env; fi

# Generar APP_KEY de forma segura
RUN php artisan key:generate --force --no-interaction || true

# Cache de configuración
RUN php artisan config:cache
RUN php artisan route:cache
RUN php artisan view:cache

# Permisos
RUN chmod -R 777 storage bootstrap/cache

EXPOSE 80

# Usar el entrypoint nativo de nginx-php-fpm
CMD ["/start.sh"]