import React,{useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    const dataFetchedFromApi = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(datafetched => {
    //     console.log(datafetched);
    //     setData(datafetched)
    //  })
    // }, [])

  return (
    <div className='bg-gray-600 text-white text-3xl p-4 text-center'>updated at : {dataFetchedFromApi.updated_at}
    <img src="https://media.licdn.com/dms/image/v2/D4D03AQHPwZAjp6JUjA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723744993527?e=1736985600&v=beta&t=XQnFWN3qh5O2Kj2oB3F1O-J4QAiP0e3prN0vRz0P4H4" alt="" className='h-60 mb-7 rounded-sm' />
    
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const response = await fetch("https://api.github.com/users/hiteshchoudhary")
  return response.json()
}