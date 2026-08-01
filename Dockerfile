FROM oven/bun:latest

WORKDIR /app

COPY . .

RUN bun install

RUN bun run build

EXPOSE 3000

# Start the Nuxt 3 application with Bun
CMD ["sh", "-c", "bun .output/server/index.mjs"]
