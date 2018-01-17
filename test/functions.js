require('should');

const convertBodyData = require('../functions/convert_body_data');
const formatLabels = require('../functions/format_labels');
const formatCommaSeparated = require('../functions/format_comma_separated');

describe('convertBodyData', () => {
  it('should convert body data', (done) => {
    const object = {"person":"521","subject":"Ticket subject","message__message":"Pika? Pika!!","message__person":"520"};

    convertBodyData(object).should.eql({"person":"521","subject":"Ticket subject","message":{"message":"Pika? Pika!!","person":"520"}});
    done();
  });

  it('should convert body data deeply', (done) => {
    const object = {"person":"521","contact_data__phone__number":"0123456789","contact_data__address__city":"London","contact_data__address__address":"Fulham High Street"};

    convertBodyData(object).should.eql({"person":"521","contact_data":{"phone":{"number":"0123456789"},"address":{"city":"London","address":"Fulham High Street"}}});
    done();
  });
});

describe('formatLabels', () => {
  it('should convert labels', (done) => {
    const object = {"person":"521","subject":"Pika pika","labels":"label1, label2"};

    formatLabels(object).should.eql({"person":"521","subject":"Pika pika","labels":["label1","label2"]});
    done();
  });
  it('shouldn\'t fail with no labels', (done) => {
    const object = {"person":"521","subject":"Pika pika"};

    formatLabels(object).should.eql({"person":"521","subject":"Pika pika","labels":[]});
    done();
  });
});

describe('formatCommaSeparated', () => {
  it('should convert comma separated fields to array', (done) => {
    const object = {"person":"521","subject":"Pika pika","labels":"label1, label2"};

    formatCommaSeparated(object, 'labels').should.eql({"person":"521","subject":"Pika pika","labels":["label1","label2"]});
    done();
  });
  it('shouldn\'t fail with no fields', (done) => {
    const object = {"person":"521","subject":"Pika pika"};

    formatCommaSeparated(object, 'labels').should.eql({"person":"521","subject":"Pika pika"});
    done();
  });
});