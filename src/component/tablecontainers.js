import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
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
  
  return (
    <div className="root">
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
            <TableRow >
              <TableCell colSpan={5} align="center">Row complete</TableCell></TableRow>
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
    </div>
  );
}
