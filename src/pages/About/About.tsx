import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonGrid,
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
          <IonCard>
            <img
              alt="barcelona"
              style={{ height: '150px', objectFit: 'cover', width: '100%' }}
              src="https://www.eindhovenairport.nl/sites/default/files/styles/header_image_bestemming/public/barcelona_1.jpg?itok=UqE05-BM&c=eb5fe87ae2d5ccb93351e16083d7b920"
            />
            <IonCardHeader>
              <IonCardTitle>Salary Tracker</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Salary Tracker is an application Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quos, officiis! Natus iusto, itaque
              consequuntur sed aliquam beatae, rem a impedit quia eum libero
              facilis dolorum, fugiat dolore accusantium architecto amet.
            </IonCardContent>
          </IonCard>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default About;
