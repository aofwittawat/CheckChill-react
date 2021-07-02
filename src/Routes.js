import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WithLayout from 'WithLayout';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
import { 
  Home as HomeView, 
  SignupSimple as SignupSimpleView,
  About as AboutView, 
  CheckboxRisk as CheckboxRiskView,
  Result as Resultview
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
        path="/checkboxrisk"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={CheckboxRiskView}
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
        path="/result"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={Resultview}
            layout={MinimalLayout}
          />
        )}
      />



      <Redirect to="/not-found-cover" />
    </Switch>
  );
};

export default Routes;
