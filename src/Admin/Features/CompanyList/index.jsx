import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";
import React from "react";
CompanyList.propTypes = {
    companies : PropTypes.array,
};
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
function CompanyList(props) {
  const classes = useStyles();
  const {companies} = props;

    return (
        <div className="content-list">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell align="right">Tốc độ</StyledTableCell>
                <StyledTableCell align="right">KM 6 tháng</StyledTableCell>
                <StyledTableCell align="right">KM 12 tháng</StyledTableCell>
                <StyledTableCell align="right">IP tĩnh</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {companies.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.price}</StyledTableCell>
                  <StyledTableCell align="right">{row.speed}</StyledTableCell>
                  <StyledTableCell align="right">{row.halfYear}</StyledTableCell>
                  <StyledTableCell align="right">{row.fullYear}</StyledTableCell>
                  <StyledTableCell align="right">{row.Ip}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
}

export default CompanyList;