/** @module components/NotFoundPage */
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Page from '../Page';
import useStyles from './useStyles';

export default function NotFoundPage(): JSX.Element {
  const styles = useStyles();
  return (
    <Page>
      <Container>
        <Typography>
          Not Found
        </Typography>
      </Container>
    </Page>
  );
}
