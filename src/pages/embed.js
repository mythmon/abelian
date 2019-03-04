import React from "react";
import { graphql } from "gatsby";

import styles from "./embed.module.css";

export default function Embed({ data, location }) {
  const members = data.allMembersYaml.edges.map(e => e.node);
  let parentIndex = -1;

  if (parentIndex === -1 && location && location.href) {
    const parsedLocation = new URL(location.href);
    const parentId = parsedLocation.searchParams.get("parentId");
    if (parentId) {
      parentIndex = members.findIndex(m => m.id === parentId);
    }
  }

  if (parentIndex === -1 && typeof window !== "undefined" && window.self !== window.top) {
    // in an iframe
    const parentUrl = document.referrer;
    parentIndex = members.findIndex(m => parentUrl.includes(m.url));
  }

  let next, previous;
  if (parentIndex !== -1) {
    next = members[(parentIndex + 1) % members.length];
    // negative modulus is weird, so wrap the other way
    previous = members[(parentIndex + members.length - 1) % members.length];
  } else {
    console.log("Couldn't detect webring parent, defaulting to first and last");
    next = members[0];
    previous = members[members.length - 1];
  }

  return (
    <>
      <div className={styles.embedLayout}>
        {previous && (
          <div>
            Previous:{" "}
            <a href={previous.url} target="_parent">
              {previous.title}
            </a>
          </div>
        )}
        <div>
          <h1>
            <a href={location.origin} target="_parent">
              {data.site.siteMetadata.title}
            </a>
          </h1>
        </div>
        {next && (
          <div>
            Next:{" "}
            <a href={next.url} target="_parent">
              {next.title}
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export const pageQuery = graphql`
  query RingEmbedQuery {
    allMembersYaml {
      edges {
        node {
          id
          title
          description
          url
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
