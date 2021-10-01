import { Scrollbars } from "react-custom-scrollbars";

const renderVertical = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: "rgba(35, 49, 86, 0.8)",
    width: "3px",
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const renderHorizontal = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: "rgba(35, 49, 86, 0.8)",
    height: "3px",
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

export const CustomScrollbars = (props) => {
  if (!props.status) {
    return (
      <Scrollbars
        renderThumbVertical={renderVertical}
        autoHide
        autoHideTimeout={500}
        autoHideDuration={200}
        {...props}
      />
    );
  }
  return <Scrollbars renderThumbHorizontal={renderHorizontal} {...props} />;
};
