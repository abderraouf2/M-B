import { verifyToken } from "../../lib/utils";
import { findItemByUserId, manipulateCart } from "../../lib/hasura";

export default async function cartItems (req, res) {
    const token = req.cookies.token;
    console.log({token});
        if (!token) {
            res.status(403)
            res.send({msg : "no cookie detected"})
        }
        else{
            const userId = await verifyToken(token);
            console.log({ userId });
            if (req.method === "POST") {
                const { itemId } =  req.query;
                if (itemId) {
                    const findItem = await findItemByUserId(token, itemId, userId);
                    console.log({findItem});
                    if (findItem.length == 0) {
                        const operation = 'newItem';
                        await manipulateCart(token, itemId, userId,operation)
                        res.send({ msg: "new Item inserted" })
                    }
                    else if (findItem?.length > 0) {
                        const operation = 'incrementQuantity';
                        await manipulateCart(token, itemId, userId,operation)
                        res.send({ msg: "item available, quantity incremented" })
                    }
                }
                else res.send({ msg: "itemId not found" })
            }
            else res.send({ msg: "method not allowed" })
        }
    
}