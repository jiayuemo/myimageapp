/** @module components/HomePage */
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ImageList from '@material-ui/core/ImageList';
import CircularProgress from '@material-ui/core/CircularProgress';
import ImageListItem from '@material-ui/core/ImageListItem';
import TextField from '@material-ui/core/TextField';
import Page from '../Page';
import { HomePageProps } from './types';
import useStyles from './useStyles';
import { ImageHit } from '../../services/image-search/types/ImageHit';

export default function HomePage(props: HomePageProps): JSX.Element {
  const {
    images,
    loading,
    error,
    getMultipleImages,
  } = props;

  const styles = useStyles();

  React.useState();

  const messages = [
    'When you cannot find a suitable gif on tenor or giphy',
    'When you just want to find something instead of scrolling infinetely through instagram',
    'Free resources for that side project you have been meaning to get to...',
  ];

  function handleSearchChange(e: any) {
    const query = e.target.value;
    if (query.length > 3) {
      getMultipleImages(query);
    }
  }

  return (
    <Page>
      <Container>
        <Typography>
          Welcome To My Cool Image Search App
        </Typography>
        <Typography>
          { messages[Math.floor(Math.random() * 3)] }
        </Typography>
        <br />
        <form noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Search the catalog!" variant="outlined" onChange={(e) => handleSearchChange(e)} />
        </form>
        {
          loading
            ? <CircularProgress />
            : (
              <ImageList>
                {images.map((item: ImageHit) => (
                  <ImageListItem key={item.id}>
                    <img
                      srcSet={`${item.previewURL}?w=164&h=164&fit=crop&auto=format 1x,
                      ${item.previewURL}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={`${item.id}`}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            )
        }
        <br />
      </Container>
    </Page>
  );
}
