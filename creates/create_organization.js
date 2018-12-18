const parseError = require('../functions/parse_error');
const replaceCustomFields = require('../functions/replace_custom_fields');
const formatLabels = require('../functions/format_labels');
const convertBodyData = require('../functions/convert_body_data');
const formatCommaSeparated = require('../functions/format_comma_separated');
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

// create a particular create_organization by name
const createCreateorganization = (z, bundle) => {
  let inputData = formatLabels(bundle.inputData);
  inputData = formatCommaSeparated(inputData, 'email_domains');
  if (inputData['contact_data__phone__0__number']) {
    let phone = phoneUtil.parse(inputData['contact_data__phone__0__number']);
    inputData['contact_data__phone__0__number'] = phone.getNationalNumber();
    inputData['contact_data__phone__0__code'] = phone.getCountryCode();
    inputData['contact_data__phone__0__type'] = 'phone';
  }
  const responsePromise = z.request({
    method: 'POST',
    url: `https://${bundle.authData.platform_url}/api/v2/organizations`,
    body: JSON.stringify(convertBodyData(inputData))
  });
  const getOrganizationCustomFields = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/organization_custom_fields`
  });
  return Promise.all([responsePromise, getOrganizationCustomFields])
    .then(responses => {
      const customFields = z.JSON.parse(responses[1].content).data;
      if (responses[0].status === 400) {
        parseError(responses[0], customFields);
      }
      const organization = z.JSON.parse(responses[0].content).data;
      return replaceCustomFields(organization, customFields);
    });
};

module.exports = {
  key: 'create_organization',
  noun: 'Organization',

  display: {
    label: 'Create Organization',
    description: 'Create a new organization.'
  },

  operation: {
    inputFields: [
      {
        key: 'name',
        label: 'Name',
        type: 'string',
        required: true
      },
      {
        key: 'summary',
        label: 'Summary',
        type: 'string',
        required: false
      },
      {
        key: 'labels',
        label: 'Labels',
        helpText: 'Comma separated list of labels',
        type: 'string',
        required: false
      },
      {
        key: 'parent',
        label: 'Parent organization',
        type: 'string',
        required: false,
        dynamic: 'get_organizations.id.name',
        search: 'find_organization.id'
      },
      {
        key: 'email_domains',
        label: 'Email domains',
        helpText: 'Comma separated list of email domains to be associated to the organization',
        type: 'string',
        required: false
      },
      {
        key: 'contact_data__phone__0__number',
        label: 'Phone number',
        helpText: 'Phone number in international format',
        type: 'string',
        required: false,
        placeholder: '+441234567890'
      },
      {
        key: 'contact_data__address__0__address',
        label: 'Street Address',
        type: 'string',
        required: false
      },
      {
        key: 'contact_data__address__0__city',
        label: 'City',
        type: 'string',
        required: false
      },
      {
        key: 'contact_data__address__0__state',
        label: 'State',
        type: 'string',
        required: false
      },
      {
        key: 'contact_data__address__0__zip',
        label: 'Postal / Zip code',
        type: 'string',
        required: false
      },
      {
        key: 'contact_data__address__0__country',
        label: 'Country',
        type: 'string',
        required: false
      }
    ],
    outputFields: [
      {
        key: 'data__chats_count',
        type: 'string'
      },
      {
        key: 'data__contact_data',
        type: 'string'
      },
      {
        key: 'data__date_created',
        type: 'string'
      },
      {
        key: 'data__email_domains',
        type: 'string'
      },
      {
        key: 'data__id',
        type: 'string',
        label: 'Id'
      },
      {
        key: 'data__importance',
        type: 'string'
      },
      {
        key: 'data__labels',
        type: 'string'
      },
      {
        key: 'data__members',
        type: 'string'
      },
      {
        key: 'data__name',
        type: 'string',
        label: 'Name'
      },
      {
        key: 'data__parent',
        type: 'string'
      },
      {
        key: 'data__summary',
        type: 'string',
        label: 'Summary'
      },
      {
        key: 'data__tickets_count',
        type: 'string'
      },
      {
        key: 'data__user_groups',
        type: 'string'
      }
    ],

    perform: createCreateorganization
  }
};
