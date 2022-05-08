import { Leftdivinbagpage } from "../leftdivinbagpage/leftdivinbagpage"
import { Rightdivinbag } from "../rightdivinbag/rightdivinbag"



export const Fullbagpage=()=>{


    return (
        <div style={{display:"flex",justifyContent:"center",marginTop:"4.5%"}}>
            <Leftdivinbagpage/>
            <Rightdivinbag/>
        </div>
    )
}