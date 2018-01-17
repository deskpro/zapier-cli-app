const convertBodyData = (data) => {
  Object.keys(data).forEach(key => {
    const splits = key.split('__');
    if (splits.length > 1) {
      let ref = data;
      for (let i = 0; i < splits.length; i++) {
        let j = splits[i];
        if (i === splits.length - 1) {
          ref[j] = data[key];
        } else {
          ref = ref[j] = ref[j] || {};
        }
      }
      delete data[key];
    }
  });
  return data;
};

module.exports = convertBodyData;