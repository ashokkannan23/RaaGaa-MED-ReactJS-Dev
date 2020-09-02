import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import './CSS/dateofbirth.css'
 
import "react-datepicker/dist/react-datepicker.css";

function Dateofbirth() {
  const [selectedDate, setselectedDate] = useState(null)
  // const ExampleCustomInput = ({ value, onClick }) => (
  //   <button  className="example-custom-input" placeholder="DOB" onClick={onClick}>
  //     {value}
  //   </button>
  // );
  return (
    <>
    <DatePicker
    selected={selectedDate} 
    onChange={date => setselectedDate(date)}
    dateFormat='dd/MM/yyyy'
    showYearDropdown
    placeholderText='DOB *'
    className='ExampleCustomInput'
    minDate={new Date()}
      />
      </>
  )
}

export default Dateofbirth
