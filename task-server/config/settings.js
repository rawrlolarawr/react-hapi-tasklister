require("dotenv").config({ silent: true })

module.exports = {
  port: process.env.PORT || 3001,
  env: process.env.NODE_ENV || "development",

  // Environment-dependent settings
  development: {
    db: {
      dialect: "sqlite",
      storage: "db/taskdb-dev"
    }
  },
  production: {
    db: {
      dialect: "sqlite",
      storage: "db/taskdb-prod"
    }
  }
}