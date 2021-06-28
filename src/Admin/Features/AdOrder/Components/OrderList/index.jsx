import React, { useState } from "react";
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
import {Link} from "react-router-dom";
import Order from "../Order";
import Pagination from "react-js-pagination";
import { useEffect } from "react";
OrderList.propTypes = {
  orderList: PropTypes.array,
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
function OrderList(props) {
  const { orderList } = props;
  const classes = useStyles();
  const [activePage, setActivePage] = useState(1);
  const [ordersPerpage, setOrdersPerpage] = useState(6);
  const lastIndex = activePage*ordersPerpage;
  const firstIndex = lastIndex - ordersPerpage;
  const [currentList, setCurrentList] = useState([]);
  const handlePageChange = (pageNumber)=>{
    setActivePage(pageNumber);
  }
  useEffect(()=>{
    setCurrentList(orderList.slice(firstIndex,lastIndex));
  },[orderList.slice(firstIndex,lastIndex).length - activePage]);
  // console.log(currentList);
  return (
    <div className="content-list">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Họ tên khách hàng</StyledTableCell>
              <StyledTableCell align="center">Số điện thoại (+84)</StyledTableCell>
              <StyledTableCell align="center">Địa chỉ</StyledTableCell>
              <StyledTableCell align="center">Gói cước</StyledTableCell>
              <StyledTableCell align="center">Thời gian</StyledTableCell>
              <StyledTableCell align="center">Trạng thái</StyledTableCell>
              <StyledTableCell align="center">Thao tác</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentList.map((row) => (
              <Order order={row} key={Math.random()} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="container order-pagination">
            <div className="pagination">
              <Pagination
                itemClass="page-item"
                linkClass="page-link"
                activePage={activePage}
                itemsCountPerPage={ordersPerpage}
                totalItemsCount={orderList.length}
                pageRangeDisplayed={Math.ceil(orderList.length/ordersPerpage)}
                onChange={handlePageChange}
              />
            </div>
          </div>
    </div>
  );
}

export default OrderList;
