import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonButton,
  IonListHeader,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';
import './Salaries.scss';
import { SalaryList } from '../../components/SalaryList';

export type Salary = {
  experience: number;
  position: string;
  technologies: string[];
  role: string;
  employmentType: string;
  companySize: string;
  grossSalary: number;
  location: string;
  fullRemote: boolean;
  gender: string;
  weeklyHours: number;
  id: number;
};

const Salaries: React.FC = () => {
  const salaries: Salary[] = [
    {
      experience: 4,
      position: 'Front End Developer',
      technologies: ['Javascript', 'Ionic'],
      role: 'Tech Lead',
      employmentType: 'Internal',
      companySize: 'big',
      grossSalary: 40000,
      location: 'Barcelona',
      fullRemote: false,
      gender: 'Female',
      weeklyHours: 40,
      id: 1,
    },
    {
      experience: 4,
      position: 'Front End Developer',
      technologies: ['Javascript', 'React'],
      role: 'Tech Lead',
      employmentType: 'Internal',
      companySize: 'big',
      grossSalary: 60000,
      location: 'Girona',
      fullRemote: false,
      gender: 'Female',
      weeklyHours: 36,
      id: 2,
    },
    {
      experience: 4,
      position: 'Front End Developer',
      technologies: ['Javascript', 'Angular'],
      role: 'Architect',
      employmentType: 'Contractor',
      companySize: 'small',
      grossSalary: 50000,
      location: 'Barcelona',
      fullRemote: false,
      gender: 'Male',
      weeklyHours: 40,
      id: 3,
    },
  ];

  return (
    <IonPage>
      <IonHeader className="ion-hide-sm-up" mode="md">
        <IonToolbar>
          <IonTitle>Salaries</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="page-header" fixed>
          <IonCard className="ion-hide-sm-down">
            <IonCardHeader>
              <IonCardTitle>Salaries</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Here are the last salary entries ordered by the date they were
              introduced.
            </IonCardContent>
          </IonCard>
          <IonButton
            className="ion-margin-horizontal ion-margin-top"
            data-cy="add-salary-button"
            routerLink={`/salaries/new-salary`}
            expand="block"
          >
            Add New Salary
          </IonButton>
          <IonListHeader color="none" lines="none">
            Last entries
          </IonListHeader>
          <SalaryList salaries={salaries} />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Salaries;
