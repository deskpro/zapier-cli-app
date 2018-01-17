const formatCommaSeparated = (data, field) => {
  if (data[field]) {
    data[field] = data[field].split(',').map((item) => item.trim());
  }
  return data;
};

module.exports = formatCommaSeparated;