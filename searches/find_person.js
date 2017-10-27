const replaceImgSize = require('../functions/replace_img_size');

// find a particular find_person by name
const searchFindperson = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/people`,
    params: {
      primary_email: bundle.inputData.primary_email
    }
  });
  return responsePromise
    .then(response => {
      const content = z.JSON.parse(response.content);
      if (content.data.length) {
        content.data.forEach(function(element) {
          if (element.avatar) {
            element.avatar.url_pattern = replaceImgSize(element.avatar.url_pattern);
            element.avatar.default_url_pattern = replaceImgSize(element.avatar.default_url_pattern);
          }
        });
      }
      return content.data;
    });
};

module.exports = {
  key: 'find_person',
  noun: 'Person',

  display: {
    label: 'Find Person',
    description: 'Finds an existing contact.',
    important: true
  },

  operation: {
    inputFields: [
      {
        key: 'primary_email',
        label: 'Email',
        helpText: '(help text must be at least 10 characters)',
        type: 'string',
        required: true
      }
    ],
    outputFields: [
      {
        key: 'agent_data',
        type: 'string'
      },
      {
        key: 'agent_groups',
        type: 'string'
      },
      {
        key: 'avatar__base_gravatar_url',
        type: 'string'
      },
      {
        key: 'avatar__default_url_pattern',
        type: 'string'
      },
      {
        key: 'avatar__url_pattern',
        type: 'string'
      },
      {
        key: 'browser',
        type: 'string'
      },
      {
        key: 'can_admin',
        type: 'string'
      },
      {
        key: 'can_agent',
        type: 'string'
      },
      {
        key: 'can_billing',
        type: 'string'
      },
      {
        key: 'chats_count',
        type: 'string'
      },
      {
        key: 'contact_data',
        type: 'string'
      },
      {
        key: 'creation_system',
        type: 'string'
      },
      {
        key: 'date_created',
        type: 'string'
      },
      {
        key: 'date_last_login',
        type: 'string'
      },
      {
        key: 'disable_autoresponses',
        type: 'string'
      },
      {
        key: 'disable_autoresponses_log',
        type: 'string'
      },
      {
        key: 'disable_picture',
        type: 'string'
      },
      {
        key: 'emails',
        type: 'string'
      },
      {
        key: 'first_name',
        type: 'string'
      },
      {
        key: 'gravatar_url',
        type: 'string'
      },
      {
        key: 'id',
        type: 'string'
      },
      {
        key: 'is_agent',
        type: 'string'
      },
      {
        key: 'is_confirmed',
        type: 'string'
      },
      {
        key: 'is_contact',
        type: 'string'
      },
      {
        key: 'is_deleted',
        type: 'string'
      },
      {
        key: 'is_disabled',
        type: 'string'
      },
      {
        key: 'is_user',
        type: 'string'
      },
      {
        key: 'labels',
        type: 'string'
      },
      {
        key: 'language',
        type: 'string'
      },
      {
        key: 'last_name',
        type: 'string'
      },
      {
        key: 'last_seen',
        type: 'string'
      },
      {
        key: 'name',
        type: 'string'
      },
      {
        key: 'online',
        type: 'string'
      },
      {
        key: 'organization',
        type: 'string',
        label: 'Organization Id'
      },
      {
        key: 'organization_manager',
        type: 'string'
      },
      {
        key: 'organization_position',
        type: 'string'
      },
      {
        key: 'override_display_name',
        type: 'string'
      },
      {
        key: 'phone_numbers',
        type: 'string'
      },
      {
        key: 'picture_blob',
        type: 'string'
      },
      {
        key: 'primary_email',
        type: 'string'
      },
      {
        key: 'primary_team',
        type: 'string'
      },
      {
        key: 'summary',
        type: 'string'
      },
      {
        key: 'teams',
        type: 'string'
      },
      {
        key: 'tickets_count',
        type: 'string'
      },
      {
        key: 'timezone',
        type: 'string'
      },
      {
        key: 'title_prefix',
        type: 'string'
      },
      {
        key: 'user_groups',
        type: 'string'
      },
      {
        key: 'was_agent',
        type: 'string'
      }
    ],

    perform: searchFindperson
  }
};
