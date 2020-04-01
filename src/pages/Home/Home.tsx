import React, { useState } from "react";
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
  IonButton,
  IonCardSubtitle,
  IonCardTitle,
  IonListHeader
} from "@ionic/react";
import "./Home.css";
import { SalaryList, Salary } from '../../components/SalaryList';
import { CreateSalary } from "../CreateSalary/CreateSalary";

const Home: React.FC = () => {
  const [showNewSalaryModal, setShowNewSalaryModal] = useState(false);
  const [salaries, setSalaries] = useState([
    {
      company: "Company Name Here",
      position: 'Front End Developer',
      salary: 2000
    },
    {
      company: "Company Name Here",
      position: 'Front End Developer',
      salary: 4000
    },
    {
      company: "Company Name Here",
      position: 'Front End Developer',
      salary: 5000
    }
  ]);

  const handleSalaryClick = (salary: Salary) => {
    alert(salary.company);
  };

  const createSalary = () => {
    setShowNewSalaryModal(true);
  };

  const handleNewSalary = () => {
    setShowNewSalaryModal(false);

  };
  const handleSubmitNewSalary = (newSalary: any) => {
    setSalaries([...salaries, newSalary]);
  };

  return (
    <IonPage>
      <IonHeader className="ion-hide-sm-up" mode="md">
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <CreateSalary
          submitValue={handleSubmitNewSalary}
          showModal={showNewSalaryModal}
          closeModal={handleNewSalary}
        ></CreateSalary>
        <IonGrid className="page-header" fixed>
          <IonCard>
            <img
              alt="barcelona"
              style={{ height: "150px", objectFit: "cover", width: "100%" }}
              src="https://www.eindhovenairport.nl/sites/default/files/styles/header_image_bestemming/public/barcelona_1.jpg?itok=UqE05-BM&c=eb5fe87ae2d5ccb93351e16083d7b920"
            />
            <IonCardHeader>
              <IonCardSubtitle>Barcelona, spain</IonCardSubtitle>
              <IonCardTitle>Salary Tracker</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Bienvenido Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Error, magni. Cupiditate at exercitationem, necessitatibus
              quia commodi omnis neque quasi, ratione quam eum repellat
              inventore eos assumenda quas nobis nulla saepe.
            </IonCardContent>
          </IonCard>
          <IonButton
            className="ion-margin-horizontal"
            data-cy="add-salary-button"
            onClick={() => {
              createSalary();
            }}
            expand="block"
          >
            Agregar Salario
          </IonButton>

          <IonListHeader color="none" lines="none">
            Ultimos Salarios Registrados
          </IonListHeader>
          <SalaryList salaries={salaries} onSalaryClick={handleSalaryClick} />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
