var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/shivam', function(req, res) {
  res.render("index");
});
router.post("/register",(req,res)=>{
  
})


module.exports = router;
