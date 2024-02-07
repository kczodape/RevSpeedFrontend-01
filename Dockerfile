FROM nginx:alpine
COPY --from=build dist/revspeed-app/browser /user/share/nginx/html