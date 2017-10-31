// "Create" stub created by 'zapier convert'. This is just a stub - you will need to edit!

// create a particular add_note_to_ticket by name
const createAddnotetoticket = (z, bundle) => {
  const ticketId = bundle.inputData.id;
  delete bundle.inputData.id;
  const responsePromise = z.request({
    method: 'POST',
    url: `https://${bundle.authData.platform_url}/api/v2/tickets/${ticketId}/messages`,
    body: JSON.stringify(bundle.inputData)
  });
  return responsePromise
    .then(response => z.JSON.parse(response.content).data);
};

module.exports = {
  key: 'add_note_to_ticket',
  noun: 'Message',

  display: {
    label: 'Add Message to Ticket',
    description: 'Add a new note to an existing ticket.'
  },

  operation: {
    inputFields: [
      {
        key: 'id',
        label: 'Id',
        type: 'string',
        required: true,
        dynamic: 'get_tickets.id.ref',
        search: 'find_ticket.id'
      },
      {
        key: 'is_note',
        label: 'Is Note',
        helpText: 'Is this message an agent note?',
        type: 'boolean',
        required: false
      },
      {
        key: 'format',
        label: 'Format',
        type: 'string',
        required: false
      },
      {
        key: 'message',
        label: 'Message',
        type: 'string',
        required: true
      }
    ],
    outputFields: [
      {
        key: 'data__attachments',
        type: 'string'
      },
      {
        key: 'data__attributes',
        type: 'string'
      },
      {
        key: 'data__creation_system',
        type: 'string'
      },
      {
        key: 'data__date_created',
        type: 'string'
      },
      {
        key: 'data__email',
        type: 'string'
      },
      {
        key: 'data__email_source',
        type: 'string'
      },
      {
        key: 'data__geo_country',
        type: 'string'
      },
      {
        key: 'data__hostname',
        type: 'string'
      },
      {
        key: 'data__id',
        type: 'string',
        label: 'Id'
      },
      {
        key: 'data__ip_address',
        type: 'string'
      },
      {
        key: 'data__is_agent_note',
        type: 'string',
        label: 'Is this an agent note'
      },
      {
        key: 'data__lang_code',
        type: 'string'
      },
      {
        key: 'data__message',
        type: 'string',
        label: 'Message'
      },
      {
        key: 'data__message_full',
        type: 'string'
      },
      {
        key: 'data__message_hash',
        type: 'string'
      },
      {
        key: 'data__message_raw',
        type: 'string'
      },
      {
        key: 'data__person',
        type: 'string'
      },
      {
        key: 'data__primary_translation',
        type: 'string'
      },
      {
        key: 'data__show_full_hint',
        type: 'string'
      },
      {
        key: 'data__ticket',
        type: 'string'
      },
      {
        key: 'data__visitor_id',
        type: 'string'
      }
    ],

    perform: createAddnotetoticket
  }
};
