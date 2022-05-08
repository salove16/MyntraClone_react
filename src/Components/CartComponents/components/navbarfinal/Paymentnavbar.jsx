import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import securelogo from "../images/securelogo.png";
import { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar} from "@mui/material";



function LinkTab(props) {

const navigate=useNavigate();


//   console.log("props",props);
//  useEffect(()=>{
//   console.log(props);
//   if(props.selected===true)
//   {
//     navigate(props.href);
//     return;
//   }
  
//   },[])
  

    return (      
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }


export const Navbarpayment=()=>{
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };


    return (
        <AppBar style={{background:"white",boxShadow:"none",borderBottom:"1px dotted white !important"}}>
            <Toolbar>                
            <img src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png" width="100" alt="Myntra logo M png"  />
                
            <Box sx={{ width: '100%'}} >
                <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" centered >
                  
                    {/* <LinkTab label="BAG" href="/bag" /> */}                  


                    
                    {/* <LinkTab label="ADDRESS" href="/address" />
                    
                    <LinkTab label="PAYMENT" href="/payment" /> */}


                      <NavLink
                      to="/bag"
                      style={ {textDecoration:"none",color:"black",fontWeight:"700",paddingTop:"1%"
                        
                      }}
                      >Bag----</NavLink>
                      <NavLink
                      to="/address"
                      style={ {textDecoration:"none",color:"black",fontWeight:"700",paddingTop:"1%"
                        
                      }}>Address----</NavLink>
                      <NavLink
                      to="/payment"
                      style={ {textDecoration:"none",color:"black",fontWeight:"700",paddingTop:"1%"
                        
                      }}>Payment</NavLink>

                  
                    
                </Tabs>
            </Box>
             <img src={securelogo} alt="securelogo"/>               
            </Toolbar>
        </AppBar>
        
    )
}