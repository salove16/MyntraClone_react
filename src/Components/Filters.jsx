import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RadioGroup from "@mui/material/RadioGroup";

const Filters = ({brandsBar, handleFilter}) => {
   return (
      
         <div className="sidebar" style={{ flexBasis: "16rem" }}>
            <List
               sx={{
                  width: "100%",
                  maxWidth: 460,
                  bgcolor: "background.paper",
                   padding: "10%",
                  color:"gray",
               }}
            >
               {/* <Divider /> */}
               <h2 style={{padding:"5%" ,background:"#e4e4e4" ,fontWeight:"700",color:"black",
               boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"}}>BRANDS</h2>

               {brandsBar.map((value, i) => {
                  const labelId = `checkbox-list-label-${value}`;

                  return (
                     <ListItem key={i} disablePadding>
                        <ListItemButton
                           role={undefined}
                           onClick={() => handleFilter(value)}
                           dense
                        >
                           <ListItemIcon style={{ minWidth: 0 }}>
                              <RadioGroup
                                 edge="start"
                                 // checked={
                                 //    checked.indexOf(value.brand) !== -1
                                 // }
                                 tabIndex={-1}
                                 disableRipple
                                 inputProps={{
                                    "aria-labelledby": labelId,
                                 }}
                              />
                           </ListItemIcon>
                           <ListItemText id={labelId} primary={`${value}`} />
                        </ListItemButton>
                     </ListItem>
                  );
               })}
            </List>
         </div>
     
   );
};

export default Filters;
