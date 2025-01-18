import { Router } from "express";
import { UserModel } from "../models/users.model.js";

const route = Router()

route.get('/',async (req, res) => {
    const result = await UserModel.find({first_name: 'Daniel'}).explain('executionStats')
    console.log(result)
    res.json({mensaje: 'Usuarios', result})
})

export default route







/*

//Contexto: Schema de estudiante de un curso en específico (grade refiere a la calificación de dicho curso)
{
	first_name:String,
	last_name:String,
	email:String,
	telephone:String,
	age:Number,
	grade:Number,
	gender:String,
	address:String
}

//Contexto: Schema de ticket de compra generado desde un ecommerce
{
	buyer_id : ObjectId,
	total_ammount:Number,
	products:Array,
	destination_address:String,
	destination_postal_code:String,
	comments:String,
}





*/
