import { serve } from "inngest/next";
import {inngest} from "@/server/inngest/client";
import {quoteCreationNotifications} from "@/server/inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    quoteCreationNotifications
  ],
});