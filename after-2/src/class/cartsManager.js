import { promises } from "node:dns";
import fs from "node:fs";
import ProductsManager from '../class/productManager.js'
import { __dirname } from '../utils.js'

const productManager = new ProductsManager(__dirname + '/bbdd/products.json');

class CartsManager {
  constructor(path) {
    this.path = path;

    this.cart = {};
    this.cartList = [];
    this.productsListToCart = [];
  }

  // Funciones para Carts
  async getAllCarts() {
    const list = await fs.promises.readFile(this.path, "utf-8");
    this.cartList = [...JSON.parse(list).carts];
    return [...this.cartList];
  }
  async addCart() {
    const newId = await productManager.setNewId();
    await this.getAllCarts();
    const newCart = { id: newId, products: [] };
    this.cartList.push(newCart);
    await fs.promises.writeFile(
      this.path,
      JSON.stringify({ carts: this.cartList })
    );
    return newId
  }
  async getCart(id) {
    await this.getAllCarts();
    if (this.cartList.some((obj) => obj.id == id)) {
      this.cart = this.cartList.find((obj) => obj.id == id);
      console.log("Producto Encontrado");
      return this.cart;
    } else {
      console.log("ID no encontrado");
      return null;
    }
  }
  async addProductToCart(cid, pid) {
    const productsList = await productManager.getAllProducts();
    const cartsList = await this.getAllCarts();
    if (productsList.some((obj) => obj.id == pid)) {
      if (cartsList.some((obj) => obj.id == cid)) {
        const prod = productsList.find( obj  => obj.id == pid);
        const i = cartsList.findIndex( obj => obj.id == cid);
        if (cartsList[i].products.some( obj => obj.id == prod.id)) {
            const i2 = cartsList[i].products.findIndex( obj => obj.id == pid);
            cartsList[i].products[i2].cuantity ++
        } else {
            cartsList[i].products.push({"id":prod.id, "cuantity":1});
        }
        this.cartList = cartsList
        await fs.promises.writeFile(this.path,JSON.stringify({ carts: this.cartList })
        );
      } else {
        console.log("No Existe el ID Carrito");
      }
    } else {
      console.log("No Existe el ID producto");
    }
  }

}

export default CartsManager;
