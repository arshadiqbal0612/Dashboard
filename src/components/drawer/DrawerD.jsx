import dummy from "../../assets/drawer-img.svg";
import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

export function DrawerD() {
  // const [open, setOpen] = React.useState(false);
  // const openDrawer = () => setOpen(true);
  // const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      {/* <Button onClick={openDrawer}>Open Drawer</Button>
      <Drawer open={open} onClose={closeDrawer}> */}
      <div className=" container w-40 h-screen  ">
        <div className="mb-2 flex items-center justify-between p-4  ">
          <img src={dummy} alt="xxx" />
        </div>
        <List>
          <ListItem className="button ">
            {/* <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix> */}
            <div className="btn-gap"> Dashboard</div>
          </ListItem>
          <ListItem className="button">
            {/* <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix> */}
            <div className="btn-gap"> BRI</div>
          </ListItem>
          <ListItem className="button">
            <div className="btn-gap"> BIOME</div>
          </ListItem>
          <ListItem className="button">
            <div className="btn-gap"> ORG final</div>
          </ListItem>
          <ListItem className="button">
          <div className="btn-gap"> DFS</div>
   
          </ListItem>
        </List>
      </div>

      {/* </Drawer> */}
    </React.Fragment>
  );
}
