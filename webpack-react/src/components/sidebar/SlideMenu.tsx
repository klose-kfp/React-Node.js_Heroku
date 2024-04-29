import React, { useContext, useState } from "react";
import "./SlideMenu.css";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Sidebar from "@src/components/sidebar/Sidebar";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Tooltip, Typography } from "@mui/material";
import { MainContext, MainContextType } from "../top/Context";

function SlideMenu() {
  const context: MainContextType = useContext(MainContext);
  const [state, setState] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  return (
    <div className="slidemenu">
      <React.Fragment key="left">
        <div className="h-full flex items-center justify-center bg-black">
          <Tooltip
            title={<Typography fontSize="25px">Menu</Typography>}
            placement="right"
            sx={{ fontSize: "40px" }}
          >
            <Button onClick={toggleDrawer(true)}>
              <MenuOpenIcon sx={{ color: "aqua" }} />
            </Button>
          </Tooltip>
        </div>
        <Drawer
          anchor={context.type.isMobile ? "top" : "left"}
          open={state}
          onClose={toggleDrawer(false)}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
        >
          <Sidebar />
        </Drawer>
      </React.Fragment>
    </div>
  );
}
export default SlideMenu;
