const formatLabels = (data) => {
  if (data.labels) {
    data.labels = data.labels.split(',').map((item) => item.trim());
  } else {
    data.labels = [];
  }
  return data;
};

module.exports = formatLabels;