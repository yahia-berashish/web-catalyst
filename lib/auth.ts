import { PrismaAdapter } from "@auth/prisma-adapter";
import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import type { AuthOptions, NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import prisma from "./db";
import { Provider } from "next-auth/providers/index";

export const providers: Provider[] = [
  GithubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }),
];

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const config: AuthOptions = {
  //   adapter: PrismaAdapter(prisma),
  providers,
  // callbacks: {
  //   async signIn(params) {
  //     console.log("signIn:", params);
  //     return true;
  //   },
  //   async jwt(params) {
  //     console.log("jwt:", params);
  //     return params?.token;
  //   },
  //   async session(params) {
  //     console.log("session:", params);
  //     return params?.session;
  //   },
  // },
} satisfies NextAuthOptions;

// Use it in server contexts
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config);
}

// Environment variable validation
declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      GITHUB_ID: string;
      GITHUB_SECRET: string;
    }
  }
}
