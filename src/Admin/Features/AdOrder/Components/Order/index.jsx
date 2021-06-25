import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import familyApi from "../../../../../api/familyApi";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import orderApi from "../../../../../api/orderApi";
Order.propTypes = {
  order: PropTypes.object,
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
function Order(props) {
  const { order } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { enqueueSnackbar } = useSnackbar();
  const handleDel = async () => {
    await orderApi.remove(order._id);
    handleClose();
    enqueueSnackbar("Xóa thành công !", { variant: "success" });
    window.location.reload();
  };
  const handleStatus = async () => {
    const changeStatus = {
      status: 1,
      id: order._id,
    };
    // console.log(changeStatus);
    await orderApi.update(changeStatus);
    enqueueSnackbar("Thao tác thành công", { variant: "success" });
    window.location.reload();
  };

  //check Status
  let checkStatus = false;
  if (order.status === 1) {
    checkStatus = true;
  }
  return (
    <>
      <StyledTableRow key={order.name}>
        <StyledTableCell component="th" scope="order">
          {order.name}
        </StyledTableCell>
        <StyledTableCell align="center">{order.phone}</StyledTableCell>
        <StyledTableCell align="center">{order.location}</StyledTableCell>
        <StyledTableCell align="center">{order.packet}</StyledTableCell>

        {checkStatus ? (
          <StyledTableCell align="center">
            <button className="status-1">Đã xử lý</button>
          </StyledTableCell>
        ) : (
          <StyledTableCell align="center">
            <button className="status-0" onClick={handleStatus}>
              Chưa xử lý
            </button>
          </StyledTableCell>
        )}
        <StyledTableCell align="center">
          <span className="fix">
            {" "}
            <span className="del" onClick={handleClickOpen}>
              Xóa
            </span>
          </span>
        </StyledTableCell>
      </StyledTableRow>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Thông báo"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có thực sự muốn xóa gói tin này ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Hủy bỏ
          </Button>
          <Button onClick={handleDel} color="primary">
            Đồng ý
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Order;
