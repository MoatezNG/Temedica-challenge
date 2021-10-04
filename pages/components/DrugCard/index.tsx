import { IDrug } from "pages/models/IDrug";
import React from "react";
import styles from "./DrugCard.module.css";

interface IDrugCardProps {
  drug: IDrug;
}

const DrugCard = ({ drug }: IDrugCardProps) => {
  const { description, name, diseases, released } = drug;
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.drugTitle}>{name}</div>
        <div>{released}</div>
      </div>

      <div>{diseases.join(" , ")}</div>
      <div className={styles.descriptionContainer}>{description}</div>
    </div>
  );
};

export default DrugCard;
