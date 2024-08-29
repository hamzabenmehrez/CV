# Step 1: Use an official Nginx base image
FROM nginx:alpine

# Step 2: Copy your static website files to the Nginx directory
COPY . /usr/share/nginx/html

# Step 3: Expose port 80
EXPOSE 80

# Step 4: Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
