import { makeSchema } from "@nexus/schema";
import * as QueryTypes from "./graphql";

export const schema = makeSchema({
  types: [QueryTypes],
});
