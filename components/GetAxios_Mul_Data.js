import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const baseUrl = "https://jsonplaceholder.typicode.com/posts/";

function GetAxios_Mul_Data() {
    const [my_data, SetData] = useState([]);

    // all data from url store in responce
    useEffect(() => {
        Axios.get(baseUrl).then((responce) => {
            SetData(responce.data);
        }, []); //if we want to code run only once

    })
    return (
        <>
            {
                my_data.map((item) => {
                    const { id, title, body } = item;
                    return (
                        <div className='m_data' key={id}>
                            <h3>{id}</h3>
                            <h3>{title}</h3> 
                            <h3>{body}</h3>
                            {/* <h3>{title.slice(0, 10)}</h3> */}
                        </div>
                    );
                })
            }
        </>
    )
}

export default GetAxios_Mul_Data


 


// import React, { useEffect, useState } from 'react'
// import Axios from 'axios'

// const baseUrl = "https://jsonplaceholder.typicode.com/posts/";

// function GetAxios_Mul_Data() {
//     const [my_data, SetData] = useState([]);

//     // all data from url store in responce
//     useEffect(() => {
//         Axios.get(baseUrl).then((responce) => {
//             SetData(responce.data);
//         }, []); //if we want to code run only once

//     })
//     return (
//         <>
//             {
//                 my_data.map((item) => {
//                     const { id, title, body } = item;
//                     return (
//                         <div className='m_data' key={id}>
//                             <h3>{id}</h3>
//                             <h3>{title}</h3> 
//                             <h3>{body}</h3>
//                             {/* <h3>{title.slice(0, 10)}</h3> */}
//                             </div>
//                         );
//                     })
//                 }
//             </>
//         )
//     }
    
// export default GetAxios_Mul_Data