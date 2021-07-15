/** @module components/DetailPage */
import { connect } from 'react-redux';
import { GlobalState, AppDispatch } from 'store/types';
import { getSingleImage } from 'store/image/actions';
import { selectLoading } from 'store/loading/selectors';
import { selectError } from 'store/error/selectors';
import DetailPage from './component';
import { DetailPageDispatchProps, DetailPageStateProps } from './types';

export const mapStateToProps = (state: GlobalState): DetailPageStateProps => ({
  images: state.image,
  loading: selectLoading(state.loading, 'IMAGE_GET'),
  error: selectError(state.error, 'IMAGE_GET'),
});

export const mapDispatchToProps = (dispatch: AppDispatch): DetailPageDispatchProps => ({
  getSingleImage: (id: number): void => { dispatch(getSingleImage(id)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
