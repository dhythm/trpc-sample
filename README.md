# trpc-sample

## Installation

```sh
npm install @trpc/server@next @trpc/client@next @trpc/react-query@next @trpc/next@next @tanstack/react-query zod

# for client-side and server-side
npm install uuid
npm i --save-dev @types/uuid
npm install --save-dev nodemon ts-node wait-on npm-run-all
```

## Getting started

```sh
npm install

npm run dev:server

curl http://localhost:4000/trpc/getUser\?input\=%22id%22
curl -X POST http://localhost:4000/trpc/createUser -H "Content-Type: application/json" -d '{"name":"John Smith"}'
```
