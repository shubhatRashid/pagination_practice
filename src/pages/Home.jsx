import React, { useEffect, useState } from "react"
import Card from "../components/Card"
import Pagination from "../components/Pagination"

const Home = ({data}) => {
    const [pagedata,setPageData] = useState(data.slice(0,10))
    const [currPage,setCurrPage] = useState(1)
    const getPageData = (allData) => {
        let rangeInitial = (currPage -1) * 10
        let newData = allData.slice(rangeInitial,rangeInitial+10)
        setPageData(newData)
    }
    useEffect(()=> {
        getPageData(data)
    },[currPage])
    
    return (
        <div style={{width:'99%'}}>
            <h1>Blog Posts</h1>
            <div style={{display:'flex',flexDirection:'column',gap:'40px',alignItems:'center',width:'100%',padding:'10px'}}>
            {
                pagedata.map((item,index)=> (
                <Card item={item} key = {index}/>
                ))
            }
            </div>
            <Pagination currPage={currPage} setCurrPage={setCurrPage} getPageData={getPageData} allData={data}/>
        </div>
    )
}
export default Home