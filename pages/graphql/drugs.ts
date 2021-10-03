import { gql } from "@apollo/client";

export const GET_FILRED_DRUGS = gql`
  query DrugQuery($keyword: String!) {
    data(keyword: $keyword) {
      id
      diseases
      name
      description
      released
    }
  }
`;
