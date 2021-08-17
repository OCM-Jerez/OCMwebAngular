# Pagina WEB del OCM Jerez.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.
Update to Angular 11.0.5


Para que la páginas a las que se accede a traves del router de Angular sean accesibles desde el exterior, hay que añadir el fichero .htaccess en el directorio donde este el index.html
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
</IfModule>

Más información:
https://stackoverflow.com/questions/47814239/angular-the-requested-url-home-was-not-found-on-this-server
