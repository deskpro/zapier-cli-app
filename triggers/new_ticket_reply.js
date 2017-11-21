// Trigger stub created by 'zapier convert'. This is just a stub - you will need to edit!

// triggers on new_ticket_reply with a certain tag
const triggerNewticketreply = (z, bundle) => {
  z.console.log(bundle);
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/tickets/1/messages`
  });
  return responsePromise
    .then(response => z.JSON.parse(response.content).data);
};

const getTicketReply = (z, bundle) => {
  z.console.log(bundle);
  const ticketReply = bundle.cleanedRequest;

  return [ticketReply];
};

const subscribeHook = (z, bundle) => {
  const data = {
    target_url: bundle.targetUrl,
    event: 'new_ticket_reply'
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
  key: 'new_ticket_reply',
  noun: 'Reply',

  display: {
    label: 'New Ticket Reply',
    description: 'Triggers when a ticket is answered.'
  },

  operation: {
    type: 'hook',

    performSubscribe: subscribeHook,
    performUnsubscribe: unsubscribeHook,

    perform: getTicketReply,
    performList: triggerNewticketreply,

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
