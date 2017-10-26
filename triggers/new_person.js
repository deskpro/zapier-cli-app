const replaceImgSize = require('../functions/replace_img_size');

// triggers on new_person with a certain tag
const triggerNewperson = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/people`,
    params: {
      EXAMPLE: bundle.inputData.EXAMPLE
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
  key: 'new_person',
  noun: 'Person',

  display: {
    label: 'New Person',
    description: 'Triggers when a new person is created.',
    important: true
  },

  operation: {
    inputFields: [

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
        type: 'string',
        label: 'Can admin'
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
        type: 'string',
        label: 'First Name'
      },
      {
        key: 'gravatar_url',
        type: 'string'
      },
      {
        key: 'id',
        type: 'string',
        label: 'Id'
      },
      {
        key: 'is_agent',
        type: 'string',
        label: 'Is an agent'
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
        type: 'string',
        label: 'Is a user'
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
        type: 'string',
        label: 'Last Name'
      },
      {
        key: 'last_seen',
        type: 'string'
      },
      {
        key: 'name',
        type: 'string',
        label: 'Name'
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
        type: 'string',
        label: 'Primary email address'
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

    perform: triggerNewperson
  }
};
