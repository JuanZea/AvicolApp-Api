// Environment Variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = {
  database: process.env.DB_DATABASE || "development",
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  dialect: process.env.DB_CONNECTION || "mysql",
  options: {
    dialect: process.env.DB_CONNECTION || "mysql",
    host: process.env.DB_HOST || "127.0.0.1",
    define: {
      underscored: true,
      timestamps: true,
    }
  }
}