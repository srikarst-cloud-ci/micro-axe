import mongoose from "mongoose";

import { app } from "./app";

import { rabbitWrapper } from "./rabbit-wrapper";

import { OrgCreatedListener } from "./events/listeners/org-created-listener";

const start = async () => {
  try {
    await rabbitWrapper.connect("amqp://localhost");
    console.log("Connected to RabbitMq");
    new OrgCreatedListener(rabbitWrapper.client!).listen();

    await mongoose.connect(
      "mongodb+srv://srikarst:srikar10@cluster0.gopsx.mongodb.net/cxaxedb?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }

  app.listen(3002, () => {
    console.log("Listening on port 3002!!!!!!!!");
  });
};

start();
