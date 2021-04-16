const parseError = require('../functions/parse_error');
const replaceImgSize = require('../functions/replace_img_size');
const replaceCustomFields = require('../functions/replace_custom_fields');
const formatLabels = require('../functions/format_labels');

// create a particular create_person by name
const createCreateperson = (z, bundle) => {
  const responsePromise = z.request({
    method: 'POST',
    url: `https://${bundle.authData.platform_url}/api/v2/people`,
    body: JSON.stringify(formatLabels(bundle.inputData)),
    headers: {
      'content-type': 'application/json'
    }
  });
  const getPersonCustomFields = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/person_custom_fields`
  });
  return Promise.all([responsePromise, getPersonCustomFields])
    .then(responses => {
      const customFields = z.JSON.parse(responses[1].content).data;
      if (responses[0].status === 400) {
        parseError(responses[0], customFields);
      }
      const person = z.JSON.parse(responses[0].content).data;
      if (person.avatar) {
        person.avatar.url_pattern = replaceImgSize(person.avatar.url_pattern);
        person.avatar.default_url_pattern = replaceImgSize(person.avatar.default_url_pattern);
      }
      return replaceCustomFields(person, customFields);
    });
};

module.exports = {
  key: 'create_person',
  noun: 'Person',

  display: {
    label: 'Create Person',
    description: 'Creates a new person.'
  },

  operation: {
    inputFields: [
      {
        key: 'primary_email',
        label: 'Email Address',
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
        type: 'string',
        required: false
      },
      {
        key: 'last_name',
        label: 'Last Name',
        type: 'string',
        required: false
      },
      {
        key: 'organization',
        label: 'Organization',
        type: 'string',
        required: false,
        dynamic: 'get_organizations.id.name',
        search: 'find_organization.id'
      },
      {
        key: 'labels',
        label: 'Labels',
        helpText: 'Comma separated list of labels',
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
    sample: {
      "primary_email": "john.doe@example.com",
      "first_name": "John",
      "last_name": "Doe",
      "name": "John Doe",
      "display_name": "John Doe",
      "is_agent": true,
      "avatar": {
        "default_url_pattern": "https:\/\/example.deskpro.com\/file.php\/avatar\/{{IMG_SIZE}}\/default.jpg?size-fit=1",
        "url_pattern": null,
        "base_gravatar_url": null
      },
      "online": true,
      "online_for_chat": false,
      "last_seen": "2021-04-16T08:44:20+0000",
      "agent_data": {
        "extension_number": null,
        "voicemail_asset": null,
        "is_voice_enabled": false,
        "available_status": "idle",
        "agent_calls_enabled": false,
        "outbound_calls_enabled": false,
        "can_use_forwarding": false,
        "agent_can_use_forwarding": false,
        "forwarding_number": null,
        "forwarding_ring_timeout": 10,
        "forwarding_number_type": null,
        "forwarding_logged_out": true
      },
      "is_user": true,
      "was_agent": false,
      "can_agent": true,
      "can_admin": true,
      "can_billing": true,
      "can_reports": true,
      "picture_blob": null,
      "disable_picture": false,
      "gravatar_url": "https:\/\/secure.gravatar.com\/avatar\/bdcdd5aa9e97dabf6f1c2fcd7ab22fc3?&d=mm",
      "is_contact": false,
      "disable_autoresponses": false,
      "disable_autoresponses_log": "",
      "is_confirmed": true,
      "is_deleted": false,
      "is_disabled": false,
      "creation_system": "web.person",
      "override_display_name": "",
      "display_contact": "John Doe <john.doe@example.com>",
      "summary": "",
      "language": 1,
      "organization": null,
      "organization_position": "",
      "organization_manager": false,
      "timezone": "Europe\/London",
      "date_created": "2021-04-15T06:54:43+0000",
      "date_last_login": "2021-04-16T08:08:05+0000",
      "browser": null,
      "user_groups": [],
      "agent_groups": [
        3
      ],
      "labels": [
        "raynor bechtelar and jones"
      ],
      "emails": [
        "john.doe@example.com"
      ],
      "phone_numbers": [],
      "tickets_count": 83,
      "chats_count": 0,
      "fields": {},
      "contact_data": [],
      "teams": [],
      "primary_team": null,
      "brands": [
        1
      ],
      "preferences": {
        "agent.ui.flag.green": "Dolor",
        "agent.ui.flag.pink": "Molestiae",
        "agent.ui.flag.red": "Delectus",
        "agent.ui.im.chats_order": [],
        "agent.ui.recent_tabs_collection": {
          "tickets-299": [
            "tickets",
            299,
            "Sapiente cum sed in sapiente esse.",
            "\/agent\/tickets\/299",
            1618470559
          ],
          "tickets-275": [
            "tickets",
            275,
            "Corporis doloremque dolor perferendis.",
            "\/agent\/tickets\/275",
            1618470287
          ],
          "tickets-183": [
            "tickets",
            183,
            "Eos est id ducimus dolores.",
            "\/agent\/tickets\/183",
            1618470274
          ]
        },
        "inhelp.admin_api_keys_edit_key_type": "open",
        "inhelp.admin_ticket_settings_agent_defaults": "open",
        "inhelp.admin_ticket_settings_attachment_auth": "open",
        "inhelp.admin_ticket_settings_deflection": "open",
        "inhelp.admin_ticket_settings_email_validation": "open",
        "inhelp.admin_ticket_settings_locking": "open",
        "inhelp.admin_ticket_settings_refs": "open",
        "inhelp.admin_ticket_settings_ref_custom_enabled": "open",
        "inhelp.admin_ticket_settings_working_hours": "open",
        "ticket_counts.archive_archived": "0",
        "ticket_counts.archive_awaiting_user": "190",
        "ticket_counts.archive_deleted": "0",
        "ticket_counts.archive_resolved": "180",
        "ticket_counts.archive_spam": "0"
      }
    },

    perform: createCreateperson
  }
};
