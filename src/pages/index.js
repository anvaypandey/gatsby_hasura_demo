import React from "react"

import { graphql } from 'gatsby';

const naam = "Anvay";

export const GET_DOGS = (graphql`
query MyQuery ($name : String){
  test {
    user(where: {first_name: {_eq: $name}}) {
      user_id
      first_name
      last_name
      acct_active
    }
  }
}
`,
{
  name : naam
});

export default ({data}) => {
return <div>{data.test.user[0].user_id}</div>
}


