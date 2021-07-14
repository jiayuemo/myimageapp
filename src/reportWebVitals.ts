import {
  ReportHandler,
  getCLS,
  getFID,
  getFCP,
  getLCP,
  getTTFB,
} from 'web-vitals';

const reportWebVitals = (onPrefEntry?: ReportHandler): void => {
  if (onPrefEntry && onPrefEntry instanceof Function) {
    getCLS(onPrefEntry);
    getFID(onPrefEntry);
    getFCP(onPrefEntry);
    getLCP(onPrefEntry);
    getTTFB(onPrefEntry);
  }
};

export default reportWebVitals;
