import { Box } from "@material-ui/core";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";
import CssBaseline from "@material-ui/core/CssBaseline";

function AdminLayout(props) {
  return (
    <Box display="flex">
      <CssBaseline />
      <NavbarAdmin />
      {props.children}
    </Box>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        }
        //redirect không cho sử dụng trong component
        return <Redirect to="/auth" />;
      }}
    />
  );
}
