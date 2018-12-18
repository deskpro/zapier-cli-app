const parseError = (response, customFields = []) => {
  const content = JSON.parse(response.content);
  if (content.code === 'invalid_input') {
    if (content.errors && content.errors.errors) {
      throw new Error(content.errors.errors[0].message);
    } else if (content.errors.fields) {
      const field = Object.keys(content.errors.fields)[0];
      if (content.errors.fields[field].errors) {
        throw new Error(field + ': ' + content.errors.fields[field].errors[0].message);
      } else if (field === 'fields' && customFields.length) {
        const fieldId = Object.keys(content.errors.fields.fields.fields)[0].replace(/fields_/, '');
        const customField = customFields.find(f => f.id === parseInt(fieldId, 10));
        if (customField) {
          throw new Error(customField.title + ': ' + content.errors.fields.fields.fields[`fields_${fieldId}`].errors[0].message);
        } else {
          throw new Error('Undefined error');
        }
      }
    }
  }
};
module.exports = parseError;
