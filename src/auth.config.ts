import GitHub from 'next-auth/providers/github';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { loginSchema } from './lib/login-schema';
import { getUserByEmail } from './actions/authActions';
import { compare } from 'bcryptjs';
export default {
    providers: [Credentials({
        name: 'Credentials',
        async authorize(creds, req) {
            const validated = loginSchema.safeParse(creds);
            if (validated.success) {
                const { email, password } = validated.data;
                const user = await getUserByEmail(email);

                if(!user || !user.password || !(await compare(password, user.password))) {
                    return null;
                }
                return {
                    ...user,
                    id: String(user.id),
                };
            }
            return null;
        }
    })],
} satisfies NextAuthConfig