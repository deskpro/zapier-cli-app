const parseError = require('../functions/parse_error');
const replaceCustomFields = require('../functions/replace_custom_fields');
const convertBodyData = require('../functions/convert_body_data');
const formatLabels = require('../functions/format_labels');

// create a particular create_ticket by name
const createCreateticket = (z, bundle) => {
  const responsePromise = z.request({
    method: 'POST',
    url: `https://${bundle.authData.platform_url}/api/v2/tickets`,
    body: JSON.stringify(formatLabels(convertBodyData(bundle.inputData)))
  });
  const getTicketCustomFields = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/ticket_custom_fields`
  });
  return Promise.all([responsePromise, getTicketCustomFields])
    .then(responses => {
      const customFields = z.JSON.parse(responses[1].content).data;
      if (responses[0].status === 400) {
        parseError(responses[0], customFields);
      }
      const ticket = z.JSON.parse(responses[0].content).data;
      delete ticket.cc;
      delete ticket.children;
      delete ticket.product;
      delete ticket.problems;
      return replaceCustomFields(ticket, customFields);
    });
};

const departmentLayouts = (z, bundle) => {
  if (!bundle.inputData.department) {
    return [];
  }
  const getLayouts = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/ticket_layouts/agent/${bundle.inputData.department}`
  });
  const getTicketCustomFields = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/ticket_custom_fields`
  });
  return Promise.all([getLayouts, getTicketCustomFields])
    .then(responses => {
      if (responses[0].json.data) {
        const fields = responses[0].json.data.fields
          .filter(field => field.field_type === 'ticket_field' && field.options.on_newticket)
          .map(field => {
            const id = field.field_id.replace('ticket_field_', '');
            const customField = responses[1].json.data.find(f => f.id === parseInt(id, 10));
            if (customField) {
              const inputField = {
                key: field.field_id.replace('ticket_field_', 'fields__'),
                helpText: customField.description,
                label: customField.title,
                required: field.required,
              };
              switch (customField.widget_type) {
                case 'checkbox':
                case 'multichoice':
                  inputField.list = true;
                case 'choice':
                case 'radio':
                  inputField.choices = customField.choices.reduce((map, obj) => {
                    map[obj.id] = obj.title;
                    return map;
                  }, {});
                  break;
                case 'toggle':
                  inputField.type = 'boolean';
                  inputField.required = true;
                  inputField.default = customField.default_value === 1;
                  break;
                case 'date':
                  inputField.type = 'datetime';
                  break;
                case 'textarea':
                  inputField.type = 'text';
                  break;
                case 'text':
                default:
                  inputField.type = 'string';
                  break;
              }
              return inputField;
            }
            return null;
          });
        const priority = responses[0].json.data.fields.find(field => field.field_type === 'priority');
        if (priority && priority.options.on_newticket) {
          fields.push({
            key: 'priority',
            label: 'Priority',
            required: priority.required,
            dynamic: 'get_ticket_priorities.id.label'
          })
        }
        const category = responses[0].json.data.fields.find(field => field.field_type === 'category');
        if (category && category.options.on_newticket) {
          fields.push({
            key: 'category',
            label: 'Category',
            required: category.required,
            dynamic: 'get_ticket_categories.id.label'
          })
        }
        const product = responses[0].json.data.fields.find(field => field.field_type === 'product');
        if (product && product.options.on_newticket) {
          fields.push({
            key: 'product',
            label: 'Product',
            required: product.required,
            dynamic: 'get_ticket_products.id.label'
          })
        }
        const workflow = responses[0].json.data.fields.find(field => field.field_type === 'workflow');
        if (workflow && workflow.options.on_newticket) {
          fields.push({
            key: 'workflow',
            label: 'Workflow',
            required: workflow.required,
            dynamic: 'get_ticket_workflows.id.label'
          })
        }
        return fields;
      }
      return [];
  });
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
        dynamic: 'get_departments.id.title',
        altersDynamicFields: true
      },
      {
        key: 'agent',
        label: 'Agent',
        helpText: 'Agent assign to the ticket, you can use Id or email address.',
        type: 'string',
        required: false,
        dynamic: 'get_agents.id.name'
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
        type: 'text',
        required: false
      },
      {
        key: 'message__format',
        label: 'Format',
        type: 'string',
        required: false,
        choices: {text: "Text", html: "HTML"}
      },
      {
        key: 'message__person',
        label: 'Message Author',
        helpText: 'Can be an Id or email address.',
        type: 'string',
        required: false,
        dynamic: 'get_persons.id.name',
        search: 'find_person.id'
      },
      {
        key: 'message__is_note',
        label: 'Is Note',
        helpText: 'Create message as an agent note',
        type: 'boolean',
        required: false,
      },
      {
        key: 'person',
        label: 'Person',
        type: 'string',
        required: true,
        dynamic: 'get_persons.id.name',
        search: 'find_person.id'
      },
      {
        key: 'status',
        label: 'Status',
        type: 'string',
        required: false,
        dynamic: 'get_ticket_statuses.id.label'
      },
      {
        key: 'labels',
        label: 'Labels',
        helpText: 'Comma separated list of labels',
        type: 'string',
        required: false
      },
      departmentLayouts
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

    sample: {
      "id": 1,
      "ref": "ABCD-EFGH-IJKL",
      "auth": 0,
      "department": 1,
      "person": 1,
      "person_email": "email@example.com",
      "agent": 1,
      "organization": 1,
      "sent_to_address": [],
      "email_account_address": "",
      "creation_system": "web.agent.portal",
      "creation_system_option": "",
      "ticket_hash": "none",
      "status": "awaiting_user",
      "is_hold": false,
      "labels": [],
      "urgency": 1,
      "date_created": "2017-01-19T16:56:23+0000",
      "date_first_agent_assign": "2017-01-19T16:56:23+0000",
      "date_first_agent_reply": "2017-01-19T16:56:24+0000",
      "date_last_agent_reply": "2017-01-19T16:56:24+0000",
      "date_agent_waiting": "2017-01-19T16:56:23+0000",
      "date_status": "2017-01-19T16:56:24+0000",
      "total_user_waiting": 0,
      "total_to_first_reply": 1,
      "has_attachments": false,
      "subject": "Test ticket",
      "original_subject": "Test ticket",
      "count_agent_replies": 1,
      "waiting_times": [],
      "ticket_slas": [],
      "fields": [],
      "contextual_fields": [],
      "star": {},
      "count_user_replies": 0,
    },

    perform: createCreateticket
  }
};
