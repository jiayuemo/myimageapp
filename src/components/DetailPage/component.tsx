/** @module components/DetailPage */
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Page from '../Page';
import { DetailPageProps } from './types';
import useStyles from './useStyles';
import { ImageHit } from '../../services/image-search/types/ImageHit';

export default function DetailPage(props: DetailPageProps): JSX.Element {
  const {
    id = 1,
    images,
    loading,
    error,
    getSingleImage,
  } = props;

  const styles = useStyles();

  React.useEffect(() => {
    getSingleImage(id);
  }, [id]);

  function generateTagList(tags: string[]): JSX.Element {
    return (
      <Paper>
        {tags.map((tag) => (
          <div key={`${tag}`}>
            <Chip
              label={tag}
            />
          </div>
        ))}
      </Paper>
    );
  }

  function specificImageDetails(myImage: ImageHit): JSX.Element {
    if (myImage) {
      const {
        user,
        userImageURL,
        largeImageURL,
        tags,
      } = myImage;
      return (
        <div>
          <Typography>
            {`Posted by: ${user}`}
          </Typography>
          <Avatar alt={user} src={userImageURL} />
          {generateTagList(tags.split(' '))}
          <Paper variant="outlined">
            <img src={largeImageURL} alt="Hello world" />
          </Paper>
        </div>
      );
    }
    return (
      <Typography>
        There is nothing here
      </Typography>
    );
  }

  return (
    <Page>
      <Container>
        <Typography>
          Image Detail Page
        </Typography>
        {
          loading
            ? <CircularProgress />
            : specificImageDetails(images[0])
        }
      </Container>
    </Page>
  );
}
