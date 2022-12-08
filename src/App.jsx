import { useState } from 'react'

import './App.css'
import DatePickerClear from './CustomDatePicker'
import { format } from 'date-fns'
function App() {
  const [date, setDate] = useState(null)

  return (
    <div className="App">

      <h2>MUI Datepicker with clear button</h2>
      <p>{date && "Selected: " + format(date, 'dd MMM yyyy')}</p>
      <DatePickerClear value={date} onChange={(e) => setDate(e)} onClear={() => setDate(null)} />
    </div >
  )
}

export default App
