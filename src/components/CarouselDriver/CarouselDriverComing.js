import React from "react";
// import PlayArrowIcon from "@material-ui/icons/PlayArrow";

export default function CarouselDriverComing(props) {
  const { item } = props;
  return (
    <React.Fragment>
      <div className="imgBx">
        <img src={item.hinhAnh} alt={item.biDanh} />
        <div className="overlayDriver"></div>
        {/* <div className="playButton">
          <PlayArrowIcon className="playIcon" />
        </div> */}
        <div className="startDay">
          {new Date(item.ngayBatDau).toLocaleDateString("vi", {
            month: "2-digit",
            day: "2-digit",
          })}
        </div>
      </div>
      <div className="detail">
        <div className="driverTitle">
          <h3>
            <span className="ageLimit">C18</span>
            {item.tenPhim}
          </h3>
          <div className="driverDuration">100 Giờ</div>
        </div>
      </div>
    </React.Fragment>
  );
}
