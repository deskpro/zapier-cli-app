// Trigger stub created by 'zapier convert'. This is just a stub - you will need to edit!

// triggers on ticket_update
const triggerTicketUpdate = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/apps/zapier/example/ticket_update`
  });
  return responsePromise
    .then(response => [z.JSON.parse(response.content)]);
};

const getTicketUpdate = (z, bundle) => {
  const ticketUpdate = bundle.cleanedRequest;

  return [ticketUpdate];
};

const subscribeHook = (z, bundle) => {
  const data = {
    target_url: bundle.targetUrl,
    event: 'ticket_update'
  };

  // You may return a promise or a normal data structure from any perform method.
  return z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/apps/zapier/hooks`,
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then((response) => {
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
  key: 'ticket_update',
  noun: 'Ticket Update',

  display: {
    label: 'Ticket Update',
    description: 'Triggers when a ticket is updated.'
  },

  operation: {
    type: 'hook',

    performSubscribe: subscribeHook,
    performUnsubscribe: unsubscribeHook,

    perform: getTicketUpdate,
    performList: triggerTicketUpdate,

    inputFields: [],
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

    sample: {
      "message_raw": null,
      "message_full": null,
      "email_source": null,
      "attachments": [],
      "lang_code": null,
      "geo_country": "GB",
      "show_full_hint": false,
      "message": "Ticket Message",
      "hostname": "example.net",
      "visitor_id": null,
      "email": "",
      "person": 1,
      "is_agent_note": 0,
      "primary_translation": null,
      "creation_system": "web",
      "date_created": "2016-12-04T22:23:21+0000",
      "message_hash": "752b9e5046e05668241705730e645bce664cb1a8",
      "ticket": 1,
      "attributes": [],
      "ip_address": "192.168.0.1",
      "id": 1
    },
  }
};
