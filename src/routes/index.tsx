import React from 'react'
import { Route, Routes as AppRoutes } from "react-router-dom";
import { About, Contact, Home } from "../pages";
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
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Route>
      <Route path='*' element={<></>} />
    </AppRoutes>
  );
};

export default Routes;
