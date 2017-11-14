const authentication = require('./authentication');

const TesttriggerTrigger = require('./triggers/test_trigger');
const GetdepartmentsTrigger = require('./triggers/get_departments');
const NewticketpollingTrigger = require('./triggers/new_ticket_polling');
const GetstarsTrigger = require('./triggers/get_stars');
const GetticketfiltersTrigger = require('./triggers/get_ticket_filters');
const NewticketwebhookTrigger = require('./triggers/new_ticket_webhook');
const GetagentsTrigger = require('./triggers/get_agents');
const GetpersonsTrigger = require('./triggers/get_persons');
const GetorganizationsTrigger = require('./triggers/get_organizations');
const GetticketstatusesTrigger = require('./triggers/get_ticket_statuses');
const NewticketreplyTrigger = require('./triggers/new_ticket_reply');
const NewpersonTrigger = require('./triggers/new_person');
const NeworganizationTrigger = require('./triggers/new_organization');
const GetticketsTrigger = require('./triggers/get_tickets');
const FindpersonSearch = require('./searches/find_person');
const FindorganizationSearch = require('./searches/find_organization');
const FindticketSearch = require('./searches/find_ticket');
const CreatepersonCreate = require('./creates/create_person');
const CreateticketCreate = require('./creates/create_ticket');
const AddnotetoticketCreate = require('./creates/add_note_to_ticket');
const CreateorganizationCreate = require('./creates/create_organization');
const UpdateorganizationCreate = require('./creates/update_organization');
const UpdateticketCreate = require('./creates/update_ticket');

const addApiKeyToHeader = (request, z, bundle) => {
  request.headers.Authorization = `key ${bundle.authData.apiKey}`;
  return request;
};

const App = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication: authentication,

  beforeRequest: [
    addApiKeyToHeader,
  ],

  resources: {
  },

  triggers: {
    [TesttriggerTrigger.key]: TesttriggerTrigger,
    [GetdepartmentsTrigger.key]: GetdepartmentsTrigger,
    [NewticketpollingTrigger.key]: NewticketpollingTrigger,
    [GetstarsTrigger.key]: GetstarsTrigger,
    [GetticketfiltersTrigger.key]: GetticketfiltersTrigger,
    [NewticketwebhookTrigger.key]: NewticketwebhookTrigger,
    [GetagentsTrigger.key]: GetagentsTrigger,
    [GetpersonsTrigger.key]: GetpersonsTrigger,
    [GetorganizationsTrigger.key]: GetorganizationsTrigger,
    [GetticketstatusesTrigger.key]: GetticketstatusesTrigger,
    [NewticketreplyTrigger.key]: NewticketreplyTrigger,
    [NewpersonTrigger.key]: NewpersonTrigger,
    [NeworganizationTrigger.key]: NeworganizationTrigger,
    [GetticketsTrigger.key]: GetticketsTrigger
  },

  searches: {
    [FindpersonSearch.key]: FindpersonSearch,
    [FindorganizationSearch.key]: FindorganizationSearch,
    [FindticketSearch.key]: FindticketSearch
  },

  creates: {
    [CreatepersonCreate.key]: CreatepersonCreate,
    [CreateticketCreate.key]: CreateticketCreate,
    [AddnotetoticketCreate.key]: AddnotetoticketCreate,
    [CreateorganizationCreate.key]: CreateorganizationCreate,
    [UpdateorganizationCreate.key]: UpdateorganizationCreate,
    [UpdateticketCreate.key]: UpdateticketCreate
  },

  searchOrCreates: {
    [FindpersonSearch.key]: {
      'key': FindpersonSearch.key,
      'display': {
        label: 'Find or Create Person',
        description: 'Find or Create a Person'
      },
      'search': FindpersonSearch.key,
      'create': CreatepersonCreate.key
    },
    [FindorganizationSearch.key]: {
      'key': FindorganizationSearch.key,
      'display': {
        label: 'Find or Create Organization',
        description: 'Find or Create an Organization'
      },
      'search': FindorganizationSearch.key,
      'create': CreateorganizationCreate.key
    },
    [FindticketSearch.key]: {
      'key': FindticketSearch.key,
      'display': {
        label: 'Find or Create Ticket',
        description: 'Find or Create a Ticket'
      },
      'search': FindticketSearch.key,
      'create': CreateticketCreate.key
    }
  }
};

module.exports = App;
