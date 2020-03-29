import React from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from "@ionic/react";
import "./SalaryList.scss";

export type Salary = {
  company: string;
  salary: number;
  position: string;
};

type Props = {
  salaries: Salary[];
  onSalaryClick: (salary: Salary) => void;
};

export const SalaryList: React.FC<Props> = ({ salaries, onSalaryClick }) => {
  return (
    <>
      {salaries.map((salary, index) => (
        <IonCard
          className="animated-car"
          key={index}
          href=""
          routerLink={`/home/${salary.company}`}
        >
          <IonCardHeader>
            <IonCardTitle>{salary.company} </IonCardTitle></IonCardHeader>
          <IonCardContent>
            <IonCardSubtitle>{salary.position}</IonCardSubtitle>
            {salary.salary} €
          </IonCardContent>
        </IonCard>
      ))}
    </>
  );
};
