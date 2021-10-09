import React from "react";
import CarouselHome from "../../../components/CarouselHome";
import DialogDriver from "../../../components/DialogDriver";
import AppPromotion from "./DesktopComponent/AppPromotion";
import CarouselDriverTab from "./DesktopComponent/CarouselDriverTab";
import DriverSection from "./DesktopComponent/DriverSection";

export default function DesktopHome() {
  return (
    <React.Fragment>
      <CarouselHome />
      <CarouselDriverTab />
      <DriverSection />
      <AppPromotion />
      <DialogDriver />
    </React.Fragment>
  );
}
