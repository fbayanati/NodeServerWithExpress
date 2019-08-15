import { express } from "express";

const productRoutes = require("./routes/products");

const app = express();

app.use("/call", productRoutes);

app.listen( 8080 );
