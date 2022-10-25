import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { format } from 'date-fns';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Todos from './Todos';

function App() {
const [value, setValue] = useState('home');

const handleChange = (event, value) => {  setValue(value);};

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}} >
        <Tabs value={value} onChange={handleChange}>
          <Tab value="home" label="Home" />
          <Tab value="todos" label="Todos" />
        </Tabs>
        {value === 'home' && <div>TERE TULEMAST!!!</div>}   
        {value === 'todos' && <Todos/>}
        </div>
    </LocalizationProvider>
  );
};

export default App;