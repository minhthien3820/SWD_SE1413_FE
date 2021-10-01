import React, { useEffect } from "react";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import MobileHome from "./MobileHome";
import DesktopHome from "./DesktopHome";
import { actListDriverApi } from "./modules/ListDriver/action";
import { connect } from "react-redux";
import { actListShowTimeApi } from "./modules/ListShowTime/action";

function HomePage(props) {
  const { listDriverApi, listShowTimeApi } = props;
  useEffect(() => {
    listDriverApi();
    listShowTimeApi();
    // props.listDriverApi();
  });
  if (isWidthUp("sm", props.width)) {
    return <DesktopHome />;
  }

  return <MobileHome />;
}

const mapDispatchToProps = (dispatch) => {
  return {
    listDriverApi: () => {
      dispatch(actListDriverApi("now"));
    },
    listShowTimeApi: () => {
      dispatch(actListShowTimeApi());
    },
  };
};

export default connect(null, mapDispatchToProps)(withWidth()(HomePage));
