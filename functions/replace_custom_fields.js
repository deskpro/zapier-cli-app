const replaceCustomFields = (object, customFields) => {
  const newFields = {};
  object.fields = Object.keys(object.fields).forEach((id) => {
    let title = id;
    const customField = customFields.find(field => field.id === parseInt(id, 10));
    if (customField) {
      title = customField.title;
    }
    let value;
    if (object.fields[id].detail) {
      if (Array.isArray(object.fields[id].value)) {
        value = object.fields[id].value.map(valueId => {
          return object.fields[id].detail[valueId].title;
        })
      } else {
        value = object.fields[id].detail[object.fields[id].value].title;
      }
    } else {
      value = object.fields[id].value;
    }
    newFields[title] = value;
  });
  object.fields = newFields;
  return object;
};

module.exports = replaceCustomFields;