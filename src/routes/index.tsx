import React from 'react'
import { Route, Routes as AppRoutes } from "react-router-dom";
import { Home } from "../pages";
import Root from '../layouts/Root';

const Routes = () => {
  return (
    <AppRoutes>
      <Route
        path="/"
        element={<Root />}
      >
         <Route
          path="/"
          element={<Home />}
        />
      </Route>
      <Route path='*' element={<></>} />
    </AppRoutes>
  );
};

export default Routes;
