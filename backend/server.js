require("dotenv").config();
const http = require("http");
const app = require("./index");
const server = http.createServer(app);
const path = require("path");

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.listen(process.env.SOCKET_PORT);

io.on("connection", (socket) => {
  console.log(`${socket.handshake.headers.referer} is connected`);
});

const swaggerUi = require("swagger-ui-express");

const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "EXPRESS API",
      description: "Swagger API Documentation",
    },
    servers: [
      {
        url: "/api",
      },
    ],
  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`],
};

const swaggerJsDoc = require("swagger-jsdoc");
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerJsDoc(swaggerSpec))
);

server.listen(process.env.PORT);
server.setTimeout(5000);
