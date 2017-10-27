// "Create" stub created by 'zapier convert'. This is just a stub - you will need to edit!

// create a particular create_ticket by name
const createCreateticket = (z, bundle) => {
  const responsePromise = z.request({
    method: 'POST',
    url: `https://${bundle.authData.platform_url}/api/v2/tickets`,
    data: JSON.stringify(bundle.inputData)
  });
  return responsePromise
    .then(response => z.JSON.parse(response.content).data);
};

module.exports = {
  key: 'create_ticket',
  noun: 'Ticket',

  display: {
    label: 'Create Ticket',
    description: 'Creates a new ticket.',
    important: true
  },

  operation: {
    inputFields: [
      {
        key: 'department',
        label: 'Department',
        type: 'integer',
        required: false,
        dynamic: 'get_departments.id.title'
      },
      {
        key: 'agent',
        label: 'Agent',
        helpText: 'Agent assign to the ticket, you can use Id or email address.',
        type: 'string',
        required: false
      },
      {
        key: 'subject',
        label: 'Subject',
        type: 'string',
        required: true
      },
      {
        key: 'message__message',
        label: 'Message',
        type: 'string',
        required: false
      },
      {
        key: 'message__format',
        label: 'Format',
        type: 'string',
        required: false
      },
      {
        key: 'message__person',
        label: 'Message Author',
        helpText: 'Optional, can be an Id or email address.',
        type: 'string',
        required: false
      },
      {
        key: 'person',
        label: 'Person',
        type: 'string',
        required: true
      },
      {
        key: 'status',
        label: 'Status',
        type: 'string',
        required: false
      },
      {
        key: 'labels',
        label: 'Labels',
        type: 'string',
        required: false
      }
    ],
    outputFields: [
      {
        key: 'agent',
        type: 'string'
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
        key: 'cc',
        type: 'string'
      },
      {
        key: 'children',
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
        type: 'string'
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
        type: 'string'
      },
      {
        key: 'person_email',
        type: 'string'
      },
      {
        key: 'priority',
        type: 'string'
      },
      {
        key: 'problems',
        type: 'string'
      },
      {
        key: 'product',
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
        key: 'siblings',
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

    perform: createCreateticket
  }
};
