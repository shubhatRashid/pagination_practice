const Pagination = ({currPage,setCurrPage,getPageData,allData}) => {
    const lastPage = allData.length / 10
    
    const prePage = () => {
        if (currPage-1 !== 0){
            setCurrPage(currPage-1)
        }
    }
    const nextPage = () => {
        if (currPage+1 !== lastPage+1){
            setCurrPage(currPage+1)
        }
    }

    const jumpTopage = (jump) => {
        setCurrPage(jump)
    }
    return (
        <div style={{display:'flex',width:'100%',gap:"25px",justifyContent:'space-around',alignItems:'center'}}>

            {currPage!=1 &&<button style={styles.buttonStyle} onClick={prePage}>prev</button>}

            <div style={{display:'flex',gap:"25px"}}>
                <button style={styles.numberStyle}>{currPage}</button>
                {currPage+1 < lastPage+1 &&<button style={styles.numberStyle} onClick={() => jumpTopage(currPage+1)}>{currPage+1}</button>}
                {currPage+2 < lastPage+1 &&<button style={styles.numberStyle} onClick={() => jumpTopage(currPage+2)}>{currPage+2}</button>}
                <span>...</span>
            </div>

            {currPage != lastPage && <button style={styles.buttonStyle} onClick={nextPage}>next</button>}
        </div>
    )
}
const styles = {
    buttonStyle :{
        borderRaduis:'20px',
        padding: '0 10px',
        backgroundColor:'gray',
        color:'white',
        cursor:'pointer'
    },
    numberStyle:{
        color:'white',
        backgroundColor:'gray',
        cursor:'pointer'
    }
}
export default Pagination