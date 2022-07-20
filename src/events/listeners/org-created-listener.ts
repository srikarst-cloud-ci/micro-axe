import { Subjects, Listener, OrgCreatedEvent } from "@srikar-test/micro-common";
import { Organization } from "../../models/organization";

export class OrgCreatedListener extends Listener<OrgCreatedEvent> {
  subject: Subjects.OrgCreated = Subjects.OrgCreated;

  async onMessage(data: any, msg: any) {
    const organization = Organization.build(data);
    await organization.save();
  }
}
