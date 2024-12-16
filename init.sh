#! /bin/bash

# フロントエンドの作成
bun create vite front --template react-ts

cd front
bun install
#bun run dev --host

cd ..
# バックエンドの作成 hono
bun create hono back

cd back
bun install
#bun run dev --host
