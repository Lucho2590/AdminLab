import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>Iconito</Toolbar>
      <Divider />
      <List>
        {[
          {
            displayName: "Home",
            key: "home",
            path: "/",
            Icon: <HomeIcon />,
          },
          {
            displayName: "Customers",
            key: "customers",
            path: "/customers",
            Icon: <BusinessIcon />,
          },
          {
            displayName: "Work Orders",
            key: "workOrders",
            path: "/work-orders",
            Icon: <AssignmentIcon />,
          },
          {
            displayName: "Instruments",
            key: "instruments",
            path: "/instrument",
            Icon: <HomeRepairServiceIcon />,
          },
        ].map((menuElement, index) => (
          <ListItem key={menuElement.key} disablePadding>
            <ListItemButton href={menuElement.path}>
              <ListItemIcon>{menuElement.Icon}</ListItemIcon>
              <ListItemText primary={menuElement.displayName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
