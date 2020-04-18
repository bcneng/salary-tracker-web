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
};

export const SalaryList: React.FC<Props> = ({ salaries }) => {
  return (
    <>
      {salaries.map((salary, index) => (
        <IonCard className="animated-car" key={index}>
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
