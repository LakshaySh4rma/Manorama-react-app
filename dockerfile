# Step 1: Build stage
FROM node:20-alpine AS builder

# create app directory
WORKDIR /app

# copy package files
COPY package*.json ./

# install dependencies
RUN npm install

# copy project files
COPY . .

# build project
RUN npm run build


# Step 2: Production stage
FROM nginx:stable-alpine

# copy build files to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# expose port
EXPOSE 80

# start nginx
CMD ["nginx", "-g", "daemon off;"]