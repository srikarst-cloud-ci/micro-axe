import { Subjects, Listener, OrgCreatedEvent } from "@srikar-test/common";
import { Organization } from "../../models/organization";

export class OrgCreatedListener extends Listener<OrgCreatedEvent> {
  subject: Subjects.OrgCreated = Subjects.OrgCreated;

  async onMessage(msg: any) {
    console.log("msg", msg);
    // const order = Organization.build({
    //   id: data.id,
    //   price: data.ticket.price,
    //   status: data.status,
    //   userId: data.userId,
    //   version: data.version,
    // });
    // await order.save();

    // msg.ack();
  }
}
