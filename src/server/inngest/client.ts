import {EventSchemas, Inngest} from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest(
  {
    id: "my-app",
    schemas: new EventSchemas().fromRecord<Events>()
  },
);