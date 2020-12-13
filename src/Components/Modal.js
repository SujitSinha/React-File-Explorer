import React ,{useState,useEffect}from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Modal(props) {
  const [open, setOpen] = useState(false);
  const [folder, setFolder] =useState();
 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.modalopen();
  };

const folderName=(e)=>{
    setFolder(e.target.value)
}

const saveFolder=()=>{
    setOpen(false);
    props.modalopen();
    props.saveFolder(folder);
}

useEffect(()=>{
handleClickOpen();

},[])

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
        <DialogTitle id="form-dialog-title">Type Folder name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Folder Name"
            type="text"
            fullWidth
            onChange={folderName}
          />
        </DialogContent>
        <DialogActions>
         
          <Button onClick={saveFolder} color="primary">
            Create Folder
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>      
    </div>
  );
}
