// Trigger stub created by 'zapier convert'. This is just a stub - you will need to edit!

// triggers on new_ticket_reply with a certain tag
const triggerNewticketreply = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/tickets/${bundle.inputData.ticket_id}/messages`
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'new_ticket_reply',
  noun: 'Reply',

  display: {
    label: 'New Ticket Reply',
    description: 'Triggers when a ticket is answered.'
  },

  operation: {
    inputFields: [
      {
        key: 'ticket_id',
        label: 'Id',
        type: 'integer',
        required: true,
        dynamic: 'get_tickets.id.ref',
        search: 'find_ticket.id'
      }
    ],
    outputFields: [
      {
        key: 'attachments',
        type: 'string'
      },
      {
        key: 'attributes',
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
        key: 'email',
        type: 'string',
        label: 'Email'
      },
      {
        key: 'email_source',
        type: 'string'
      },
      {
        key: 'geo_country',
        type: 'string'
      },
      {
        key: 'hostname',
        type: 'string'
      },
      {
        key: 'id',
        type: 'string'
      },
      {
        key: 'ip_address',
        type: 'string'
      },
      {
        key: 'is_agent_note',
        type: 'string'
      },
      {
        key: 'lang_code',
        type: 'string'
      },
      {
        key: 'message',
        type: 'string'
      },
      {
        key: 'message_full',
        type: 'string'
      },
      {
        key: 'message_hash',
        type: 'string'
      },
      {
        key: 'message_raw',
        type: 'string'
      },
      {
        key: 'person',
        type: 'string',
        label: 'Person Id'
      },
      {
        key: 'primary_translation',
        type: 'string'
      },
      {
        key: 'show_full_hint',
        type: 'string'
      },
      {
        key: 'ticket',
        type: 'string',
        label: 'Ticket Id'
      },
      {
        key: 'visitor_id',
        type: 'string'
      }
    ],

    perform: triggerNewticketreply
  }
};
