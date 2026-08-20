import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import AppleProvider from 'next-auth/providers/apple';

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'demo-google-client-id',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'demo-google-client-secret',
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID || 'demo-apple-id',
      clientSecret: process.env.APPLE_SECRET || 'demo-apple-secret',
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        (session.user as any).id = token.sub;
      }
      return session;
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/dashboard`;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || 'hotelhub-secret-key-2026-production',
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
