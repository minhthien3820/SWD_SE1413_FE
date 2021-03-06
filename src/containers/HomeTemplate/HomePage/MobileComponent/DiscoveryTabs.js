import { AppBar, Paper, Tab, Typography } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import React, { useState } from "react";
import { connect } from "react-redux";
import CardNewsLarge from "../../../../components/CardNewsLarge/CardNewsLarge";
import CardSmallDriver from "../../../../components/CardSmall/CardSmallDriver";
import CardSmallNews from "../../../../components/CardSmall/CardSmallNews";
import WithCard from "../../../../components/CardSmall/WithCard";
import CarouselHome from "../../../../components/CarouselHome";
import Driver from "../../../../components/Driver";
import { actListDriverApi } from "../modules/ListDriver/action";
import { newsArray } from "../NewsArray";
import { MobileHomeStyles } from "./MobileHomeStyles";

const CardNews = WithCard(CardSmallNews);
const CardDriver = WithCard(CardSmallDriver);

function DiscoveryTabs(props) {
  const { listDriverComing, listDriverNow } = props;
  const classes = MobileHomeStyles();
  const [discoverValue, setDiscoverValue] = useState("1");
  const handleChangeDiscoveryTab = (event, newValue) => {
    setDiscoverValue(newValue);
    if (newValue === "3" && !listDriverComing) {
      props.changeDriverTab("coming");
    }
  };

  const renderListDriver = (driverArr, type) => {
    if (driverArr) {
      return driverArr.map((item) => {
        return <Driver type={type} driver={item} key={item.maDriver} />;
      });
    }
  };
  const renderDriverSmall = (driverArr) => {
    return driverArr.map((item, index) => {
      return (
        <CardDriver
          data={{
            imageLink: item.hinhAnh,
            title: item.tenDriver,
            rating: item.danhGia,
          }}
          key={index}
        />
      );
    });
  };

  const renderDriverHome = () => {
    if (!listDriverNow) {
      return;
    }
    let driverLargeArr = listDriverNow.slice(0, 3);
    let driverSmallArr = listDriverNow.slice(3, 6);
    return (
      <React.Fragment>
        <Typography
          variant="body2"
          color="textPrimary"
          component="p"
          className={classes.homeTitle}
        >
          T??i x??? ???????c y??u th??ch nh???t
        </Typography>
        {/* render 3 driverLarge */}
        {renderListDriver(driverLargeArr, "beingSold")}

        <Paper className={classes.paperContainer}>
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
            className={classes.paperTitle}
          >
            H??? th???ng ??ang c?? g??
          </Typography>
          {/* render 3 cardSmall */}
          {renderDriverSmall(driverSmallArr)}
        </Paper>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <TabContext value={discoverValue}>
        <AppBar position="static" className={classes.appBarDiscovery}>
          <TabList
            onChange={handleChangeDiscoveryTab}
            aria-label="tabs discovery"
            variant="fullWidth"
            TabIndicatorProps={{ className: classes.indicatorTop }}
          >
            <Tab label="Home" value="1" className={classes.tabTop} />
            <Tab label="??ang C??" value="2" className={classes.tabTop} />
            <Tab label="S???p C??" value="3" className={classes.tabTop} />
          </TabList>
        </AppBar>

        {/* Home */}
        {discoverValue === "1" ? (
          <TabPanel value="1">
            <CarouselHome />
            {renderDriverHome()}
            <Typography
              variant="body2"
              color="textPrimary"
              component="p"
              className={classes.homeTitle}
            >
              Tin n??ng nh???t h??m nay
            </Typography>

            {/* render 3 items of CardNewsLarge */}
            {newsArray.driverArr
              .filter((item, index) => {
                return index <= 2;
              })
              .map((item) => {
                return <CardNewsLarge data={item} key={item.id} />;
              })}

            {/* render 5 items of CardNews  */}
            <Paper className={classes.paperContainer}>
              <Typography
                variant="body2"
                color="textPrimary"
                component="p"
                className={classes.paperTitle}
              >
                L?????t th??m tin m???i nh??
              </Typography>
              {newsArray.promotionArr
                .filter((item, index) => {
                  return index <= 4;
                })
                .map((item) => {
                  return <CardNews data={item} key={item.id} />;
                })}
            </Paper>
          </TabPanel>
        ) : (
          ""
        )}

        {/* ??ang C?? tab */}
        {discoverValue === "2" ? (
          <TabPanel value="2">
            {renderListDriver(listDriverNow, "beingSold")}
          </TabPanel>
        ) : (
          ""
        )}

        {/* S???p C?? tabs */}
        {discoverValue === "3" ? (
          <TabPanel value="3">
            {renderListDriver(listDriverComing, "coming")}
          </TabPanel>
        ) : (
          ""
        )}
      </TabContext>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeDriverTab: (driverTabStatus) => {
      dispatch(actListDriverApi(driverTabStatus));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    listDriverNow: state.listDriverReducer.listDriverNow,
    listDriverComing: state.listDriverReducer.listDriverComing,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoveryTabs);
