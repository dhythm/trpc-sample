// @filename: server.ts
import { initTRPC } from "@trpc/server";
import { z } from "zod";
const t = initTRPC.create();

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

export type AppRouter = typeof appRouter;
