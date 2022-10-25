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

function Todos() {
  const [todo, setTodo] = useState({ date: new Date(), description: '', priority: '' });
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('one');

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const dateChanged = (value) => {
    setTodo({ ...todo, date: value });
  }

  const addTodo = (event) => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (index) => {
    const todos2 = todos.filter((todo, i) => i !== index);

    setTodos(todos2);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div style={{ width: '500px', margin: 'auto' }}>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" marginTop="20px">
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="dd/MM/yyyy"
            value={todo.date}
            onChange={dateChanged}
            renderInput={(params) => <TextField {...params} />}
          />

          <TextField type="text" onChange={inputChanged} variant="standard"
            label="Description" name="description" value={todo.description} />

          <TextField type="text" onChange={inputChanged} variant="standard"
            label="Priority" name="priority" value={todo.priority} />

          <Button onClick={addTodo} variant="contained">Add</Button>
        </Stack>
        <table style={{ borderSpacing: '8px' }}>
          <tr>
            <th style={{ width: '100px' }}>Date</th>
            <th style={{ width: '200px' }}>Description</th>
            <th style={{ width: '100px' }}>Priority</th>
          </tr>
          <tbody>
            {
              todos.map((todo, index) => <tr key={index}><td>{format(todo.date, "dd.MM.yyyy HH.mm")}</td><td>{todo.description}</td><td>{todo.priority}</td>
                <button onClick={() => deleteTodo(index)}>Delete</button> </tr>)
            }
          </tbody>
        </table>
      </div>
    </LocalizationProvider>
  );
};

export default Todos;