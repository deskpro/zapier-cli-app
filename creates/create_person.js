// "Create" stub created by 'zapier convert'. This is just a stub - you will need to edit!

// create a particular create_person by name
const createCreateperson = (z, bundle) => {
  const responsePromise = z.request({
    method: 'POST',
    url: `https://${bundle.authData.platform_url}/api/v2/people`,
    data: JSON.stringify(bundle.inputData)
  });
  return responsePromise
    .then(response => z.JSON.parse(response.content).data);
};

module.exports = {
  key: 'create_person',
  noun: 'Create_person',

  display: {
    label: 'Create Person',
    description: 'Creates a new person.'
  },

  operation: {
    inputFields: [
      {
        key: 'primary_email',
        label: 'Email Address',
        helpText: '(help text must be at least 10 characters)',
        type: 'string',
        required: true
      },
      {
        key: 'password',
        label: 'Password',
        helpText: 'Password (will be encrypted in the database).',
        type: 'string',
        required: false
      },
      {
        key: 'title_prefix',
        label: 'Title',
        helpText: '(help text must be at least 10 characters)',
        type: 'string',
        required: false
      },
      {
        key: 'name',
        label: 'Name',
        helpText: 'Full name of the person. (You need either a name or a first and a last name, both can be specified).',
        type: 'string',
        required: false,
        placeholder: 'John Doe'
      },
      {
        key: 'first_name',
        label: 'First Name',
        helpText: '(help text must be at least 10 characters)',
        type: 'string',
        required: false
      },
      {
        key: 'last_name',
        label: 'Last Name',
        helpText: '(help text must be at least 10 characters)',
        type: 'string',
        required: false
      },
      {
        key: 'organization',
        label: 'Organization',
        helpText: '(help text must be at least 10 characters)',
        type: 'string',
        required: false,
        dynamic: 'get_organizations.id.name',
        search: 'find_organization.id'
      },
      {
        key: 'labels',
        label: 'Labels',
        helpText: '(help text must be at least 10 characters)',
        type: 'string',
        required: false
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
        key: 'fields__11__value',
        type: 'string'
      },
      {
        key: 'fields__33__value',
        type: 'string'
      },
      {
        key: 'fields__5__value',
        type: 'string'
      },
      {
        key: 'fields__6__value',
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
        label: 'Primary Email'
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

    perform: createCreateperson
  }
};