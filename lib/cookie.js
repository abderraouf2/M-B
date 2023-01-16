import cookie from 'cookie'

const maxAge = 7*24*60*60;

export const setUserCookie = ( userUID, res ) => {
    const setCookie = cookie.serialize('token', userUID, {
        maxAge: maxAge,
        expires: new Date(Date.now() + maxAge*1000),
        secure: process.env.NODE_ENV === "production",
        path: '/'
      });
      res.setHeader("Set-Cookie", setCookie)
}