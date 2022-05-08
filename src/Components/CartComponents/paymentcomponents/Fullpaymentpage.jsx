import { Leftdiv } from "./leftdiv"
import { Paymenttotalprice } from "./righttdv"




export const Fullpaymentpage=()=>{

    return(
        <div style={{display:"flex",justifyContent:"center",marginTop:"4.8%"}}>
            <div style={{flex:"0.5"}}></div>
            <div style={{flex:"1"}}><Leftdiv/></div>
            <div style={{flex:"1"}}><Paymenttotalprice/></div>
            <div style={{flex:"0.5"}}></div>            
        </div>
    )
}