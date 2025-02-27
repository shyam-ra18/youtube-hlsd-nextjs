import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    session: {
        strategy: 'jwt',
    },
    // secret: process.env.NEXTAUTH_SECRET,
    // pages: {
    //     signIn: '/signin'
    // },

}
