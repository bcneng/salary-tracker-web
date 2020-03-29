import React from "react";
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
  IonAvatar,
  IonCardSubtitle,
  IonCardTitle,
  IonLabel,
  IonItem,
  IonButtons,
  IonBackButton,
  IonListHeader,
  IonList,
  IonChip
} from "@ionic/react";
import { useParams } from "react-router-dom";

import "./SalaryDetailPage.css";

const companySalaries = [
  {
    name: "Manuel",
    salary: 2000,
    position: "Back End Developer",
    avatar:
      "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
  },
  {
    name: "Pablo",
    salary: 3000,
    position: "DevOps",
    avatar:
      "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
  },
  {
    name: "Juan",
    salary: 5000,
    position: "Front End Developer",
    avatar:
      "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
  },
  {
    name: "Pedro",
    salary: 10000,
    position: "Back End Developer",
    avatar:
      "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
  }
];

const SalaryDetailPage: React.FC = () => {
  const { id } = useParams();

  const salary = {
    company: id,
    amount: 2000
  };

  return (
    <IonPage>
      <IonHeader className="ion-hide-sm-up" mode="md">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>{salary.company}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="page-header" fixed>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                {salary.company}
                <IonChip class="ion-margin-start" color="success">
                  <IonLabel>4.5/5</IonLabel>
                </IonChip>
              </IonCardTitle>
              <IonCardSubtitle class="ion-padding-top">
                Salario Promedio: {salary.amount} €
              </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Bienvenido Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Error, magni. Cupiditate at exercitationem, necessitatibus
              quia commodi omnis neque quasi, ratione quam eum repellat
              inventore eos assumenda quas nobis nulla saepe.
            </IonCardContent>
          </IonCard>
          <IonList class="ion-padding-horizontal">
            <IonListHeader color="none" lines="none">
              Otros salarios ingresados:
            </IonListHeader>
            {companySalaries.map(review => (
              <IonItem key={review.name}>
                <IonAvatar slot="start">
                  <img
                    alt="member"
                    src="https://previews.123rf.com/images/yupiramos/yupiramos1804/yupiramos180421549/100217342-doctor-professional-avatar-character-vector-illustration-design.jpg"
                  />
                </IonAvatar>
                <IonLabel>
                  <h2>{review.name}</h2>
                  <h3>{review.salary}</h3>
                  <p>{review.position}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SalaryDetailPage;
