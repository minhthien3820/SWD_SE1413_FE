import React from "react";
import { AppBar, Avatar, Box, Hidden, Toolbar } from "@material-ui/core";
import ToggleMenu from "./NavbarComponent/ToggleMenu";
import SwitchMode from "./NavbarComponent/SwitchMode";
import UserIcon from "./NavbarComponent/UserIcon";
import { useStyles } from "./NavbarStyle";
import logo from "./../../assets/img/logo.png";
import { HashLink } from "react-router-hash-link";

export default function NavbarHome() {
  const classes = useStyles();
  return (
    <Hidden only="xs">
      <div className={classes.maxHeightNavbarHome}></div>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <Avatar
            alt="logo"
            variant="square"
            src={logo}
            className={classes.logo}
            component="span"
          ></Avatar>
          <div className={classes.listNav}>
            <Hidden xsDown>
              <Box display="flex">
                <HashLink
                //carouselTabDriver
                  to="/#taixe"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "end" })
                  }
                  className={classes.link}
                >
                  Tài Xế
                </HashLink>
                <HashLink
                  to="/#datngay"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "end" })
                  }
                  className={classes.link}
                >
                  Đặt Ngay
                </HashLink>
                <HashLink
                  to="/#appPromotion"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "end" })
                  }
                  className={classes.link}
                >
                  Tin Tức
                </HashLink>
                <HashLink
                  to="/#appPromotion"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "end" })
                  }
                  className={classes.link}
                >
                  Ứng dụng
                </HashLink>
              </Box>
            </Hidden>
          </div>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={classes.navRight}
          >
            <Hidden smDown>
              <UserIcon />
              <SwitchMode />
            </Hidden>
            <Hidden mdUp>
              <ToggleMenu />
            </Hidden>
          </Box>
        </Toolbar>
      </AppBar>
    </Hidden>
  );
}
