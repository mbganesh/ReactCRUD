import React from "react";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Box,
} from "@material-ui/core";
import { Home, ArrowBack, Menu } from "@material-ui/icons";
import { useHistory } from "react-router";

const styles = makeStyles((theme) => ({
  container: {},
  appBarStyle: {
    backgroundColor: "#00adb5",
  },
  appBarTitleStyle: {
    flex: 1,
    fontWeight: "bold",
    fontSize: "20px",
  },
  appBarBtntyle: {
    backgroundColor: "#00adb5",
    color: "#fff",
  },
  buttons: {
    marginLeft: "60px",
    color: "white",
    fontWeight: "bold",
  },

  appBarAllButtons: {
    // appbar buttons
    [theme.breakpoints.up("md")]: {
      visibility: "visible",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  appBarMenuBtnStyle: {
    // appbar menu buttons
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "visible",
    },
  },
}));

function AppbarPage() {
  const classes = styles();
  const history = useHistory();

  const [open, setOpen] = React.useState(false);

  const [buttonAppbar, setbuttonAppbar] = React.useState([
    "Home",
    "Create",
    "Read",
    "Update",
    "Delete",
  ]);

  var path = ["/home", "/create", "/read", "/update", "/delete"];

  const handlePath = (index) => {
    console.log(path[index]);
    // history.push(path[index]);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <AppBar className={classes.appBarStyle} position="static">
          <Toolbar>
            <Box display="flex" flexGrow={1}>
              <Typography
                style={{ color: "white", fontWeight: "bold", fontSize: "24px" }}
              >
                CRUD Operations
              </Typography>
            </Box>
            <div className={classes.appBarAllButtons}>
              {buttonAppbar.map((text) => (
                <Button className={classes.buttons}>{text}</Button>
              ))}
            </div>

            <div className={classes.appBarMenuBtnStyle}>
              <IconButton onClick={handleDrawerOpen}>
                <Menu style={{ color: "#fff" }} />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>

      <Drawer open={open} anchor="right">
        <List>
          <div>
            <IconButton onClick={handleDrawerClose}>
              <ArrowBack />
            </IconButton>
          </div>
          {buttonAppbar.map((text, index) => {
            return (
              <ListItem button key={text}>
                <ListItemText
                  primary={text}
                  onClick={ handlePath(index
                    )}
                />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}

export default AppbarPage;
