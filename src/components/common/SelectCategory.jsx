import React , {useState , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {API} from '../../api/Call_API';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
  
const renderCategory = (categories) => {
    return categories.map((c) => {
    return <MenuItem value={10}>{c.routerName}</MenuItem>
    })
}

const SelectCategory = () => {
    const classes = useStyles();
    const [categories, setCategories] = useState([]);

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    useEffect(() => {
        API.GET_Categories()
        .then(res => {
            setCategory(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    } , []);

    return (
        <>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categories}
                    onChange={handleChange}
                >
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
                {renderCategory(categories)}
                </Select>
            </FormControl>
        </>
    )
}

export default SelectCategory;