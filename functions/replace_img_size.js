const replaceImgSize = (url) => {
  if (url) {
    url = url.replace(/\/size\{\{IMG_SIZE\}\}size-fit/, '');
    url = url.replace(/\{\{IMG_SIZE\}\}/, '200');
  }
  return url;
};

module.exports = replaceImgSize;