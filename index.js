var car = require('car');

module.exports = function(app){
	app.get('/car/is/:carplate',function(req,res){
		car.is(req.params.carplate,function(error,data){
			res.status(error ? 500 : 200).json(error ? {message: error.message || 'Unknown error'} : data)
		})
	})	
}