import { Router } from "express";
import { UserModel } from "../models/users.model.js";

const route = Router()

route.get('/',async (req, res) => {
	const query = req.query
	const opcion = {
		limit: query.limit || 10,
		page: query.page || 1,
		sort: { } 
	}

    const result = await UserModel.paginate({}, opcion)
	const response = {
		count: result.totalDocs,
		result: result.docs,
		currentPage: result.page,
		hasPrev: result.hasPrevPage,
		hasNext: result.hasNextPage,
		prev: `?page=${result.prevPage}&limit=${query.limit}`,
		next: `?page=${result.nextPage}&limit=${query.limit}`
	}
    res.json(response)
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
