import { Server } from "http";
import app from "./app";
import env from "./config/env";

let server: Server;

const bootstrap = async () => {
  try {
    server = app.listen(env.port, () => {
      console.log(`Server is running on port ${env.port}`);
    });
  } catch (error) {
    console.log("Error starting server");
  }
};

(async () => {
  await bootstrap();
})();

//unhandled promise rejection
//unhandled exception
//sigterm


process.on("unhandledRejection", (err)=>{
  console.log("Unhandled Rejection Detected")
  if(server){
    server.close(()=>{
      process.exit(1)
    })
  }
  process.exit(1);
})

process.on("uncaughtException", (err)=>{
  console.log("Unhandled UncaughtException Detected")
  if(server){
    server.close(()=>{
      process.exit(1);
    })
  }
  process.exit(1);
})

process.on("SIGTERM", (err)=>{
  console.log("Sigterm Signal - server shutting down", err)
  if(server){
    server.close(()=>{
      process.exit(0)
    })
  }
  process.exit(1)
})

//exit(1) = Error
//exit(0) = success
