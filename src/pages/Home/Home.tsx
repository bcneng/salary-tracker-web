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
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
} from '@ionic/react';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-hide-sm-up" mode="md">
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="page-header" fixed>
          <IonCard>
            <img
              alt="barcelona"
              className="card-image"
              src="https://www.eindhovenairport.nl/sites/default/files/styles/header_image_bestemming/public/barcelona_1.jpg?itok=UqE05-BM&c=eb5fe87ae2d5ccb93351e16083d7b920"
            />
            <IonCardHeader>
              <IonCardSubtitle>Barcelona, spain</IonCardSubtitle>
              <IonCardTitle>Salary Tracker</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Welcome to Salary tracker ... ipsum dolor sit amet consectetur
              adipisicing elit. Error, magni. Cupiditate at exercitationem,
              necessitatibus quia commodi omnis neque quasi, ratione quam eum
              repellat inventore eos assumenda quas nobis nulla saepe.
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
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
