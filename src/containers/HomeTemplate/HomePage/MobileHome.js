import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import StarsIcon from "@material-ui/icons/Stars";
import Group from "@material-ui/icons/Group";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import SwitchMode from "../../../components/NavbarHome/NavbarComponent/SwitchMode";
import NewsTabs from "./MobileComponent/NewsTabs";
import { MobileHomeStyles } from "./MobileComponent/MobileHomeStyles";
import DiscoveryTabs from "./MobileComponent/DiscoveryTabs";
import DriverTabs from "./MobileComponent/DriverTabs";
import { Typography } from "@material-ui/core";

export default function MobileHome(props) {
  const classes = MobileHomeStyles();
  const [homeValue, setHomeValue] = useState("1");

  const handleChangeHome = (event, newValue) => {
    setHomeValue(newValue);
  };

  return (
    <React.Fragment>
      <TabContext value={homeValue}>
        {/* add layout khám phá
            a navtabs with 3 tab: Home, Đang diễn ra, Sắp có
        */}
        {homeValue === "1" ? (
          <TabPanel value="1" className={classes.tabPanel}>
            <Typography className={classes.titleTabs}>Khám phá</Typography>
            <DiscoveryTabs />
          </TabPanel>
        ) : (
          <React.Fragment></React.Fragment>
        )}

        {homeValue === "2" ? (
          <TabPanel value="2">
            <Typography className={classes.titleTabs}>Đặt Ngay</Typography>
            <DriverTabs />
          </TabPanel>
        ) : (
          <React.Fragment></React.Fragment>
        )}

        {/* add layout khám phá
            a navtabs with 3 tab: Tài Xế, Đánh giá, Khuyến mãi
        */}
        {homeValue === "3" ? (
          <TabPanel value="3">
            <Typography className={classes.titleTabs}>Tin tức</Typography>
            <NewsTabs />
          </TabPanel>
        ) : (
          <React.Fragment></React.Fragment>
        )}

        {homeValue === "4" ? (
          <TabPanel value="4">
            <Typography className={classes.titleTabs}>Cá nhân</Typography>
            <SwitchMode />
          </TabPanel>
        ) : (
          <React.Fragment></React.Fragment>
        )}

        <AppBar position="fixed" className={classes.appBarHome}>
          <TabList
            onChange={handleChangeHome}
            aria-label="home tabs"
            variant="fullWidth"
            TabIndicatorProps={{ className: classes.indicatorBottom }}
          >
            <Tab
              icon={<StarsIcon />}
              label="Khám phá"
              value="1"
              className={classes.tabBottom}
            />
            <Tab
              icon={<Group />}
              label="Group Xe"
              value="2"
              className={classes.tabBottom}
            />
            <Tab
              icon={<LibraryBooksIcon />}
              label="Tin tức"
              value="3"
              className={classes.tabBottom}
            />
            <Tab
              icon={<AccountCircleIcon />}
              label="Tài Khoản"
              value="4"
              className={classes.tabBottom}
            />
          </TabList>
        </AppBar>
      </TabContext>
      <div className={classes.maxHeightApp}></div>
    </React.Fragment>
  );
}
