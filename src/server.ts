// @filename: server.ts
import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import {
  CreateExpressContextOptions,
  createExpressMiddleware,
} from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

const createContext = ({ req, res }: CreateExpressContextOptions) => {
  return { req, res };
};
type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

type User = { id: string; name: string };
const userList: User[] = [
  { id: "9b47e0ac-899a-42ec-9459-5370ee6f4fb3", name: "Bilbo" },
];

const appRouter = t.router({
  getUser: t.procedure.input(z.string()).query((req) => {
    const user = userList.find((v) => v.id === req.input);
    if (!user) return null;
    return user;
  }),
  createUser: t.procedure
    .input(z.object({ name: z.string().min(5) }))
    .mutation(async (req) => {
      const id = `${uuidv4()}`;
      const user = {
        id,
        name: req.input.name,
      };
      userList.push(user);
      return user;
    }),
});

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(4000, () => {
  console.log(`🚀  Server ready at http://localhost:4000/trpc`);
});

export type AppRouter = typeof appRouter;
