import { setUserCookie } from "../../lib/cookie"
import { addUser, isNewUser } from "./firebase";
import jwt from "jsonwebtoken";


export const setCookie = () => {
    const cookie = setUserCookie()
}

export default async function login(req, res) {
    if (req.method === 'POST') {
        const auth = req.headers.authorization;
        const name = req.headers.name;
        const phoneNumber = req.headers.number;
        console.log(typeof(phoneNumber));
        console.log(phoneNumber);
        console.log({name});
        const userUID = auth ? auth.substr(7) : '';
        console.log({userUID});
        const token = jwt.sign({
            issuer: `${userUID}`,
            iat: Math.floor(Date.now()/1000),
            exp: Math.floor(Date.now()/1000 + 7*24*60*60),
           
          },process.env.JWT_SECRET);
          console.log({token});
        const NewUser =  await isNewUser(userUID);
        console.log(NewUser);
        if (NewUser) {
            addUser(name , phoneNumber, userUID);
            const cookie = setUserCookie(token, res)
            res.send({ done : true ,msg : 'this is a new user'})
        }
        else {
            const cookie = setUserCookie(token, res)
            res.send({ done : true ,msg : 'this user already exists'})
        }
        
        // if (user.userUID) {
        //     addUser(this.state.name, this.state.phoneNumber, user)
        // }
    }
}