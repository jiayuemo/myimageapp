/** @module components/Page */
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { PageProps } from './types';

/**
 * Base page that all other pages should use as their root/parent node
 * @param props The children to render, this component is never called purely on its own
 * @returns A JSX element
 */
export default function NotFoundPage(props: PageProps): JSX.Element {
  const { children } = props;
  return (
    <div>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  );
}
