import * as React from 'react';
import '../styles/style.css';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { Link } from 'gatsby';
import { useStaticQuery, graphql, } from 'gatsby';
import Layout from "../components/layout"
import Seo from "../components/seo"
// import Navbar from '../components/navbar';

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const Head = () => <Seo title="รายวิชาทั้งหมด" />
const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    directus {
      Member {
        id
        name
      }
      Subject {
        name
        id
        start_time
        end_time
      }
      Enrollment {
        id
        subject_id {
          name
          start_time
          end_time
        }
        member_id {
          enrollment_id {
            id
          }
          name
        }
      }
    }
  }
`
  );

  return (
    <Layout>
      <h1>รายชื่อสมาชิกทั้งหมด</h1>
      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Student ID</StyledTableCell>
                <StyledTableCell align="left">Student Name</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.directus.Member.map((member) => (
                <StyledTableRow key={member.id}>
                  <StyledTableCell component="th" scope="row">
                    {member.id}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {member.name}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default IndexPage;