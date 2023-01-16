

async function fetchGraphQL(operationsDoc, operationName, variables, token) {
    const result = await fetch(
      process.env.NEXT_PUBLIC_HASURA_ADMIN_URL,
      {
        method: "POST",
        headers: {
          Authorization : `Bearer ${token}`,
          'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET
        },
        body: JSON.stringify({
          query: operationsDoc,
          variables: variables,
          operationName: operationName
        })
      }
    );
  
    return await result.json();
  }

  const operationsDoc = `
    query MyQuery {
      cart {
        ID
        itemID
        userUID
      }
    }
  `;
  
  export async function fetchMyQuery(token) {
    const response = await fetchGraphQL(
      operationsDoc,
      "MyQuery",
      {},
      token
    );
    return response.data?.cart;
  }

  export async function findItemByUserId(token, itemId, userId) {
    const operationsDoc = `
      query MyQuery( $userId: String!, $itemId: String!) {
        cart(where: {userUID: {_eq: $userId}, itemID: {_eq: $itemId}}) {
          userUID
          itemID
          quantity
        }
      }
    `;
    const response = await fetchGraphQL(
        operationsDoc,
        "MyQuery",
        {itemId,
        userId
        },
        token
      );
    return response?.data?.cart;

  }
  

export async function manipulateCart(token, itemId, userId,operation) {
  const operationsDocs = `
  mutation newItem($itemId: String!, $userId: String!) {
    insert_cart(objects: {itemID: $itemId, quantity: 1, userUID: $userId}) {
      affected_rows
    }
  }
 
  mutation incrementQuantity($itemId: String!, $userId: String!) {
    update_cart(where: {itemID: {_eq: $itemId}, userUID: {_eq: $userId}}, _inc: {quantity: 1}) {
      affected_rows
    }
  }
`;
  const response = await fetchGraphQL(
    operationsDocs,
    operation ,
    { itemId, userId },
    token
  );
  return response;
}
  
  // async function startFetchMyQuery() {
  //   const { errors, data } = await fetchMyQuery();
  
  //   if (errors) {
  //     // handle those errors like a pro
  //     console.error(errors);
  //   }
  
  //   // do something great with this precious data
  //   console.log(data);
  // }
  
  // startFetchMyQuery();