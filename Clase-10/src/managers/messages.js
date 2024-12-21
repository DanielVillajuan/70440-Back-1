import fs from 'node:fs'
import { v4 as uuidv4 } from 'uuid';
import __dirname from '../utils.js'

class MessagesManager{
    constructor(path){
        this.path = path
    }


    async getAll(){
        const response = await fs.promises.readFile(this.path,'utf-8')
        return JSON.parse(response)
    }

    async create(message){
        const messageBody = {
            id: uuidv4(),
            date: new Date().toLocaleString(),
            ...message
        }

        const messages = await this.getAll()

        messages.push(messageBody)
        await fs.promises.writeFile(this.path, JSON.stringify(messages));
        return messages;
    }

}

export const msg = new MessagesManager(__dirname + '/db/messages.json')


