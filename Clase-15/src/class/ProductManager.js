export class ProductManager {
    constructor(model){
        this.model = model
    }

    async add(product){
        try{
            const result = await this.model.create(product)
            return result
        } catch (e){
            return null
        }
    }

    async edit(product, id){
        try{
            const result = await this.model.findByIdAndUpdate(id, product, { new: true })
            return result
        } catch (e){
            return null
        }
    }
    async editByQuery(product, query){
        try{
            const result = await this.model.findAndUpdate(query, product, { new: true })
            return result
        } catch (e){
            return null
        }
    }

    async findById(id){
        try{
            const result = await this.model.findOne(id)
            return result
        } catch (e){
            return null
        }
    }

    async findByQuery(query = {}){
        try{
            const result = await this.model.find(query)
            return result
        } catch (e){
            return null
        }
    }

    async deleteById(id){
        try{
            const result = await this.model.deleteById(id)
            return result
        } catch (e){
            return null
        }
    }

    async deleteByQuery(query){
        try{
            const result = await this.model.delete(query)
            return result
        } catch (e){
            return null
        }
    }
}
