import express from "express";
import cookieSession from "cookie-session";
import "express-async-errors";
import { json } from "body-parser";

import { errorHandler } from "@srikar-test/common";
import { currentUser } from "@srikar-test/common";
import { NotFoundError } from "@srikar-test/common";

import { MessageBroker } from "./rabbit";

const broker = new MessageBroker();
broker.getInstance().then((instance) => {
  instance.subscribe("test", (msg: any, ack: any) => {
    console.log("Message:", msg.content.toString());
    ack();
  });
});

const app = express();
app.set("trust proxy", true);

app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);
app.use(currentUser);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
