import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCardTitle,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { useParams } from 'react-router-dom';

import './SalaryDetailPage.scss';
import { arrowBack } from 'ionicons/icons';

const SalaryDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <IonPage>
      <IonHeader className="ion-hide-sm-up" mode="md">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/salaries" />
          </IonButtons>
          <IonTitle>Salary Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="page-header" fixed>
          <IonButton
            class="ion-hide-sm-down"
            fill="clear"
            routerLink="/salaries"
          >
            <IonIcon class="ion-margin-end" icon={arrowBack}></IonIcon> Back to
            Salaries
          </IonButton>
          <IonCard className="ion-hide-sm-down">
            <IonCardHeader>
              <IonCardTitle>Detail of the salary {id}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>Salary comparison </IonCardContent>
          </IonCard>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SalaryDetailPage;
