// @filename: server.ts
import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import {
  CreateExpressContextOptions,
  createExpressMiddleware,
} from "@trpc/server/adapters/express";
import express from "express";
import { z } from "zod";

const createContext = ({ req, res }: CreateExpressContextOptions) => ({});
type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

type User = { id: string; name: string };
const userList: User[] = [];

const appRouter = t.router({
  getUser: t.procedure.input(z.string()).query((req) => {
    return { id: req.input, name: "Bilbo" };
  }),
  createUser: t.procedure
    .input(z.object({ name: z.string().min(5) }))
    .mutation(async (req) => {
      const id = `${Math.random()}`;
      const user = {
        id,
        name: req.input.name,
      };
      userList.push(user);
      return user;
    }),
});

const app = express();
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
