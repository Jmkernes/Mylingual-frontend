# Taken from: https://github.com/vercel/next.js/blob/canary/examples/with-docker-compose/next-app/dev.Dockerfile
FROM node:18-alpine

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci
COPY src ./src
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .
COPY tailwind.config.ts .
COPY postcss.config.js .
# COPY imageLoader.ts .

# only done for dev mode
COPY .env.development .

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV development

# Note: Don't expose ports here, Compose will handle that for us

# Start Next.js in development mode based on the preferred package manager
ENTRYPOINT  ["npm", "run", "dev" ]