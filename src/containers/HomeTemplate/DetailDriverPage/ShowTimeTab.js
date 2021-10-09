import {
  Accordion,
  AccordionDetails,
  Avatar,
  Typography,
  AccordionSummary,
  Box,
  Hidden,
  useMediaQuery,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { TabPanel } from "@material-ui/lab";
import React from "react";
import { connect } from "react-redux";
import DateBar from "../../../components/DateBar";
import LogoDriver from "../../../components/LogoDriver";
import { CustomScrollbars } from "../../../components/ScrollBar";
import ShowTimeList from "../../../components/ShowTimeList";
import { DesktopHomeStyle } from "../HomePage/DesktopComponent/DesktopHomeStyle";
import { DetailPageStyles } from "./DetailPageStyle";
import {
  actChangeDateDetailPage,
  actChangeLogoDetailPage,
} from "./modules/action";

function ShowTimeTab(props) {
  const desktopStyle = DesktopHomeStyle();
  const classes = DetailPageStyles();
  const matchBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.down("xs")
  );
  const [expanded, setExpanded] = React.useState(false);
  const {
    changeLogoDriver,
    changeDate,
    data,
    listLogo,
    currentLogo,
    currentDateIndex,
    listShowTime,
  } = props;
  const handleLogoClick = (event, index) => {
    changeLogoDriver(index);
  };

  const handleClickDate = (data) => {
    changeDate(data);
  };

  const handleChangeDriver = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderDriverSystem = () => {
    if (listLogo) {
      return listLogo.map((item, index) => {
        return (
          <Accordion
            expanded={expanded === item.tenHeThongRap}
            onChange={handleChangeDriver(item.tenHeThongRap)}
            className={classes.bgAccor}
            key={index}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
              aria-controls={`${item.tenHeThongRap}-content`}
              id={`${item.tenHeThongRap}-header`}
            >
              <Avatar
                className={classes.avatar}
                alt={item.logo}
                src={item.logo}
              />
              <Typography className={classes.nameDriverSystem}>
                {item.tenHeThongRap}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {expanded === item.tenHeThongRap ? (
                <ShowTimeList listShowTime={listShowTime} />
              ) : (
                ""
              )}
            </AccordionDetails>
          </Accordion>
        );
      });
    }
    return <React.Fragment></React.Fragment>;
  };

  return (
    <TabPanel
      value="1"
      className={
        matchBreakpoint ? classes.tabPanelMobile : classes.tabPanelDesktop
      }
    >
      {/* ShowTime for desktop */}
      <Hidden only="xs">
        <Box display="flex" justifyContent="center">
          <CustomScrollbars className={desktopStyle.driverScrollBar}>
            <LogoDriver
              listLogo={listLogo}
              currentLogo={currentLogo}
              handleLogoClick={handleLogoClick}
              detailPage={true}
            />
          </CustomScrollbars>
          <CustomScrollbars className={desktopStyle.showTimeScrollBar}>
            <CustomScrollbars
              status="horizontal"
              className={classes.horizontalScroll}
            >
              <DateBar
                currentDateIndex={currentDateIndex}
                handleClickDate={handleClickDate}
                matchBreakpoint={matchBreakpoint}
              />
            </CustomScrollbars>
            <ShowTimeList listShowTime={listShowTime} />
          </CustomScrollbars>
        </Box>
      </Hidden>

      {/* ShowTime for Mobile */}
      <Hidden smUp>
        <CustomScrollbars
          status="horizontal"
          className={classes.horizontalScroll}
        >
          <DateBar
            currentDateIndex={currentDateIndex}
            handleClickDate={handleClickDate}
            matchBreakpoint={matchBreakpoint}
          />
        </CustomScrollbars>
        {renderDriverSystem()}
      </Hidden>
    </TabPanel>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.detailPageReducer.data,
    listLogo: state.detailPageReducer.listLogo,
    currentLogo: state.detailPageReducer.currentLogo,
    currentDateIndex: state.detailPageReducer.currentDateIndex,
    listShowTime: state.detailPageReducer.listShowTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLogoDriver: (index) => {
      dispatch(actChangeLogoDetailPage(index));
    },
    changeDate: (data) => {
      dispatch(actChangeDateDetailPage(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowTimeTab);
