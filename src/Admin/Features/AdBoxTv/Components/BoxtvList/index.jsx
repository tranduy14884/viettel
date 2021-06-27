import React from "react";
import PropTypes from "prop-types";
import { Fade } from "@material-ui/core";
import "./style.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Boxtv from "../Boxtv";
BoxtvList.propTypes = {
  Boxs: PropTypes.array,
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
function BoxtvList(props) {
  const { Boxs} = props;
  const classes = useStyles();
  return (
    <div className="content-list">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Tên gói cước</StyledTableCell>
              <StyledTableCell align="center">Giá</StyledTableCell>
              <StyledTableCell align="center">Tốc độ</StyledTableCell>
              <StyledTableCell align="center">KM 6 tháng</StyledTableCell>
              <StyledTableCell align="center">KM 12 tháng</StyledTableCell>
              <StyledTableCell align="center">KM Boxtv</StyledTableCell>
              <StyledTableCell align="center">KM Modem</StyledTableCell>
              <StyledTableCell align="center">Thao tác</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Boxs.map((row) => (
              <Boxtv boxtv ={row} key={row._id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BoxtvList;
