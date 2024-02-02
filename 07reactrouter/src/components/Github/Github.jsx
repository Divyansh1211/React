import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const Data = useLoaderData()
  return (
    <div className='bg-gray-700 text-white py-5 text-3xl text-center'>Github Followers: {Data.followers} <img src= {Data.avatar_url} width = {300} alt="" /> </div>
  )
}

export default Github

export const githubLoader = async () => {
    const response = await fetch('https://api.github.com/users/divyansh1211')
    return response.json()
}