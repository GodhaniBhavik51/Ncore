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
const headerRoutes = require("./routes/header.routes");
const footerRoutes = require("./routes/footer.routes");
const contantRoutes = require("./routes/contact.routes");

const app = express();
const PORT = process.env.PORT || 5000;

// DB connection
connectDatabase();

// Global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // optional
app.use(express.static("public"));               // optional
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/api/home", homeRoutes);
app.use("/api/header", headerRoutes);
app.use("/api/footer", footerRoutes);
app.use("/api/contact", contantRoutes);

// Swagger (BEFORE error middleware)
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Error handler (ALWAYS LAST)
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`🚀 Server started on PORT ${PORT}`);
});
