import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./style.css";
import { logout } from "../../Auth/adminSlice";
function AdHeader(props) {
  const logginAdmin = useSelector((state) => state.admin.current);
  const isLogged = logginAdmin._id;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();

  const handleLogout = () =>{
    const action = logout();
    dispatch(action);
  }
  const history = useHistory();
  if(!isLogged){
    history.push('/admin/dangnhap');
  }
 
  return (
    <>
      <div className="header-img">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Viettel_logo_2021.svg/1024px-Viettel_logo_2021.svg.png"
          alt="#"
        />
      </div>
      <div className="header-login">
        {!isLogged ? (
          <Link to="/admin/dangnhap">
            <button>Đăng nhập</button>
          </Link>
        ) : (
          <>
        <span onClick={handleClick}>Chào admin <i class="fas fa-user-circle"></i></span>
        <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleClose}><Link to="/Admin/adminpage">Thông tin admin</Link> </MenuItem>
        <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
      </Menu>
      </>

        )}
      </div>
    </>
  );
}

export default AdHeader;
