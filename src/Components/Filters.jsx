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
                  padding: "10%"
               }}
            >
               {/* <Divider /> */}
               <h2><b>Brands</b></h2>

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
