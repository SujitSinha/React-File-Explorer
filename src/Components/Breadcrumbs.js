import React,{useState,useEffect} from 'react'

function Breadcrumbs(props) {
    const [path,setPath]=useState(['Home']);

    var clickedPath=props.clickedfolder;

    useEffect(() => {
        clickedPath &&
    setPath([...path,clickedPath])
       
    },[clickedPath])

const pathHandler=(e,index)=>{
    var value=(e.target.innerText);
    props.newDirectory(value);
    var p=[...path];
    p.length=index+1;
    setPath(p);
}

    return (
        <div className="bar">

            {path.map((item,index)=>{
                return(
                    <div key ={index}>
                    <span className="breadcrumb" onClick={(e)=>pathHandler(e,index)}>{item}</span>{" "} /
                    </div>
                )

            })}
            
        </div>
    )
}

export default Breadcrumbs
