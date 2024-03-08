import React, { useEffect, useState } from 'react'


const Github = () => {
    const [data, setData] = useState(0)
    useEffect(() => {
        fetch('https://api.github.com/users/Divesh1207')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
    }, [])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>
            Github Followers:{data.followers}
        </div>
    )
}

export default Github
