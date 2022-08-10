import React from "react"
import { StaticQuery, graphql } from "gatsby";

export default function Header() {
  return (
    <StaticQuery
      query={graphql`
        query {
          directus {
            Member {
              id
              name
            }
          }
        }
      `}
      render={data => (
        <header>
          <h1>{data.directus.Member.name}</h1>
          <h1>hello world</h1>
        </header>
      )}
    />
  )
}