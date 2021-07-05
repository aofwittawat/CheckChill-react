import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WithLayout from 'WithLayout';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
import {
  Home as HomeView,
  SignupSimple as SignupSimpleView,
  About as AboutView,
  CheckboxRiskMale as CheckboxRiskMaleView,
  ResultMale as ResultMaleView,
  GenderSelection as GenderSelectionView
} from './views';


const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={HomeView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/signup"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={SignupSimpleView}
            layout={MinimalLayout}
          />
        )}
      />
      <Route
        exact
        path="/checkboxriskmale"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={CheckboxRiskMaleView}
            layout={MinimalLayout}
          />
        )}
      />
      <Route
        exact
        path="/about"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={AboutView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/genderselection"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={GenderSelectionView}
            layout={MinimalLayout}
          />
        )}
      />
      <Route
        exact
        path="/resultmale"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={ResultMaleView}
            layout={MinimalLayout}
          />
        )}
      />
  
      <Redirect to="/not-found-cover" />
    </Switch>
  );
};

export default Routes;
