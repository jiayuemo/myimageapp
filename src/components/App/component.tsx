/** @module components/App */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import DetailPage from '../DetailPage';
import NotFoundPage from '../NotFoundPage';

/**
 * The part of the application responsible for routing
 * @returns a JSX element
 */
export default function App(): JSX.Element {
  return (
    <Switch>
      <Route
        path="/images/:id"
        render={({ match }) => {
          const { id } = match.params;
          return <DetailPage id={parseInt(id, 10)} />;
        }}
      />
      <Route
        path="/"
        render={(): JSX.Element => <HomePage />}
      />
      <Route
        path="*"
        render={(): JSX.Element => <NotFoundPage />}
      />
    </Switch>
  );
}
