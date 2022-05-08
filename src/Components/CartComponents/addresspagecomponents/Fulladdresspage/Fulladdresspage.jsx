import { Leftdivinbagpage } from "../leftdivinbagpage/leftdivinaddresspage"
import { Rightdivinbag } from "../rightdivinbag/rightdivinbag"



export const Fulladdresspage=()=>{


    return (
        <div style={{display:"flex",justifyContent:"space-around",padding:"1%",border:"1px solid lightgrey",width:"60%",margin:"auto",font:"16px",marginTop:"4.8%" }}>
            <Leftdivinbagpage />
            <Rightdivinbag />
        </div>
    )
}