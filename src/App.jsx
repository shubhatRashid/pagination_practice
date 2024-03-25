import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {
  const [data,setData] = useState([])
  const fetchData = async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts")
      let jsonData = await res.json()
      setData(jsonData)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  },[])
  
  return (
    <Home data={data} />
  )
}

export default App
