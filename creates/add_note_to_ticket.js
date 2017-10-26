// "Create" stub created by 'zapier convert'. This is just a stub - you will need to edit!

// create a particular add_note_to_ticket by name
const createAddnotetoticket = (z, bundle) => {
  const responsePromise = z.request({
    method: 'POST',
    url: 'https://{{platform_url}}/api/v2/tickets/{{id}}/messages',
    params: {
      id: bundle.inputData.id,
      platform_url: bundle.authData.platform_url
    },
    data: JSON.stringify({
      is_note: bundle.inputData.is_note
    })
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
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
        helpText: '(help text must be at least 10 characters)',
        type: 'string',
        required: true
      },
      {
        key: 'is_note',
        label: 'Is Note',
        helpText: 'Is this message an agent note?',
        type: 'string',
        required: false
      },
      {
        key: 'format',
        label: 'Format',
        helpText: '(help text must be at least 10 characters)',
        type: 'string',
        required: false
      },
      {
        key: 'message',
        label: 'Message',
        helpText: '(help text must be at least 10 characters)',
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
