import { objectType, queryField, stringArg } from "@nexus/schema";
import data from "data/dataset.json";
import fuzzyRegex from "src/helpers/fuzzyRegex";

export const Drug = objectType({
  name: "Drug",
  definition(t) {
    t.string("id");
    t.list.string("diseases");
    t.string("description");
    t.string("name");
    t.string("released");
  },
});

export const DrugQuery = queryField((t) => {
  t.list.field("data", {
    args: {
      keyword: stringArg({ nullable: true }),
    },
    type: "Drug",
    resolve: (_, args) => {
      const { keyword } = args;
      const regexName = new RegExp(fuzzyRegex(keyword || ""), "gi");
      const regexDiseases = new RegExp(fuzzyRegex(keyword || ""), "gi");
      const filtredDrugs = data.drugs
        .filter(
          ({ name, diseases }) => name.match(regexName) || diseases.join(" ").match(regexDiseases)
        )
        .map((drug) => ({ ...drug, released: drug.released.split("-").reverse().join("-") }));
      return keyword ? filtredDrugs : [];
    },
  });
});
