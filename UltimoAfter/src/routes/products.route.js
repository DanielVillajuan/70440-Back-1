import { Router } from "express";
import { __dirname, uploader } from "../utils.js";
import { productModel } from "../Dao/models/Product.model.js";

const router = Router();

router.post("/", uploader.single("file"), async (req, res) => {
  if (!req.file) return res.status(402).json({ message: "Error en algun campo" });
	// valido todos los demas campos.

  const prod = req.body;
  const result = await productModel.create({
    ...prod,
    thumbnail: req.file.path.split('public')[1],
  });
  
  res.status(201).json({ payload: result });
});

router.get("/", async (req, res) => {
  const { limit = 10, page = 1, sort = '', ...query } = req.query;
  const sortManager = {
    'asc': 1,
    'desc': -1
  }

  const products = await productModel.paginate(
    { ...query },
    { 
      limit,
      page,
      ...(sort && { sort: { price: sortManager[sort]} }),
      customLabels: { docs: 'payload' }
    })

  res.json({
    ...products,
    status: 'success'
  });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const productFinded = await productModel.findById(id);

  const status = productFinded ? 200 : 404;

  res.status(status).json({ payload: productFinded });
});

router.put("/:id", uploader.single("file"), async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  const product = body;
  const productUpdated = await productModel.findByIdAndUpdate(id, {
    ...product,
    ...(req?.file?.path && { thumbnail: req.file.path }),
  }, { new: true });

  res.status(201).json({ message: "Updated successfully", payload: productUpdated });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const isDelete = await productModel.findByIdAndDelete(id);

  res.status(isDelete ? 200 : 400).json({ payload: isDelete });
});

export default router;
