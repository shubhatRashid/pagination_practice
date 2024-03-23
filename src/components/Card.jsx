import React from "react"

const Card = ({item}) => {
    return (
        <div 
        style={{
            display:'flex',
            flexDirection:'column',
            width:'100%',
            gap:'20px',
            alignItems:'start',
            marginLeft:'5px',
            borderRadius:'20px',
            padding:'10px',
            fontFamily:'serif',
            color:'white',
            backgroundColor:'gray'
        }}>
            <div>
                <h3>Post {item.id} :</h3>
            </div>
            <div style={{marginLeft:'20px'}}>
                {item.title}
            </div>
            <div  style={{marginLeft:'20px'}}>
                {item.body}
            </div>
        </div>
    )
}

export default Card