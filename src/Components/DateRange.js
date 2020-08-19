import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './CSS/react_dates_overrides.css'
import 'react-dates/initialize'
import {DateRangePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'


class DateRange extends Component {
    constructor(props) {
        super(props)

        this.state = {
            StartDate: null,
            EndDate: null
        }
    }

    render() {
        return (
            <>
                <DateRangePicker startDate={this.state.startDate}// momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({startDate, endDate}) => this.setState({startDate, endDate})} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({focusedInput})}
                    isOutsideRange={()=> false} // PropTypes.func.isRequired,
                />

            </>
        )
    }
}

export default DateRange
