const globalConfig = {
  server: {
    BASEURL: process.env.BASE_URL || "http://localhost:3000",
  },
  database: {
    connectionURL: process.env.DB_CONNECTION || "",
  },
};

export default globalConfig;
