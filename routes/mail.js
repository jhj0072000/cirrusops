var express = require('express');
var https = require('https');
var router = express.Router();

// var newUser = JSON.stringify({
//     'email_address': 'coolio@gmail.com',
//     'status': 'subscribed',
//     'merge_fields': {
//         'FNAME': 'Jake',
//         'LNAME': 'Jung'
//     }
// });

// var options = {
//     host: 'us8.api.mailchimp.com',
//     path: '/3.0/lists/20dd5d8d91/members',
//     method: 'POST',
//     headers: {
//         'Authorization': 'cirrusops020a21baf3d3985248dfbd4802c35a85-us8',
//         'Content-Type': 'application/json',
//         'Content-Length': newUser.length
//     }
// }

// var request = https.request(options, function(hres) {
//     console.log('STATUS CODE: ' + hres.statusCode);
//     console.log('HEADERS: ' + JSON.stringify(hres.headers));
//     hres.setEncoding('utf8');

//     hres.on('data', function (chunk) {
//             console.log('===========CHUNK===============')
//             console.log(chunk);
//             res.send(chunk);
//     });

//     hres.on('end', function(res) {
//             console.log('=========RESPONSE END===============');
//     });

//     hres.on('error', function (e) {
//             console.log('ERROR: ' + e.message);
//     }); 
// });

// // var hreq = https.request(options, function (hres) {  
// //     console.log('STATUS CODE: ' + hres.statusCode);
// //     console.log('HEADERS: ' + JSON.stringify(hres.headers));
// //     hres.setEncoding('utf8');

// //     hres.on('data', function (chunk) {
// //             console.log('\n\n===========CHUNK===============')
// //             console.log(chunk);
// //             res.send(chunk);
// //     });

// //     hres.on('end', function(res) {
// //             console.log('\n\n=========RESPONSE END===============');
// //     });

// //     hres.on('error', function (e) {
// //             console.log('ERROR: ' + e.message);
// //     }); 
// // });

// request.write(newUser);
// request.end();


module.exports = router;
