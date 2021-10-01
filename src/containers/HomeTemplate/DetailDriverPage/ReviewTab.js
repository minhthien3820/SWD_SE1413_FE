import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  Hidden,
  Paper,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Rating, TabPanel } from "@material-ui/lab";
import React, { useState } from "react";
import CommentItem from "../../../components/CommentItem";
import RatingStar from "../../../components/RatingStar";
import { ReviewTabStyles } from "./DetailPageStyle";

export default function ReviewTab(props) {
  const classes = ReviewTabStyles();
  const [dialogComment, setDialogComment] = useState(false);
  const [value, setValue] = useState(2.5);
  const { data, matchBreakpoint } = props;

  const handleDialogCommentOpen = () => {
    setDialogComment(true);
  };

  const handleDialogCommentClose = () => {
    setDialogComment(false);
  };
  return (
    <React.Fragment>
      <TabPanel
        value="3"
        className={
          matchBreakpoint ? classes.tabPanelMobile : classes.tabPanelDesktop
        }
      >
        <Hidden smUp>
          <Paper>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              py={1}
              mb={2}
            >
              <Typography variant="h4" color="primary">
                {data.danhGia}
              </Typography>
              <RatingStar>{data.danhGia}</RatingStar>
            </Box>
          </Paper>
        </Hidden>
        <Grid>
          <Grid
            item
            xs={12}
            className={
              matchBreakpoint
                ? classes.dadInputReviewer
                : `${classes.newDesign} ${classes.dadInputReviewer}`
            }
            onClick={handleDialogCommentOpen}
          >
            <AccountCircleIcon className={classes.accountIcon} />
            <input
              className={classes.inputReviewer}
              type="text"
              placeholder="Bạn nghĩ sao về tài xế này?"
              readOnly="readonly"
            />

            <Hidden only="xs">
              <RatingStar className={classes.reviewStar}>10</RatingStar>
            </Hidden>
          </Grid>
        </Grid>
        <CommentItem
          className={matchBreakpoint ? "" : `${classes.newDesign}`}
        />
        <CommentItem
          className={matchBreakpoint ? "" : `${classes.newDesign}`}
        />
        <CommentItem
          className={matchBreakpoint ? "" : `${classes.newDesign}`}
        />
      </TabPanel>
      <Dialog
        fullScreen={matchBreakpoint}
        maxWidth={"md"}
        open={dialogComment}
        onClose={handleDialogCommentClose}
        aria-labelledby="responsive-dialog-title"
        className={classes.dialog}
        scroll="body"
      >
        <DialogContent
          className={classes.dialogContent}
          style={matchBreakpoint ? { height: "100%" } : { height: "auto" }}
        >
          <Box textAlign="right">
            <img
              src="https://tix.vn/app/assets/img/icons/xController.png"
              alt="close"
              onClick={handleDialogCommentClose}
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Box textAlign="center">
            <Typography variant="body1" component="p" className={classes.score}>
              {value * 2.0}
            </Typography>
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              size="large"
              className={classes.ratingDialog}
            />
          </Box>
          <textarea
            autoFocus
            rows={3}
            className={classes.inputComment}
            placeholder="Nói cho mọi người biết bạn nghĩ gì về tài xế này..."
            defaultValue={""}
          />
          <Box textAlign="right" width="90%" margin="auto">
            <Button variant="contained" color="primary">
              Đăng
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
