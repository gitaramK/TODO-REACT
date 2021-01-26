import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React from 'react';
import Filter from '../component/filters';
import Modal from '../component/modal';
import TabPane from '../component/tabpane';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: '16px 32px 24px',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2)',
    backgroundColor: '#fff'
  }
});
function createRow(desc, qty, unit) {
  return { desc, qty, unit };
}
const rows = [
  createRow('Paperclips (Box)', 100, 1.15)
];
export default function ToDo() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="root">
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <h1>TODO App</h1>
        </Grid>
        <Grid item xs={3}>
          <AddCircleIcon color="primary" fontSize="large" className="addIcon" onClick={handleOpen}></AddCircleIcon>
        </Grid>
      </Grid>
      <br></br>
      <Filter />
      <br></br><br></br>
      <TabPane />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>

            <TableRow>
              <TableCell>Summary</TableCell>
              <TableCell align="right">Priority</TableCell>
              <TableCell align="right">Created On</TableCell>
              <TableCell align="right">Due By</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow ><TableCell colSpan={5} align="center">Row complete</TableCell></TableRow>
            {rows.map((row) => (
              <TableRow key={row.desc}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.unit}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={open} handleClose={handleClose}/>
      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal> */}

    </div>
  );
}
