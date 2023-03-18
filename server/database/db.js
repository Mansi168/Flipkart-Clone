import mongoose from "mongoose";


export const Connection = async (username,password) => {
    const URL = `mongodb://${username}:${password}@ac-rokgvdt-shard-00-00.mjzu3al.mongodb.net:27017,ac-rokgvdt-shard-00-01.mjzu3al.mongodb.net:27017,ac-rokgvdt-shard-00-02.mjzu3al.mongodb.net:27017/?ssl=true&replicaSet=atlas-e5axio-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
       console.log('database connected successfully');
    }catch(error){
        console.log('Error while connecting with database', error.message);

    }
}

export default Connection;