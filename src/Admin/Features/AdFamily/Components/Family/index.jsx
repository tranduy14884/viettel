import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import familyApi from '../../../../../api/familyApi';
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
Family.propTypes = {
    family : PropTypes.object,
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
function Family(props) {
    const {family} = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const {enqueueSnackbar} = useSnackbar();
    const handleDel = async ()=>{
        await familyApi.remove(family._id);
        handleClose();
        enqueueSnackbar('Xóa thành công !' , {variant :'success'});
        window.location.reload();
    }
    return (
        <>
          <StyledTableRow key={family.name}>
                <StyledTableCell component="th" scope="family">
                  {family.name}
                </StyledTableCell>
                <StyledTableCell align="center">{family.price}</StyledTableCell>
                <StyledTableCell align="center">{family.speed}</StyledTableCell>
                <StyledTableCell align="center">{family.halfYear}</StyledTableCell>
                <StyledTableCell align="center">{family.fullYear}</StyledTableCell>
                <StyledTableCell align="center"><span><span className="fix"><Link to={`/admin/giadinh/sua/${family._id}`}> Sửa</Link></span>&nbsp; <span className="del" onClick={handleClickOpen}>Xóa</span></span></StyledTableCell>
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

export default Family;