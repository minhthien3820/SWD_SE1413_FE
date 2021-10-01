import React from "react";
import { Route } from "react-router-dom";
import FooterHome from "../../components/FooterHome";
import NavbarHome from "../../components/NavbarHome";
import DarkTheme from "../../theme/DarkTheme";
import LightTheme from "../../theme/LightTheme";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

function HomeLayout(props) {
  return (
    <div>
      <ThemeProvider theme={props.theme ? DarkTheme : LightTheme}>
        <NavbarHome />
        <CssBaseline />
        {props.children}
        <FooterHome />
      </ThemeProvider>
    </div>
  );
}

export default function HomeTemplate({ Component, theme, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout theme={theme}>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
