# =========================
# Dockerfile Bun.js + Drizzle
# =========================
FROM oven/bun:1.1.35
WORKDIR /app

RUN apt-get update && apt-get install -y \
    openssl \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .

ENV PORT=3333
EXPOSE 3333

# ✅ Executar migrations no runtime, se necessário
CMD ["sh", "-c", "bun run start"]
