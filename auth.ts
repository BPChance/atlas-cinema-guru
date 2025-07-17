import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, profile, account }) {
      if (account?.provider === "github" && profile?.email) {
        token.email = profile.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.email) {
        session.user.email = token.email as string;
      }
      return session;
    },
  },
});
