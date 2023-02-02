const router = require('express').Router();
const path = require('path');

const authMiddleware = require('../middleware/authMiddleware');

console.log();

router.get('/',(req,res)=>{
	console.log('inside routes')
	res.sendFile(path.resolve('./views/index.html'));
})

module.exports = router;
