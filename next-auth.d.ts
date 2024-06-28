import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendeUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean
}

declare module "next-auth" {
  interface Session {
    user: ExtendeUser
  }
}