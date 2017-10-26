// Trigger stub created by 'zapier convert'. This is just a stub - you will need to edit!

// triggers on new_ticket_webhook with a certain tag
const triggerNewticketwebhook = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/tickets`,
    params: {
      EXAMPLE: bundle.inputData.EXAMPLE
    }
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
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
    inputFields: [

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

    perform: triggerNewticketwebhook
  }
};
