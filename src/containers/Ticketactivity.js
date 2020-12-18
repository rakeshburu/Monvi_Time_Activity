import React from 'react';
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import Axios from 'axios';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';




const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const Ticketactivity = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const headers = [
    { label: "Ticket_id", key: "ticket_id" },
    { label: "AssignedTo", key: "ticket_assignedto" },
    { label: "Date", key: "ticket_createddate" },
    { label: "Status", key: "ticket_status" },
  ];
  const [Data, setData] = React.useState([]);


  const getReport = () =>{
    Axios.get('http://localhost:5000/ticket')
    .then(function (response){
      console.log("response", response);
      setData(response.data.result)
    })
    .catch(function(error){
      console.log(error);
    })
  }
  React.useEffect(()=>{getReport()},[]);
  return (
    <Page
      className={classes.root}
      title="Ticketactivity"
    >
      <Container maxWidth={false}>
        <Toolbar/>
        <TableContainer component={Paper} id="table-data-container">
        <Table className={classes.table} aria-label="simple table" id="table-data">
          <TableHead>
            <TableRow>
              <StyledTableCell />
              <StyledTableCell align="left">Ticket_id</StyledTableCell>
              <StyledTableCell align="left">AssignedTo</StyledTableCell>
              <StyledTableCell align="left">Date</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>          
        {Data.map((row) => (
           <Row key={row.date} row={row} />
          //     <StyledTableRow key={row.date}>
          // <TableCell>
          // <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
          //   {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          // </IconButton>
          // </TableCell>
          //       <StyledTableCell align="right" component="th" scope="row">
          //         {row.ticket_id}
          //       </StyledTableCell>
          //       <StyledTableCell align="right">{row.ticket_assignedto}</StyledTableCell>
          //       <StyledTableCell align="right">{row.ticket_createddate}</StyledTableCell>
          //       <StyledTableCell align="right">{row.ticket_status}</StyledTableCell>
          //     </StyledTableRow>             
            ))}
            </TableBody>
        </Table>
      </TableContainer>
      </Container>
    </Page>
  );
};

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="left">
          {row.ticket_id}
        </TableCell>
        <TableCell align="left">{row.ticket_assignedto}</TableCell>
        <TableCell align="left">{row.ticket_createddate}</TableCell>
        <TableCell align="left">{row.ticket_status}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                More
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>user_name</TableCell>
                    <TableCell>email</TableCell>
                    <TableCell align="left">Ticket_updateddate</TableCell>
                    <TableCell align="left">Ticket_content</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {/* <TableRow key={historyRow.date}> */}
                      <TableCell component="th" scope="row">
                        {row.user_name}
                      </TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell align="left">{row.ticket_updateddate}</TableCell>
                      <TableCell align="left">{row.ticket_content}</TableCell>
                    {/* </TableRow> */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default Ticketactivity;
