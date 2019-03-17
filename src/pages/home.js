import React from "react"

export const query = graphql`
  query allNodeBasicPage {
    allNodeBasicPage {
      edges {
        node {
          id
          title
          body {
            value
            format
            processed
            summary
          }
        }
      }
    }
  }
`

const HomePage = ({ data }) => (
  <div>
    <h1>Stockwatch</h1>
    {data.allNodeBasicPage.edges.map(({ node }) => (
      <div>
        <h3>{node.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: node.body.value }} />
      </div>
    ))}
  </div>
)
export default HomePage
