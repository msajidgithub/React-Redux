import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import swal from 'sweetalert';
import {
    Link
   } from "react-router-dom";

import AdminPannel from '../components/AdminPannel'
import { connect } from 'react-redux'
import { admin_google_login, admin_google_signOut } from '../store/actions';

 
function Dashboard(props) {
    useEffect(() => {
        if(loginStatus === false){
            handleClickOpen()
        }
    }, [])
const [admin, setAdmin] = useState({
   
})
const [loginStatus, setLoginStatus] = useState(false)


const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



 
    return (
        <div>
   
            { props.admin.uid !=='' ?    
      <AdminPannel />

//  <h1>{props.admin.name}werwer
//     <Button
//             onClick={() => props.admin_google_signOut()}
//             variant="contained"
//             color="primary"
//             size="small"
//             className='btn-main mx-2'
//             startIcon={<PersonIcon />}
//         >
//           SignOut
//         </Button>
//  </h1>

 :


 <div id="AdminSection">
               
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open responsive dialog
      </Button> */}
      <Dialog
        open={open} fullWidth
        maxWidth="sm"
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Admin Dashboard"}</DialogTitle>
        


        <DialogActions className="d-flex align-items-center justify-content-evenly">
        <Button
            onClick={() => props.admin_google_login()}
            variant="contained"
            color="primary"
            size="small"
            className='btn-main mx-2'
            startIcon={<PersonIcon />}
        >
          Signin with Google
        </Button>  
          <div className="mr-4">
          <Link to='/'>
             Back
            </Link> 
          </div>
           
        </DialogActions>

      </Dialog>
    </div>
//  <AdminPannel admin={props.admin}/>  
 }
        </div>
    )
}

const mapStateToProps = (state) => ({
      admin: state.current_admin
})

const mapDispatchToProps = (dispatch) => ({
  admin_google_login: () => dispatch(admin_google_login()),
  admin_google_signOut: () => dispatch(admin_google_signOut())

})
export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);
