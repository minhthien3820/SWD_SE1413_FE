import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import RatingStar from "../RatingStar";
import { connect } from "react-redux";
import { actChangeDialogStatus } from "../DialogDriver/modules/action";
import { Link } from "react-router-dom";

function CarouselDriverNow(props) {
  const { item, changeDialogStatus } = props;
  const handleClickOpen = () => {
    changeDialogStatus({ status: true, driver: item });
  };

  return (
    <React.Fragment>
      <div className="imgBx">
        <img src={item.hinhAnh} alt={item.biDanh} />
        <div className="overlayDriver"></div>
        <div className="playButton" onClick={handleClickOpen}>
          <PlayArrowIcon className="playIcon" />
        </div>
        <div className="reviewScore">
          <span className="ratingNumber">{item.danhGia}</span>

          <RatingStar>{parseFloat(item.danhGia)}</RatingStar>
        </div>
      </div>
      <div className="detail">
        <div className="driverTitle">
          <h3>
            <span className="ageLimit">C18</span>
            {item.tenDriver}
          </h3>
          <div className="driverDuration">100 Giờ</div>
          <Link className="buyTicket" to={`/driver/${item.maDriver}`}>
            Đặt Ngay
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeDialogStatus: (data) => {
      dispatch(actChangeDialogStatus(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(CarouselDriverNow);
