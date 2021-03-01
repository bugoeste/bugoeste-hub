FROM nginx:alpine
COPY dist/apps/bugoeste-hub /usr/share/nginx/html
