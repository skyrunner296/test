import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "รายชื่อสมาชิกในทีม",
    url: "members",
    description:
      "แสดงรายชื่อสมาชิกทั้งหมดในทีม",
  },
  {
    text: "รายวิชาทั้งหมด",
    url: "subjects",
    description:
      "แสดงรายวิชาทั้งหมดที่มี",
  },
  {
    text: "สมาชิกแต่ละคน เรียนวิชาอะไรบ้าง วันเวลาเท่าไร ?",
    url: "subjects-of-student",
    description:
      "แสดงรายวิชาที่สมาชิกแต่ละคนลงทะเบียน",
  },
  {
    text: "คณะผู้จัดทำ",
    url: "developers",
    description:
      "รายชื่อผู้พัฒนาในทีม",
  },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <p className={styles.intro}>
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage