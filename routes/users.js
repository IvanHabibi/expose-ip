var express = require('express');
var router = express.Router();
const axios = require('axios');
const FormData = require('form-data');

/* GET users listing. */
router.get('/',async function(req, res, next) {

  axios.post('http://104.198.194.160/api/laporan-aruskas', {
    startDate: '2022-09-20T00:08:05.934666',
    endDate: '2022-11-20T00:08:05.934666'
  }, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}).then(({data}) => console.log(data));




// try {
//   const form = new FormData();
//   form.append('startDate', '2022-09-20T00:08:05.934666');
//   form.append('endDate', "2022-11-20T00:08:05.934666");
//   console.log(form)
//   const response = await axios.post('http://104.198.194.160/api/laporan-aruskas', form);
//   console.log(response);
// } catch (error) {
//   console.error(error);
// }




  res.send("es");
});

module.exports = router;
