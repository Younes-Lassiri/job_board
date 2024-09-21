import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import prisma from './prisma';
async function findOrCreateUser(email, name, image) {
  let user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) {
    user = await prisma.user.create({
      data: {
        email,
        name,
        image,
      },
    });
  }
  return user;
}
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await findOrCreateUser(user.email, user.name, user.image);
      return true;
    },
  },
  pages: {
    signIn: '/superio/signin',
  },
};

export default NextAuth(authOptions);
