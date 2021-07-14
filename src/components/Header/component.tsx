/** @module components/Header */
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

/**
 * Header component that lives on top of every page
 * @returns A JSX element
 */
export default function Header(): JSX.Element {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">
          <Typography>
            MyCoolImageSearchApp
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
