# -----------------------------
# Stage 1: Build
# -----------------------------
FROM node:24.11.1-alpine AS builder

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and lock file for caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all source files
COPY . .

# Build the production app
RUN npm run build

# -----------------------------
# Stage 2: Runtime
# -----------------------------
FROM nginx:alpine AS runtime

# Copy built files from builder stage
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port for the container
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]