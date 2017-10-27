const replaceCustomFields = (ticket, customFields) => {
  const newFields = {};
  ticket.fields = Object.keys(ticket.fields).forEach((id) => {
    let title = id;
    const customField = customFields.find(field => field.id === parseInt(id, 10));
    if (customField) {
      title = customField.title;
    }
    let value;
    if (ticket.fields[id].detail) {
      if (Array.isArray(ticket.fields[id].value)) {
        value = ticket.fields[id].value.map(valueId => {
          return ticket.fields[id].detail[valueId].title;
        })
      } else {
        value = ticket.fields[id].detail[ticket.fields[id].value].title;
      }
    } else {
      value = ticket.fields[id].value;
    }
    newFields[title] = value;
  });
  ticket.fields = newFields;
  return ticket;
};

module.exports = replaceCustomFields;