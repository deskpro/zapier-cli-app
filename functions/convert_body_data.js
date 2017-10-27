const convertBodyData = (data) => {
  Object.keys(data).forEach(key => {
    const matches = key.match(/^([a-z]+)__(.+)$/);
    if (matches) {
      if (!data[matches[1]]) {
        data[matches[1]] = {};
      }
      data[matches[1]][matches[2]] = data[key];
      delete data[key];
    }
  });
  return data;
};

module.exports = convertBodyData;