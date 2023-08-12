
> Custom date picker for Material-UI with clear button

This project provides you with a custom date picker for Material-UI that includes a clear button.


clone the repository
```
npm install
npm run dev
```  
# The component
```import { TextField, IconButton } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
const DatePickerClear = (props) => {
  const { onClear } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        {...props}
        renderInput={(params) => (
          <div style={{ position: "relative", display: "inline-block" }} >
            <TextField {...params} />
            {props.value &&
              <IconButton style={{ position: "absolute", top: ".5rem", margin: "auto", right: "2rem" }} onClick={() => onClear()}>
                <ClearIcon />
              </IconButton>
            }
          </div>
        )
        }
      /></LocalizationProvider >
  )
}

export default DatePickerClear
```


![imagen](https://github.com/HastaCs/MUI_DatePicker_ClearButton/assets/53431308/b9b499d2-ffae-4e5a-9a5d-348e9f502dde)
