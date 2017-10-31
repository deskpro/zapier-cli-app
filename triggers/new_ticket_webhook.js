const parseError = require('../functions/parse_error');
const GetticketsTrigger = require('./get_tickets');

const getTicket = (z, bundle) => {
  const ticket = bundle.cleanedRequest;

  delete ticket.cc;
  delete ticket.children;
  delete ticket.siblings;
  delete ticket.product;
  delete ticket.problems;

  return [ticket];
};

const subscribeHook = (z, bundle) => {
  const data = {
    target_url: bundle.targetUrl,
    event: 'ticket_created',
    params: bundle.inputData
  };

  // You may return a promise or a normal data structure from any perform method.
  return z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/apps/zapier/hooks`,
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then((response) => {
      if (response.status === 400) {
        parseError(response);
      }
      return z.JSON.parse(response.content).data;
    });
};

const unsubscribeHook = (z, bundle) => {
  // bundle.subscribeData contains the parsed response JSON from the subscribe
  // request made initially.
  const hookId = bundle.subscribeData.id;


  // You may return a promise or a normal data structure from any perform method.
  return z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/apps/zapier/hooks/${hookId}`,
    method: 'DELETE',
  })
    .then((response) => z.JSON.parse(response.content));
};


module.exports = {
  key: 'new_ticket_webhook',
  noun: 'Ticket',

  display: {
    label: 'New Ticket',
    description: 'Triggers when a new ticket is created.',
    important: true
  },

  operation: {
    type: 'hook',

    performSubscribe: subscribeHook,
    performUnsubscribe: unsubscribeHook,

    perform: getTicket,
    performList: GetticketsTrigger.operation.perform,

    inputFields: [
      {
        key: 'filter',
        label: 'Ticket Filter',
        type: 'integer',
        required: false,
        dynamic: 'get_ticket_filters.id.title'
      }
    ],
    outputFields: [
      {
        key: 'agent',
        type: 'string',
        label: 'Agent Id'
      },
      {
        key: 'auth',
        type: 'string'
      },
      {
        key: 'cc',
        type: 'string'
      },
      {
        key: 'children',
        type: 'string'
      },
      {
        key: 'contextual_fields',
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
        key: 'date_created',
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
        key: 'date_status',
        type: 'string'
      },
      {
        key: 'department',
        type: 'string',
        label: 'Department Id'
      },
      {
        key: 'email_account_address',
        type: 'string'
      },
      {
        key: 'fields',
        type: 'string'
      },
      {
        key: 'has_attachments',
        type: 'string'
      },
      {
        key: 'id',
        type: 'string',
        label: 'Id'
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
        key: 'organization',
        type: 'string'
      },
      {
        key: 'original_subject',
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
        label: 'Person Email'
      },
      {
        key: 'problems',
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
        key: 'siblings',
        type: 'string'
      },
      {
        key: 'status',
        type: 'string',
        label: 'Status'
      },
      {
        key: 'subject',
        type: 'string',
        label: 'Subject'
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
    }
  }
};
