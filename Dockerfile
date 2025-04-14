FROM oven/bun:latest

WORKDIR /app

COPY . .

RUN bun install

RUN bun run build

EXPOSE 42561

# Start the Nuxt 3 application with Bun
RUN PORT=42561 bun .output/server/index.mjs
