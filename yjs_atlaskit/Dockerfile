FROM node:16.17.1 as build
WORKDIR /atlaskit-demo
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY webpack.config.js .
COPY atlaskit.js .
RUN npm run dist
FROM nginx
COPY --from=build /atlaskit-demo/dist /usr/share/nginx/html/dist
COPY atlaskit.html /usr/share/nginx/html/index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf