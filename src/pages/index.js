import * as React from 'react';
import '../styles/style.css';
import {
  Box,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { useStaticQuery, graphql } from 'gatsby';
// import Navbar from '../components/navbar';

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
    <>
      <div>
        {/* <Navbar /> */}
      </div>

      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Student ID</StyledTableCell>
                <StyledTableCell align="left">Student Name</StyledTableCell>
                <StyledTableCell align="left">Information</StyledTableCell>
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
                  <StyledTableCell align="left">
                    <Link underline="none" href={`#${member.id}`}>
                      See more
                    </Link>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {data.directus.Member.map((member) => (
        <div className="profile-container" id={member.id}>
          <div className="img-container">
          </div>
          <div className="typo-container">
            <Box sx={{ width: '100%', maxWidth: 500, mt: '60px', ml: '50px' }}>
              <Typography variant="h5" component="div" gutterBottom>
                member ID: {member.id}
              </Typography>
              <Typography variant="h5" component="div" gutterBottom>
                member Name: {member.name}
              </Typography>

            </Box>
          </div>
        </div>
      ))}
      {/* {data.directus.Enrollment.map((enrollment) => (

        <Typography variant="h5" component="div" gutterBottom>
          enrollment :
        </Typography>
      {
          Enrollment.map((enrollment) => {
            return (
              <Typography
                key={enrollment.enrollment.id}
                variant="h5"
                component="div"
                gutterBottom
              >
                {enrollment.enrollment.id}
                {enrollment.enrollment.subject_id.name}
              </Typography>
            );
          })
        }
      ))} */}
    </>
  );
};

export default IndexPage;