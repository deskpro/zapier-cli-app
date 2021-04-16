const parseError = require('../functions/parse_error');

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
    .then(response => {
      if (response.status === 400) {
        parseError(response);
      }
      return z.JSON.parse(response.content).data;
    });
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
        required: false,
        choices: {text: "Text", html: "HTML"}
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
    sample: {
      "id": 5014,
      "ticket": 123,
      "person": 1,
      "email_source": null,
      "attributes": [],
      "attachments": [],
      "date_created": "2021-04-16T08:50:14+0000",
      "is_agent_note": 0,
      "creation_system": "web",
      "ip_address": "",
      "visitor_id": null,
      "hostname": "",
      "geo_country": null,
      "email": "",
      "message_hash": "f2fb1570bc583d6aee85be67d1d506af9b9cd55a",
      "primary_translation": null,
      "message": "Test message",
      "message_full": "",
      "message_raw": null,
      "message_preview_text": "Test message",
      "show_full_hint": false,
      "lang_code": null
    },

    perform: createAddnotetoticket
  }
};
