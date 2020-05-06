import React , {useState , useEffect} from 'react';
import {API} from '../../api/Call_API';

const CategoryBtn = () => {
    const [categories , setCategories] = useState([]);

    useEffect(() => {
        _GetMenuItems();
    } , []);

    const _GetMenuItems = () => {
        API.GET_Categories()
        .then(res => {
            console.log(res);
            setCategories(res.data.data)
        }).catch(err => {
            console.log(err);
        })    
    }

    categories.map(c => {
        
    })
    

    return(
        <div>
            <select>
                <option>a</option>
            </select>
        </div>
    )
}

export default CategoryBtn;