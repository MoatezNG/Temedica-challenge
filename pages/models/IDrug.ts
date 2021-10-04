import { GraphTypeName } from "pages/types/utils";

export interface IDrug extends GraphTypeName {
  id: string;
  diseases: string[];
  name: string;
  description: string;
  released: string;
}
