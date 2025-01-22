import fs from 'fs'
import { v4 as uuidv4 } from 'uuid';

export class Product {
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.status = true;
    }
}

export class ProductManager {
    constructor(path){
        this.id = 1;
        this.products = [];
        this.path = path
    }

    async addProduct(product){
        await this.getProducts()
        const isCodeDuplicate = this.products.some(prod => prod.code === product.code)
        const hasInvalidateProperty = Object.values(product).some(property => !property)

        if(isCodeDuplicate) return console.log("Code Duplicate")
        if(hasInvalidateProperty) return console.log("Invalid or incomplete information")

        this.products.push({ ...product, id: uuidv4() })
       
        await fs.promises.writeFile(this.path, JSON.stringify({ data: this.products }))
    }

    async getProducts(){
        const response = await fs.promises.readFile(this.path, 'utf-8')
        this.products = [...JSON.parse(response).data]
        return [...this.products]
    }

    async getProductById(id){
        const products = await this.getProducts();
        const productFinded = products.find(prod => prod.id === id);

        return productFinded || console.log('Not found')         
    }

    async updateProduct(id, payload){
        this.products = await this.getProducts()
        const productsUpdated = this.products.map(prod => {
            if(prod.id !== id) return prod
            
            return {
                ...prod,
                ...payload,
                id: prod.id
            }
        });

        this.products = [...productsUpdated]
        await fs.promises.writeFile(this.path,JSON.stringify({ data: this.products }))
    }

    async deleteProduct(id){
        this.products = this.products.filter(prod => prod.id !== id)
        await fs.promises.writeFile(this.path, JSON.stringify({ data: this.products }))
    }
}