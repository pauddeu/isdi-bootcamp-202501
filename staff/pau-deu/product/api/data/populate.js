import 'dotenv/config'
 import { data, User, Post } from '../data/index.js'
 import bcrypt from 'bcryptjs'
 
 const { MONGO_URL, MONGO_DB } = process.env
 
 
 data.connect(MONGO_URL, MONGO_DB)
     .then(() => {
         return Promise.all([
             User.deleteMany({}),
             Post.deleteMany({})
         ])
             .then(() => bcrypt.hash('123123123', 10))
             .then(hash => {
                 return User.insertMany([
                    { name: 'Pau Deu', email: 'pau@deu.com', username: 'paudeu', password: hash },
                     { name: 'Marti Deu', email: 'marti@deu.com', username: 'martideu', password: hash },
                 ])
             })
             .then(([pau,marti]) => {
                return Post.insertMany([
                    { author: pau.id, image: 'https://media.giphy.com/media/R2FYBXnm2XNOlTLr9z/giphy.gif?cid=790b76119wup8z6xesmrnuzqi83jkg1rr1d2l171zt06byqq&ep=v1_gifs_search&rid=giphy.gif&ct=g', text: 'run boy run...', likes: [marti.id], createdAt: new Date(2024, 11, 1) },
                     { author: marti.id, image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2p2OW1hdXRkcXBkaHhoYjJmOHljZmhwM2VheTJ3NjZ6cWNrYXBzdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XcXAAXBylbyYqJZam3/giphy.gif', text: 'Benfica!', createdAt: new Date(2023, 9, 31) },
                 ])
             })
     })
     .finally(() => data.disconnect())