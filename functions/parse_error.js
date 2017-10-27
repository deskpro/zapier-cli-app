const parseError = (response) => {
  const content = JSON.parse(response.content);
  if (content.code === 'invalid_input') {
    if (content.errors && content.errors.fields) {
      const field = Object.keys(content.errors.fields)[0];
      throw new Error(field + ': ' + content.errors.fields[field].errors[0].message);
    }
  }
};
module.exports = parseError;