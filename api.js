// eslint-disable-next-line import/prefer-default-export
const awsXRay = require('aws-xray-sdk');
// const AWS = awsXRay.captureAWS(require('aws-sdk'));

function getData(id) {
  // return new Promise((resolve, reject) => {
  //   const params = {
  //     TableName : tableName,
  //     Key: {
  //       _id: id
  //     }
  //   }
  //   Dynamo.get(params, (err, data) => {
  //     if (err) {
  //       reject("Error occured", err);
  //     }
  //     resolve(data);
  //   })
  // })
}


module.exports.get = (event, context, callback) => {
  getData(event.pathParameters.id).then((data) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        result: data,
      })
    };

    callback(null, response);

  }).catch((err) => {
    const response = {
      statusCode: 500,
      body: JSON.stringify({
        error: err,
      })
    };

    callback(null, response);
  });
};

// module.exports.post = (event, context, callback) => {
//   createData().then((data) => {
//     const response = {
//       statusCode: 200,
//       body: JSON.stringify({
//         result: data,
//       })
//     };

//     callback(null, response);

//   }).catch((err) => {
//     const response = {
//       statusCode: 500,
//       body: JSON.stringify({
//         error: err,
//       })
//     };

//     callback(null, response);
//   });
// };