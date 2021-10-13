// Environment Variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = {
  database: process.env.DB_DATABASE || "development",
  username: "admin",
  password: "password",
  dialect: "mysql",
  options: {
    dialect:"mysql",
    host: "avicolapp.cmu2tr1w5xst.us-east-1.rds.amazonaws.com",
    port: "3306",
    define: {
      underscored: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  }
}