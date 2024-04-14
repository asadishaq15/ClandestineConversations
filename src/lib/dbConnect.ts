import mongoose from 'mongoose';

type ConnectionObject ={
    isConnected?: number
}

const connection : ConnectionObject = {}

async function dbConnect(): Promise<void> {

    //check if there is already a connection?
        if (connection.isConnected){
            console.log("Already connected to database")
            return
        }
    //connect the database
        try {
           const db = await mongoose.connect(process.env.MONGODBURI || '', {})
          connection.isConnected = db.connections[0].readyState 

          console.log("DB connectes successfully")
        } catch (error) {
            process.exit(1)
            console.log("Database connection failed")
        }
}

export default dbConnect;