require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const connectDatabase = require("./config/db");
const errorMiddleware = require("./middlewares/error.middleware");
const homeRoutes = require("./routes/home.routes");
const contantRoutes = require("./routes/contact.routes");
const layoutRoutes =  require("./routes/layout.routes");
const aboutRoutes = require("./routes/about.routes");
const productRoutes = require("./routes/product.routes");

const app = express();
const PORT = process.env.PORT || 5000;

// DB connection
connectDatabase();

// Global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(express.static("public"));          
app.use(cors({
  origin: [
    "https://myapp.com",
    "https://www.myapp.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/api/home", homeRoutes);
app.use("/api/layout", layoutRoutes);
app.use("/api/contact", contantRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api", productRoutes);

// Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Error handler
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`🚀 Server started on PORT ${PORT}`);
});
