const {Schema, model} = require('mongoose')

const FlightSchema = new Schema({

	airline:{type:String},
	flightNo:{type:String},
	departure:{type:String},
	arrival:{type:String},
	departureTime:Date,
	arrivalTime:Date,
	seats:Number,
	price:Number
})

const FlightModel = model("flight",FlightSchema)
module.exports = FlightModel