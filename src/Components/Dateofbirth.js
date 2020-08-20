import React, { Component } from 'react'
import moment from 'moment';
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

class Dateofbirth extends Component {
    state= {
        createdAt: moment(),
        calendarFocused: false
      };
    
      onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }));
      };
    
      onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
      };

  render() {
    return (
      <>
          <SingleDatePicker
              date={this.state.createdAt} 
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused} 
              onFocusChange={this.onFocusChange} 
              numberOfMonths={1}
              displayFormat="DD/MM/YYYY"
          />
      </>
    )
  }
}

export default Dateofbirth
