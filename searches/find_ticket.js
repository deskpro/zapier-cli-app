// find a particular find_ticket by name
const searchFindticket = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://{{bundle.authData.platform_url}}/api/v2/search?q={{query}}&types=ticket`,
    params: {
      query: bundle.inputData.query
    }
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'find_ticket',
  noun: 'Ticket',

  display: {
    label: 'Find Ticket',
    description: 'Finds an existing ticket.'
  },

  operation: {
    inputFields: [
      {
        key: 'query',
        label: 'Query',
        helpText: 'It can be the reference, the ticket ID or part of the ticket subject.',
        type: 'string',
        required: true
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
        key: 'id',
        type: 'string',
        label: 'ID'
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
        type: 'string',
        label: 'Person Id'
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
        type: 'string'
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

    perform: searchFindticket
  }
};
