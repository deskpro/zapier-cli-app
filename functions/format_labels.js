const formatLabels = (data) => {
  data.labels = data.labels.split(',').map((item) => item.trim());
  return data;
};

module.exports = formatLabels;