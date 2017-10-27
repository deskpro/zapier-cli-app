require('should');

const convertBodyData = require('../functions/convert_body_data');

describe('Triggers', () => {
  it('should convert body data', (done) => {
    const object = {"person":"521","subject":"Pika pika","message__message":"Pika? Pika!!","message__person":"520"};

    convertBodyData(object).should.eql({"person":"521","subject":"Pika pika","message":{"message":"Pika? Pika!!","person":"520"}});
    done();
  });
});