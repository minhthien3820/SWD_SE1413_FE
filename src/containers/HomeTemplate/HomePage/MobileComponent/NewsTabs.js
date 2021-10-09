import { AppBar, Paper, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import React, { useState } from "react";
import CardNewsLarge from "../../../../components/CardNewsLarge/CardNewsLarge";
import CardSmallNews from "../../../../components/CardSmall/CardSmallNews";
import WithCard from "../../../../components/CardSmall/WithCard";
import { newsArray } from "../NewsArray";
import { MobileHomeStyles } from "./MobileHomeStyles";

const CardNews = WithCard(CardSmallNews);

const renderCardNewsLarge = (array) => {
  // render 3 items CardNewsLarge
  return array
    .filter((item, index) => {
      return index <= 2;
    })
    .map((item) => {
      return <CardNewsLarge data={item} key={item.id} />;
    });
};

const renderCardNews = (array) => {
  //render all of CardNews
  return array
    .filter((item, index) => {
      return index > 2;
    })
    .map((item) => {
      return <CardNews data={item} key={item.id} />;
    });
};

export default function NewsTabs() {
  const classes = MobileHomeStyles();
  const [newsValue, setNewsValue] = useState("1");
  const handleChangeNewsTab = (event, newValue) => {
    setNewsValue(newValue);
  };

  const renderTabLabel = (val) => {
    let array = [];
    switch (val) {
      case 1:
        array = newsArray.driverArr;
        break;
      case 2:
        array = newsArray.reviewArr;
        break;
      case 3:
        array = newsArray.promotionArr;
        break;
      default:
        break;
    }
    return (
      <React.Fragment>
        {renderCardNewsLarge(array)}
        <Paper className={classes.paperContainer}>
          {renderCardNews(array)}
        </Paper>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <TabContext value={newsValue}>
        <AppBar position="static" className={classes.appBarDiscovery}>
          <TabList
            onChange={handleChangeNewsTab}
            aria-label="tabs discovery"
            variant="fullWidth"
            TabIndicatorProps={{ className: classes.indicatorTop }}
          >
            <Tab label="Tài Xế 24h" value="1" className={classes.tabTop} />
            <Tab label="Đánh giá" value="2" className={classes.tabTop} />
            <Tab label="Khuyến mãi" value="3" className={classes.tabTop} />
          </TabList>
        </AppBar>

        {/* Newstab */}
        {newsValue === "1" ? (
          <TabPanel value="1">{renderTabLabel(1)}</TabPanel>
        ) : (
          ""
        )}

        {/* Đánh giá tab */}
        {newsValue === "2" ? (
          <TabPanel value="2">{renderTabLabel(2)}</TabPanel>
        ) : (
          ""
        )}

        {/* Khuyến mãi tabs */}
        {newsValue === "3" ? (
          <TabPanel value="3">{renderTabLabel(3)}</TabPanel>
        ) : (
          ""
        )}
      </TabContext>
    </React.Fragment>
  );
}
