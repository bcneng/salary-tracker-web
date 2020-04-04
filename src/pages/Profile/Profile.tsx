import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonAvatar,
  IonLabel,
  IonItem,
  IonToggle,
  IonBadge,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonList,
  IonListHeader,
  IonIcon,
} from '@ionic/react';
import { moon, notificationsOutline } from 'ionicons/icons';

import './Profile.css';

const Profile: React.FC = () => {
  const toggleDarkMode = (event: any) => {
    document.body.classList.toggle('dark', event.detail.checked);
  };
  return (
    <IonPage>
      <IonHeader className="ion-hide-sm-up" mode="md">
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding-top profile">
        <IonGrid className="page-header" fixed>
          <IonCard>
            <IonCardContent>
              <IonAvatar class="ion-margin-bottom">
                <img
                  alt="avatar "
                  src="https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png"
                />
              </IonAvatar>
              <IonCardSubtitle>Front End Developer</IonCardSubtitle>
              <IonCardTitle>Carlos Perez</IonCardTitle>
            </IonCardContent>
          </IonCard>
          <IonList>
            <IonItem lines={'none'} mode="ios">
              <IonIcon slot="start" icon={moon}></IonIcon>
              <IonLabel>Activar Dark Mode</IonLabel>
              <IonToggle
                onIonChange={(e) => toggleDarkMode(e)}
                slot="end"
              ></IonToggle>
            </IonItem>
            <IonItem lines={'none'} mode="ios">
              <IonIcon slot="start" icon={notificationsOutline}></IonIcon>
              <IonLabel>Notificationes </IonLabel>
              <IonToggle slot="end" />
            </IonItem>
            <IonListHeader className="ion-margin-bottom">
              Informacion personal
            </IonListHeader>
            <IonItem>
              <IonLabel>Salario Anual</IonLabel>
              <IonBadge color="secondary" slot="end">
                30.000 €
              </IonBadge>
            </IonItem>
            <IonItem>
              <IonLabel>Compañia</IonLabel>
              <IonBadge color="secondary" slot="end">
                Empresa X
              </IonBadge>
            </IonItem>
            <IonItem>
              <IonLabel>Años de experiencia</IonLabel>
              <IonBadge color="secondary" slot="end">
                5
              </IonBadge>
            </IonItem>
            <IonListHeader className="ion-margin-vertical">
              Salarios
            </IonListHeader>
            <IonItem>
              <IonLabel>Promedio en Barcelona</IonLabel>
              <IonBadge slot="end">45.000 €</IonBadge>
            </IonItem>
            <IonItem>
              <IonLabel>Promedio en tu Compañia</IonLabel>
              <IonBadge color="warning" slot="end">
                35.000 €
              </IonBadge>
            </IonItem>
            <IonItem>
              <IonLabel>Promedio en tu Posicion</IonLabel>
              <IonBadge color="danger" slot="end">
                40.000 €
              </IonBadge>
            </IonItem>
          </IonList>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
