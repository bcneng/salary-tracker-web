import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCardHeader,
  IonCard,
  IonCardContent,
  IonCardTitle,
} from '@ionic/react';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-hide-sm-up" mode="md">
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="page-header" fixed>
          <IonCard className="ion-hide-sm-down">
            <IonCardHeader>
              <IonCardTitle>About</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>Information about the Website</IonCardContent>
          </IonCard>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default About;
