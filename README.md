# trpc-sample

## Installation

```sh
npm install @trpc/server@next @trpc/client@next @trpc/react-query@next @trpc/next@next @tanstack/react-query zod

# for client-side and server-side
npm install uuid
npm install --save-dev @types/uuid
npm install --save-dev nodemon ts-node wait-on npm-run-all
npm init @eslint/config

# for server-side
npm install cors

# for client-side
npm install react-dom
npm install --save-dev @types/react @types/react-dom
npm install --save-dev webpack webpack-cli
npm install --save-dev html-webpack-plugin
npm install --save-dev webpack-dev-server
npm install --save-dev @babel/core @babel/preset-env babel-loader
npm install --save-dev style-loader css-loader eslint-loader ts-loader
# npm install --save-dev typesync
npm install --save-dev @babel/preset-react
```

## Getting started

```sh
npm install

npm run dev:server

curl http://localhost:4000/trpc/getUser\?input\=%22id%22
curl -X POST http://localhost:4000/trpc/createUser -H "Content-Type: application/json" -d '{"name":"John Smith"}'
```
