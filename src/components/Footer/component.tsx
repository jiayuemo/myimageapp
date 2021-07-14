/** @module components/Footer */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

/**
 * Footer component that lives on bottom of every page
 * @returns A JSX element
 */
export default function Header(): JSX.Element {
  return (
    <footer>
      <Paper>
        <Typography>
          {`MyCoolImageSearchApp v${process.env.REACT_APP_VERSION}`}
        </Typography>
      </Paper>
    </footer>
  );
}
