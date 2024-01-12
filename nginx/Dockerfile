# Dockerfile
FROM nginx:latest

# Copy custom nginx.conf file
COPY conf/nginx.conf /etc/nginx/nginx.conf

# Copy additional configurations
# COPY conf.d /etc/nginx/conf.d

# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]