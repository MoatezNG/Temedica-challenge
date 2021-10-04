import React from "react";
import { IDrug } from "pages/models/IDrug";
import { useQuery } from "@apollo/client";
import { GraphQuery } from "pages/types/utils";
import { GET_FILRED_DRUGS } from "pages/graphql/drugs";
import DrugCard from "pages/components/DrugCard";
import styles from "./DrugsList.module.css";

interface DrugsListProps {
  debouncedSearchTerm: string;
}
const DrugsList = ({ debouncedSearchTerm }: DrugsListProps) => {
  const {
    data: { data } = {},
    loading,
    error,
  } = useQuery<GraphQuery<IDrug>>(GET_FILRED_DRUGS, {
    variables: { keyword: debouncedSearchTerm },
  });
  if (error) return <div className={styles.listContainer}>{error.message}</div>;
  if (loading) return <div className={styles.listContainer}>loading...</div>;
  return (
    <div className={styles.listContainer}>
      {!!data.length && (
        <div>
          <div className={styles.resultsText}>{`showing ${data.length} results`}</div>
          <div>
            {data.map((drug) => (
              <DrugCard drug={drug} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DrugsList;
