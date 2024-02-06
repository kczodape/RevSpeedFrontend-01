FROM nginx

COPY /dist/revspeed-app/browser /user/share/nginx/html


COPY . /usr/share/nginx/html