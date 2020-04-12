import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/react';
import './SalaryList.scss';
import { Salary } from './../pages/Salaries/Salaries';

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
          routerLink={`/salaries/${salary.id}`}
        >
          <IonCardHeader>
            <IonCardTitle>{salary.role} </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonCardSubtitle>{salary.position}</IonCardSubtitle>
            {salary.grossSalary} €
          </IonCardContent>
        </IonCard>
      ))}
    </>
  );
};
