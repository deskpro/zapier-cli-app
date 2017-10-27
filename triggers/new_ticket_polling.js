replaceCustomFields = require('../functions/replace_custom_fields');

// triggers on new_ticket_polling with a certain tag
const triggerNewticketpolling = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/tickets`,
    params: {
      order_by: 'id',
      order_dir: 'desc',
      filter: bundle.inputData.filter
    }
  });
  const getTicketCustomFields = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/ticket_custom_fields`
  });
  return Promise.all([responsePromise, getTicketCustomFields])
    .then(responses => {
      const tickets = z.JSON.parse(responses[0].content).data;
      const customFields = z.JSON.parse(responses[1].content).data;
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
  key: 'new_ticket_polling',
  noun: 'Ticket',

  display: {
    label: 'New Ticket (Polling)',
    description: 'Triggers when a new ticket is created.'
  },

  operation: {
    inputFields: [
      {
        key: 'filter',
        label: 'Ticket Filter',
        helpText: '(help text must be at least 10 characters)',
        type: 'integer',
        required: true,
        dynamic: 'get_ticket_filters.id.title'
      }
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
        type: 'string'
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
        type: 'string',
        label: 'Date Created'
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
        type: 'string',
        label: 'Department Id'
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
        key: 'data[]hidden_status',
        type: 'string'
      },
      {
        key: 'data[]id',
        type: 'string',
        label: 'Id'
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
        type: 'string',
        label: 'Organization Id'
      },
      {
        key: 'data[]original_subject',
        type: 'string',
        label: 'Original Subject'
      },
      {
        key: 'data[]parent',
        type: 'string'
      },
      {
        key: 'data[]person',
        type: 'string',
        label: 'Person Id'
      },
      {
        key: 'data[]person_email',
        type: 'string',
        label: 'Person Email'
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
        type: 'string',
        label: 'Ref'
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
        type: 'string',
        label: 'Star'
      },
      {
        key: 'data[]status',
        type: 'string',
        label: 'Status'
      },
      {
        key: 'data[]subject',
        type: 'string',
        label: 'Subject'
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
        type: 'string',
        label: 'Urgency'
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

    perform: triggerNewticketpolling
  }
};
