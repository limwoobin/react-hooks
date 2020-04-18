import React , { useState } from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const DateForm = (props) => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
        if(date >= new Date()){
            alert('선택하신 날짜가 맞지 않습니다.');
            return;
        }
        setSelectedDate(dateConvert(date));
        props.callBackDate(dateConvert(date));
    };

    const dateConvert = (changeDate) => {
        let year = changeDate.getFullYear();
        let month = changeDate.getMonth() + 1;
        let day = changeDate.getDate();
        if(month < 10) month = '0' + month;
        if(day < 10) day = '0' + day;
        changeDate = year + '/' + month + '/' + day;
        return changeDate;
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>                
            <Grid container justify="space-around">
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="yyyy/MM/dd"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    )
}

export default DateForm;