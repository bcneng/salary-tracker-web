import React, { useState, useRef } from "react";
import "./CreateSalary.scss";
import {
  IonModal,
  IonButton,
  IonInput,
  IonLabel,
  IonItem,
  IonFooter,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonContent,
  IonRange
} from "@ionic/react";

type Props = {
  showModal: boolean;
  closeModal: () => void;
  submitValue: (event: CompanyForm) => void;
};

type CompanyForm = {
  company?: string;
  position?: string;
  salary?: number;
};

export const CreateSalary: React.FC<Props> = ({
  showModal,
  closeModal,
  submitValue
}) => {
  const [formNewSalary, setFormNewSalary] = useState<CompanyForm>({
    company: "",
    position: "",
    salary: 0
  });

  const modalRef = useRef<any>({});

  const confirmModal = () => {
    if (modalRef) {
      modalRef.current.dismiss();
    }
    submitValue(formNewSalary);
  };

  return (
    <IonModal ref={modalRef} onDidDismiss={closeModal} isOpen={showModal}>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton onClick={closeModal}>Cerrar</IonButton>
          </IonButtons>
          <IonTitle>Registrar Salario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="modal">
        <IonItem lines="none">
          <IonLabel position="stacked">Compañia</IonLabel>
          <IonInput
            onIonChange={e =>
              setFormNewSalary({
                ...formNewSalary,
                company: e.detail.value as string
              })
            }
            className="input"
            value={formNewSalary.company}
          ></IonInput>
        </IonItem>
        <IonItem lines="none">
          <IonLabel position="stacked">Posicion</IonLabel>
          <IonInput
            onIonChange={e =>
              setFormNewSalary({
                ...formNewSalary,
                position: e.detail.value as string
              })
            }
            className="input"
            value={formNewSalary.position}
          ></IonInput>
        </IonItem>
        <br />
        <IonItem
          class="ion-justify-content-center ion-padding-end"
          lines="none"
        >
          <IonRange
            class="ion-no-padding ion-padding-vertical "
            pin={true}
            onIonChange={e =>
              setFormNewSalary({
                ...formNewSalary,
                salary: e.detail.value as number
              })
            }
            min={1000}
            max={2000}
            color="secondary"
          >
            <IonLabel slot="start" class="ion-margin-end">Salario</IonLabel>
            <IonLabel slot="start">1000€</IonLabel>
            <IonLabel slot="end">3000€</IonLabel>
          </IonRange>
        </IonItem>
      </IonContent>
      <IonFooter>
        <IonButton className="ion-margin" expand="block" onClick={confirmModal}>
          Guardar Salario
        </IonButton>
      </IonFooter>
    </IonModal>
  );
};
