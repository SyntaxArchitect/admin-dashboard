import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { users } from "@/app/helpers/constants";

export const authOptions = {
    providers: [
        CredentialsProvider(
            {
                name: "credentials",
                credentials: {
                    email: { label: "Email", type: "text" },
                    password: { label: "Password", type: "password" }
                },
                async authorize(credentials, req) {
                    if (!credentials || !credentials.email || !credentials.password) {
                        return null;
                    }
                    const user = users.find(user => user.email === credentials.email && user.password === credentials.password);
                    console.log(user);
                    if (user) {
                        return user;
                    } return null;

                }
            }
        ),
        GoogleProvider(
            {
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            }
        )
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/"
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }