import React from "react";
import "../components/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { ArrowDropDown } from "@mui/icons-material";
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();
  const user=useSelector(selectUser);

  const signOut=()=>{
    auth.signOut()
    .then(()=>{
      dispatch(logout())
    })
  }

  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://cdn.freelogovectors.net/wp-content/uploads/2023/04/gmail-logo-freelogovectors.net_.png" alt="" />
      </div>
      <div className="header_middle">
        <SearchIcon/>
        <input type="text" placeholder="Search Mail" />
        <ArrowDropDown className="header_inputcaret"/>
      </div>
      <div className="header_right">
        <IconButton>
          <AppsIcon/>
        </IconButton>
        <IconButton>
          <NotificationsIcon/>
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl}/>
      </div>
    </div>
  );
}

export default Header;
