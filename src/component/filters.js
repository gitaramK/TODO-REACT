import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  }
 
});


export default function Filter() {
  const classes = useStyles();
  const groupby = 10;
  const handleChange = () => {
  }
  
  return (
    <div className="">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <FormControl variant="outlined">
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              className="select"
              value={groupby}
              onChange={handleChange}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={9}>
          <TextField
            label="Dense"
            id="outlined-margin-dense"
            defaultValue="Default Value"
            className={classes.textField}
            margin="dense"
            variant="outlined"/>
        </Grid>
      </Grid>
    </div>
  );
}
