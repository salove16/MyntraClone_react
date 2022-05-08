import { Promocode } from "./promocodeinbag/promocode"
import { Totalprice } from "./totalpricecard/totalprice"



export const Rightdivinbag=()=>{


    return(
        <div>
            <div style={{marginTop:"3%"}}>
            <Promocode/>
            <Totalprice/>
            </div>            
        </div>
    )
}