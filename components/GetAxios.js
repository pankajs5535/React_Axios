import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const baseUrl = "https://jsonplaceholder.typicode.com/posts/1";

function GetAxios() {

    const [my_data, SetData] = useState([]);

    // all data from url store in responce
    // then callback function : if promise return it resolve we use then callback and its rejected then we use catch callback 
    // data come at responce and we store it in my_data using SetData
    useEffect(() => {
        Axios.get(baseUrl).then((responce) => {
            SetData(responce.data);
        },[]); //if we want to code run only once
    })

    return (
        <>
            <h3>{my_data.id}</h3>
            <h3>{my_data.title}</h3>
            <h3>{my_data.body}</h3>
        </>
    )
}

export default GetAxios

 