export default {
    MONGODB_URL:process.env.MONGOLAB_URL|| "mongodb://localhost/amazona",
    JWT_SECRET: process.env.JWT_SECRET || "something"
}
