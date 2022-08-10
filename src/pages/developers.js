import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>คณะผู้จัดทำ</h1>
    <p>6210110036 นางสาวคริสต์มาส วีรชิตอรกานต์ </p>
    <p>6210110083 นายซีนีดีน มะยีแต </p>
    <p>6210110149 นายธีรยุทธ นุชผดุง </p>
    <p>6210110296 นายรชตะ แซ่ลี้ </p>
    <p>6210110713 นายธนากร ใสยิด</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
