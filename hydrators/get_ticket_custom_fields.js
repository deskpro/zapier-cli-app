const getTicketCustomFields = (z, bundle) => {
  return z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/ticket_custom_fields`
  });
};

module.exports = getTicketCustomFields;