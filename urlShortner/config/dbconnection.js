const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "Enter Database Connection Link Here";

const
    client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

async function db() {
    try {
        const lastConnection = await client.connect();
        console.log("Connected to MongoDB Atlas");
        const databse = await client.db("utlshoter");
        const collection = databse.collection("DataShot");
        return collection;

    }
    catch (e) {
        console.log("errrrrrrrrrrr.....", e);
    }
}


module.exports = { db };
