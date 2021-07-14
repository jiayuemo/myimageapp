/** @module components/HomePage */
import { connect } from 'react-redux';
import { GlobalState, AppDispatch } from 'store/types';
import { getMultipleImages } from 'store/image/actions';
import { selectLoading } from 'store/loading/selectors';
import { selectError } from 'store/error/selectors';
import HomePage from './component';
import { HomePageDispatchProps, HomePageStateProps } from './types';

export const mapStateToProps = (state: GlobalState): HomePageStateProps => ({
  images: state.image,
  loading: selectLoading(state.loading, 'IMAGE_GET'),
  error: selectError(state.error, 'IMAGE_GET'),
});

export const mapDispatchToProps = (dispatch: AppDispatch): HomePageDispatchProps => ({
  getMultipleImages: (query: string): void => { dispatch(getMultipleImages(query)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
