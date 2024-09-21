import { hash } from 'bcryptjs';
import prisma from '@/app/lib/prisma';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, password } = req.body;
    try {
      const hashedPassword = await hash(password, 10);
      const user = await prisma.user.create({
        data: {
          email,
          name,
          password: hashedPassword,
        },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error creating user' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
