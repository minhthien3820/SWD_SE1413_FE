import { Dialog, DialogContent } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { actChangeDialogStatus } from "./modules/action";

function DialogDriver(props) {
  const { dialogStatus, changeDialogStatus, driver } = props;

  const handleClose = () => {
    changeDialogStatus({ status: false, driver: null });
  };
  if (driver) {
    return (
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={dialogStatus}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogContent style={{ padding: 0, overflowY: "hidden" }}>
          <iframe
            width={"100%"}
            height={"100%"}
            title={driver.biDanh}
            src={driver.trailer}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </DialogContent>
      </Dialog>
    );
  } else {
    return <React.Fragment></React.Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    dialogStatus: state.dialogReducer.dialogStatus,
    driver: state.dialogReducer.driver,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeDialogStatus: (data) => {
      dispatch(actChangeDialogStatus(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogDriver);
