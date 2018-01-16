require('should');

const convertBodyData = require('../functions/convert_body_data');
const formatLabels = require('../functions/format_labels');

describe('Triggers', () => {
  it('should convert body data', (done) => {
    const object = {"person":"521","subject":"Pika pika","message__message":"Pika? Pika!!","message__person":"520"};

    convertBodyData(object).should.eql({"person":"521","subject":"Pika pika","message":{"message":"Pika? Pika!!","person":"520"}});
    done();
  });
});

describe('Actions', () => {
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