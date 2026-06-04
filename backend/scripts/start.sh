#!/bin/bash
set -e
php artisan config:clear
php artisan key:generate --force --no-interaction || true
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan migrate --force

/start.sh