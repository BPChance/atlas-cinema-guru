import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  theme: {
    brandColor: "#1ED2AF",
    logo: "/logo.png",
    buttonText: "#ffffff",
  },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },
    async jwt({ token, account, profile }) {
      if (profile?.email) {
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
