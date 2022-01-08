import { useEffect, useState } from "react"
import axios from "axios"

function Date(){

    const [data ,setData] = useState([]);
    const [change,setChange] = useState(false)

    const handleClick = ()=>{
        let dat = document.getElementById("one").value;
        console.log(dat);
        axios.get("https://www.gov.uk/bank-holidays.json")
        .then((res)=>{
            const temp = res.data;
            const result = temp.scotland.events.filter((el)=>{
                return el.date===dat
            })
            setData(result);
            setChange(true)
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    return <div>

        <h1 style={{color:"#524c4c"}}>Festive Finder</h1>
        <input id="one" style={{padding:"1%",width:"15%",marginTop:"4%"}} type="date"/>
        <button style={{padding:"1%",marginTop:"4%"}} onClick={handleClick}>Search</button>
        <br/>
        {
            data[0] ? <div>
                {
                    data.map((el)=>{
                        return <h1 style={{padding:"2%",backgroundColor:"#be8787",display:"inline-block",borderRadius:"5px"}}>Day : {el.notes}</h1 >
                    })
                }
            </div> : change ? <h1>No Results Found</h1> : <h1>Welcome</h1>
        }
    </div>
}

export {Date}