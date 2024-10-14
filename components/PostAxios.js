import Axios  from 'axios';
import React, { useState } from 'react'

function PostAxios() {

    const [myTitle, setTitle] = useState('')
    const [myBody, setBody] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("https://jsonplaceholder.typicode.com/posts",{
            title: myTitle,
            body: myBody
            })
            .then((responce)=>{
                console.log(responce)
            }).catch((error)=>{
                console.log(error) 
            })

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td><label for="title">Enter Title:</label></td>
                        <td><input type="text" value={myTitle} name="title" id="title" onChange={(e) => setTitle(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label for="body">Enter Body:</label></td>
                        <td><input type="text" value={myBody} name="body" id="body" onChange={(e) => setBody(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center">
                            <input type="submit" name="Post" value="Submit" />
                        </td>
                    </tr>
                </table>
            </form>
        </>
    )
}

export default PostAxios


/*

import Axios  from 'axios';
import React, { useState } from 'react'

function PostAxios() {

    const [myTitle, setTitle] = useState('')
    const [myBody, setBody] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("https://jsonplaceholder.typicode.com/posts",{
            title: myTitle,
            body: myBody
            })
            .then((responce)=>{
                console.log(responce)
            }).catch((error)=>{
                console.log(error) 
            })

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td><label for="title">Enter Title:</label></td>
                        <td><input type="text" value={myTitle} name="title" id="title" onChange={(e) => setTitle(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label for="body">Enter Body:</label></td>
                        <td><input type="text" value={myBody} name="body" id="body" onChange={(e) => setBody(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center">
                            <input type="submit" name="Post" value="Submit" />
                        </td>
                    </tr>
                </table>
            </form>
        </>
    )
}

export default PostAxios


*/