import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";
import { DriverTabStyles } from "./MobileHomeStyles";
import { connect } from "react-redux";

function DriverTabs(props) {
  const { data } = props;
  const classes = DriverTabStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderDriver = (driverArray) => {
    return driverArray.map((item, index) => {
      return (
        <div key={index} className={classes.driverItem}>
          <Typography className={classes.nameDriver}>
            {item.tenOwner}
          </Typography>
          <Typography className={classes.address}>{item.diaChi}</Typography>
        </div>
      );
    });
  };

  const renderDriverSystem = () => {
    return data.map((item, index) => {
      return (
        <Accordion
          expanded={expanded === item.maGroup}
          onChange={handleChange(item.maGroup)}
          className={classes.bgAccor}
          key={index}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
            aria-controls={`${item.maGroup}-content`}
            id={`${item.maGroup}-header`}
          >
            <Avatar
              className={classes.avatar}
              alt={item.logo}
              src={item.logo}
            />
            <Typography className={classes.nameDriverSystem}>
              {item.tenGroup}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {expanded === item.maGroup ? renderDriver(item.lstOwner) : ""}
          </AccordionDetails>
        </Accordion>
      );
    });
  };

  return <div className={classes.driverLayout}>{renderDriverSystem()}</div>;
}

const mapStateToProps = (state) => {
  return {
    data: state.listShowTimeReducer.data,
  };
};

export default connect(mapStateToProps, null)(DriverTabs);
