const formatLabels = (data) => {
  if (Array.isArray(data.labels)) {
    data.labels = data.labels.map((item) => item.trim());
  } else if (data.labels) {
    data.labels = data.labels.split(',').map((item) => item.trim());
  } else {
    data.labels = [];
  }
  return data;
};

module.exports = formatLabels;
