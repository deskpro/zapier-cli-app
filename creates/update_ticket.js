const parseError = require('../functions/parse_error');
const formatLabels = require('../functions/format_labels');

// create a particular update_ticket by name
const createUpdateticket = (z, bundle) => {
  const ticketId = bundle.inputData.id;
  delete bundle.inputData.id;
  const responsePromise = z.request({
    method: 'PUT',
    url: `https://${bundle.authData.platform_url}/api/v2/tickets/${ticketId}`,
    params: {
      follow_location: 1
    },
    body: JSON.stringify(formatLabels(bundle.inputData))
  });
  return responsePromise
    .then(response => {
      if (response.status === 400) {
        parseError(response);
      }
      return z.JSON.parse(response.content).data;
    });
};

module.exports = {
  key: 'update_ticket',
  noun: 'Ticket',

  display: {
    label: 'Update Ticket',
    description: 'Update an existing ticket.'
  },

  operation: {
    inputFields: [
      {
        key: 'id',
        label: 'Id',
        type: 'integer',
        required: true,
        dynamic: 'get_tickets.id.ref',
        search: 'find_ticket.id'
      },
      {
        key: 'department',
        label: 'Department',
        type: 'integer',
        required: false,
        dynamic: 'get_departments.id.title'
      },
      {
        key: 'subject',
        label: 'Subject',
        type: 'string',
        required: false
      },
      {
        key: 'person',
        label: 'Person',
        type: 'string',
        required: false,
        dynamic: 'get_persons.id.name',
        search: 'find_person.id'
      },
      {
        key: 'status',
        label: 'Status',
        type: 'string',
        required: false,
        dynamic: 'get_ticket_statuses.id.label'
      },
      {
        key: 'labels',
        label: 'Labels',
        helpText: 'Replace the existing list of labels. Comma separated list of labels',
        type: 'string',
        required: false
      }
    ],
    outputFields: [
      {
        key: 'agent',
        type: 'string',
        label: 'Agent Id'
      },
      {
        key: 'agent_team',
        type: 'string'
      },
      {
        key: 'auth',
        type: 'string'
      },
      {
        key: 'category',
        type: 'string'
      },
      {
        key: 'count_agent_replies',
        type: 'string'
      },
      {
        key: 'count_user_replies',
        type: 'string'
      },
      {
        key: 'creation_system',
        type: 'string'
      },
      {
        key: 'creation_system_option',
        type: 'string'
      },
      {
        key: 'date_agent_waiting',
        type: 'string'
      },
      {
        key: 'date_archived',
        type: 'string'
      },
      {
        key: 'date_created',
        type: 'string'
      },
      {
        key: 'date_feedback_rating',
        type: 'string'
      },
      {
        key: 'date_first_agent_assign',
        type: 'string'
      },
      {
        key: 'date_first_agent_reply',
        type: 'string'
      },
      {
        key: 'date_last_agent_reply',
        type: 'string'
      },
      {
        key: 'date_last_user_reply',
        type: 'string'
      },
      {
        key: 'date_locked',
        type: 'string'
      },
      {
        key: 'date_resolved',
        type: 'string'
      },
      {
        key: 'date_status',
        type: 'string'
      },
      {
        key: 'date_user_waiting',
        type: 'string'
      },
      {
        key: 'department',
        type: 'string',
        label: 'Department Id'
      },
      {
        key: 'email_account',
        type: 'string'
      },
      {
        key: 'email_account_address',
        type: 'string'
      },
      {
        key: 'feedback_rating',
        type: 'string'
      },
      {
        key: 'has_attachments',
        type: 'string'
      },
      {
        key: 'hidden_status',
        type: 'string'
      },
      {
        key: 'id',
        type: 'string'
      },
      {
        key: 'is_hold',
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
        key: 'linked_chat',
        type: 'string'
      },
      {
        key: 'locked_by_agent',
        type: 'string'
      },
      {
        key: 'organization',
        type: 'string'
      },
      {
        key: 'original_subject',
        type: 'string'
      },
      {
        key: 'parent',
        type: 'string'
      },
      {
        key: 'person',
        type: 'string',
        label: 'Person Id'
      },
      {
        key: 'person_email',
        type: 'string',
        label: 'Person Emails'
      },
      {
        key: 'priority',
        type: 'string'
      },
      {
        key: 'properties',
        type: 'string'
      },
      {
        key: 'ref',
        type: 'string'
      },
      {
        key: 'sent_to_address',
        type: 'string'
      },
      {
        key: 'star',
        type: 'string'
      },
      {
        key: 'status',
        type: 'string'
      },
      {
        key: 'subject',
        type: 'string'
      },
      {
        key: 'ticket_hash',
        type: 'string'
      },
      {
        key: 'ticket_slas',
        type: 'string'
      },
      {
        key: 'total_to_first_reply',
        type: 'string'
      },
      {
        key: 'total_user_waiting',
        type: 'string'
      },
      {
        key: 'urgency',
        type: 'string'
      },
      {
        key: 'waiting_times',
        type: 'string'
      },
      {
        key: 'workflow',
        type: 'string'
      },
      {
        key: 'worst_sla_status',
        type: 'string'
      }
    ],

    sample: {
      "id": 1,
      "ref": "ABCD-EFGH-IJKL",
      "auth": 0,
      "department": 1,
      "person": 1,
      "person_email": "email@example.com",
      "agent": 1,
      "organization": 1,
      "sent_to_address": [],
      "email_account_address": "",
      "creation_system": "web.agent.portal",
      "creation_system_option": "",
      "ticket_hash": "none",
      "status": "awaiting_user",
      "is_hold": false,
      "labels": [],
      "urgency": 1,
      "date_created": "2017-01-19T16:56:23+0000",
      "date_first_agent_assign": "2017-01-19T16:56:23+0000",
      "date_first_agent_reply": "2017-01-19T16:56:24+0000",
      "date_last_agent_reply": "2017-01-19T16:56:24+0000",
      "date_agent_waiting": "2017-01-19T16:56:23+0000",
      "date_status": "2017-01-19T16:56:24+0000",
      "total_user_waiting": 0,
      "total_to_first_reply": 1,
      "has_attachments": false,
      "subject": "Test ticket",
      "original_subject": "Test ticket",
      "count_agent_replies": 1,
      "waiting_times": [],
      "ticket_slas": [],
      "fields": [],
      "contextual_fields": [],
      "star": {},
      "count_user_replies": 0,
    },

    perform: createUpdateticket
  }
};
