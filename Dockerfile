FROM node:14.17.3-alpine as build
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY prod/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]