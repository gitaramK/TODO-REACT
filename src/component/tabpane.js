import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React from 'react';

export default function TabPane() {
  const value = 0;
  const handleChange = () => {
  }
  return (
    <div className="">
      <AppBar position="relative">
        <Tabs value={value} onChange={handleChange} aria-label="">
          <Tab label="All" />
          <Tab label="Pending" />
          <Tab label="Completed" />
        </Tabs>
      </AppBar>
    </div>
  );
}
