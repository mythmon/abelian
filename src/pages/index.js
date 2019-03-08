import React from "react";
import { graphql } from "gatsby";

import FullLayout from "../components/FullLayout";
import styles from "./index.module.css";

export default function IndexPage({ data }) {
  const members = data.allMembersYaml.edges.map(e => e.node);
  return (
    <FullLayout>
      <p>
        This is a webring of sites by people in the Mozilla Portland office. The contained sites
        have themes including personal blogs, interesting side projects, adorable pets, and silly
        demos.
      </p>
      <p>
        Wikipedia describes a <a href="https://en.wikipedia.org/wiki/Webring">webring</a> as "a
        collection of websites linked together in a circular structure, and usually organized
        around a specific theme."
      </p>

      <h2>Explore the Ring</h2>
      <p>
        Every site on the ring must include a navigation footer that links to it's neighbors in the
        ring. An embeddable page is provided for convenience. Here is a demo of the navigation
        footer.
      </p>
      <iframe
        className={styles.embedPreview}
        title="embed-preview"
        src="./embed/"
        frameBorder="no"
        scrolling="no"
      />

      <h2>Join the Ring</h2>
      <ol>
        <li>
          <p>Add the ring's navigation on your site. Here's an example:</p>
          <pre className={styles.code}>
            <code>
              {`<iframe\n` +
                `  src="https://abelian.now.sh/embed/"\n` +
                `  frameBorder="no"\n` +
                `  scrolling="no"\n` +
                `  height="80"\n` +
                `  width="800"\n` +
                `></iframe>`}
            </code>
          </pre>
          <p>
            The navigation will react to changes in the size, and you can also size the iframe with
            CSS for more flexibility.
          </p>
        </li>
        <li>
          <p>
            File a pull request on the Abelian repository, editing the file{" "}
            <a href="https://github.com/mythmon/abelian/edit/master/data/members.yaml">
              data/members.yaml
            </a>
            .
          </p>
        </li>
      </ol>

      <h2>Members of the Ring</h2>
      <ul>
        {members.map(member => (
          <li key={member.url}>
            <h3>
              <a href={member.url}>{member.title}</a>
            </h3>
            <p>{member.description}</p>
          </li>
        ))}
      </ul>
    </FullLayout>
  );
}

export const pageQuery = graphql`
  query MembersIndexQuery {
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
  }
`;
