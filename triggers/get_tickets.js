const parseError = require('../functions/parse_error');
const replaceCustomFields = require('../functions/replace_custom_fields');
// Trigger stub created by 'zapier convert'. This is just a stub - you will need to edit!

// triggers on get_tickets with a certain tag
const triggerGettickets = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/tickets`
  });
  const getTicketCustomFields = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/ticket_custom_fields`
  });
  return Promise.all([responsePromise, getTicketCustomFields])
    .then(responses => {
      const customFields = z.JSON.parse(responses[1].content).data;
      if (responses[0].status === 400) {
        parseError(responses[0], customFields);
      }
      const tickets = z.JSON.parse(responses[0].content).data;
      return tickets.map(ticket => {
        delete ticket.cc;
        delete ticket.children;
        delete ticket.product;
        delete ticket.problems;
        return replaceCustomFields(ticket, customFields);
      });
    });
};

module.exports = {
  key: 'get_tickets',
  noun: 'Ticket',

  display: {
    label: 'Get Ticket',
    description: 'Get Ticket for dynamic dropdowns.',
    hidden: true
  },

  operation: {
    inputFields: [

    ],
    outputFields: [
      {
        key: 'data',
        type: 'string'
      },
      {
        key: 'data[]agent',
        type: 'string',
        label: 'Agent Id'
      },
      {
        key: 'data[]agent_team',
        type: 'string',
        label: 'Agent Team Id'
      },
      {
        key: 'data[]auth',
        type: 'string'
      },
      {
        key: 'data[]category',
        type: 'string',
        label: 'Category Id'
      },
      {
        key: 'data[]cc',
        type: 'string'
      },
      {
        key: 'data[]children',
        type: 'string'
      },
      {
        key: 'data[]count_agent_replies',
        type: 'string'
      },
      {
        key: 'data[]count_user_replies',
        type: 'string'
      },
      {
        key: 'data[]creation_system',
        type: 'string'
      },
      {
        key: 'data[]creation_system_option',
        type: 'string'
      },
      {
        key: 'data[]date_agent_waiting',
        type: 'string'
      },
      {
        key: 'data[]date_archived',
        type: 'string'
      },
      {
        key: 'data[]date_created',
        type: 'string'
      },
      {
        key: 'data[]date_feedback_rating',
        type: 'string'
      },
      {
        key: 'data[]date_first_agent_assign',
        type: 'string'
      },
      {
        key: 'data[]date_first_agent_reply',
        type: 'string'
      },
      {
        key: 'data[]date_last_agent_reply',
        type: 'string'
      },
      {
        key: 'data[]date_last_user_reply',
        type: 'string'
      },
      {
        key: 'data[]date_locked',
        type: 'string'
      },
      {
        key: 'data[]date_resolved',
        type: 'string'
      },
      {
        key: 'data[]date_status',
        type: 'string'
      },
      {
        key: 'data[]date_user_waiting',
        type: 'string'
      },
      {
        key: 'data[]department',
        type: 'string'
      },
      {
        key: 'data[]email_account',
        type: 'string'
      },
      {
        key: 'data[]email_account_address',
        type: 'string'
      },
      {
        key: 'data[]feedback_rating',
        type: 'string'
      },
      {
        key: 'data[]has_attachments',
        type: 'string'
      },
      {
        key: 'data[]id',
        type: 'string'
      },
      {
        key: 'data[]is_hold',
        type: 'string'
      },
      {
        key: 'data[]labels',
        type: 'string'
      },
      {
        key: 'data[]language',
        type: 'string'
      },
      {
        key: 'data[]linked_chat',
        type: 'string'
      },
      {
        key: 'data[]locked_by_agent',
        type: 'string'
      },
      {
        key: 'data[]organization',
        type: 'string'
      },
      {
        key: 'data[]original_subject',
        type: 'string'
      },
      {
        key: 'data[]parent',
        type: 'string'
      },
      {
        key: 'data[]person',
        type: 'string'
      },
      {
        key: 'data[]person_email',
        type: 'string'
      },
      {
        key: 'data[]priority',
        type: 'string'
      },
      {
        key: 'data[]problems',
        type: 'string'
      },
      {
        key: 'data[]product',
        type: 'string'
      },
      {
        key: 'data[]properties',
        type: 'string'
      },
      {
        key: 'data[]ref',
        type: 'string'
      },
      {
        key: 'data[]sent_to_address',
        type: 'string'
      },
      {
        key: 'data[]siblings',
        type: 'string'
      },
      {
        key: 'data[]star',
        type: 'string'
      },
      {
        key: 'data[]status',
        type: 'string'
      },
      {
        key: 'data[]subject',
        type: 'string'
      },
      {
        key: 'data[]ticket_hash',
        type: 'string'
      },
      {
        key: 'data[]ticket_slas',
        type: 'string'
      },
      {
        key: 'data[]total_to_first_reply',
        type: 'string'
      },
      {
        key: 'data[]total_user_waiting',
        type: 'string'
      },
      {
        key: 'data[]urgency',
        type: 'string'
      },
      {
        key: 'data[]waiting_times',
        type: 'string'
      },
      {
        key: 'data[]workflow',
        type: 'string'
      },
      {
        key: 'data[]worst_sla_status',
        type: 'string'
      },
      {
        key: 'meta__pagination__count',
        type: 'string'
      },
      {
        key: 'meta__pagination__current_page',
        type: 'string'
      },
      {
        key: 'meta__pagination__per_page',
        type: 'string'
      },
      {
        key: 'meta__pagination__total',
        type: 'string'
      },
      {
        key: 'meta__pagination__total_pages',
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

    perform: triggerGettickets
  }
};
