/** @module components/HomePage */
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Page from '../Page';
import useStyles from './useStyles';

export default function HomePage(): JSX.Element {
  const styles = useStyles();
  return (
    <Page>
      <Container>
        <Typography>
          Welcome!
        </Typography>
      </Container>
    </Page>
  );
}
