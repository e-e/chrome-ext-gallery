import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
// import '../styles/ImageLoading.css';
const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
const ImageLoader = () => {
  return (
    <div style={styles}>
      <CircularProgress
        size={80}
        thickness={5}
        style={{ flex: 1 }}
        innerStyle={{ flex: 1 }}
      />
    </div>
  );
};

export default ImageLoader;
