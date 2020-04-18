import React, { useState } from 'react';
import './CreateSalary.scss';
import {
  IonButton,
  IonInput,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonToggle,
  IonGrid,
  IonPage,
  IonList,
  IonChip,
  IonIcon,
  IonButtons,
  IonBackButton,
} from '@ionic/react';

import { closeCircleOutline, arrowBack } from 'ionicons/icons';
import { Salary } from '../Salaries/Salaries';

type SalaryInputForm = Omit<Salary, 'id'>;

const CreateSalary: React.FC = () => {
  const [formNewSalary, setFormNewSalary] = useState<SalaryInputForm>({
    experience: 0,
    position: '',
    technologies: [],
    role: '',
    employmentType: '',
    companySize: '',
    grossSalary: 0,
    location: '',
    fullRemote: false,
    gender: '',
    weeklyHours: 0,
  });
  const [technology, setTechnology] = useState('');

  const confirmSalary = () => {
    console.log(formNewSalary);
  };

  const addNewTechnology = () => {
    if (!technology || formNewSalary.technologies.includes(technology)) return;
    setFormNewSalary({
      ...formNewSalary,
      technologies: [...formNewSalary.technologies, technology],
    });
    setTechnology('');
  };

  return (
    <IonPage>
      <IonHeader className="ion-hide-sm-up" mode="md">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/salaries" />
          </IonButtons>
          <IonTitle>Add New Salary</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="">
        <IonGrid className="page-header" fixed>
          <IonButton
            class="ion-hide-sm-down"
            fill="clear"
            routerLink="/salaries"
          >
            <IonIcon class="ion-margin-end" icon={arrowBack}></IonIcon> Back to
            Salaries
          </IonButton>
          <IonList class="form-list ion-padding">
            <div className="input-wrapper">
              <IonLabel class="label">
                Experience in the position (years)
              </IonLabel>
              <IonInput
                onIonChange={(e) =>
                  setFormNewSalary({
                    ...formNewSalary,
                    experience: parseInt(e.detail.value!, 10),
                  })
                }
                type="number"
                className="input ion-margin-top"
                value={formNewSalary.experience}
              ></IonInput>
            </div>
            <div className="input-wrapper">
              <IonLabel class="label">Current Position</IonLabel>
              <IonInput
                onIonChange={(e) =>
                  setFormNewSalary({
                    ...formNewSalary,
                    position: e.detail.value! as string,
                  })
                }
                type="text"
                className="input ion-margin-top"
                value={formNewSalary.position}
              ></IonInput>
            </div>
            <div className="input-wrapper">
              <IonLabel class="label">Role</IonLabel>
              <IonInput
                onIonChange={(e) =>
                  setFormNewSalary({
                    ...formNewSalary,
                    role: e.detail.value! as string,
                  })
                }
                className="input ion-margin-top"
                value={formNewSalary.role}
                type="text"
              ></IonInput>
            </div>
            <div className="input-wrapper">
              <IonLabel class="label">Employment Type</IonLabel>
              <IonInput
                onIonChange={(e) =>
                  setFormNewSalary({
                    ...formNewSalary,
                    employmentType: e.detail.value! as string,
                  })
                }
                className="input ion-margin-top"
                value={formNewSalary.employmentType}
                type="text"
              ></IonInput>
            </div>
            <div className="input-wrapper">
              <IonLabel class="label">Company size</IonLabel>
              <IonInput
                onIonChange={(e) =>
                  setFormNewSalary({
                    ...formNewSalary,
                    companySize: e.detail.value! as string,
                  })
                }
                className="input ion-margin-top"
                value={formNewSalary.companySize}
                type="text"
              ></IonInput>
            </div>
            <div className="input-wrapper">
              <IonLabel class="label">Gross Annual Salary (€)</IonLabel>
              <IonInput
                onIonChange={(e) =>
                  setFormNewSalary({
                    ...formNewSalary,
                    grossSalary: parseInt(e.detail.value!, 10),
                  })
                }
                type="number"
                className="input ion-margin-top"
                value={formNewSalary.grossSalary}
              ></IonInput>
            </div>

            <div className="input-wrapper">
              <IonLabel class="label">Location</IonLabel>
              <IonInput
                onIonChange={(e) =>
                  setFormNewSalary({
                    ...formNewSalary,
                    location: e.detail.value! as string,
                  })
                }
                className="input ion-margin-top"
                value={formNewSalary.location}
                type="text"
              ></IonInput>
            </div>

            <div className="input-wrapper">
              <IonLabel class="label">Gender</IonLabel>
              <IonInput
                onIonChange={(e) =>
                  setFormNewSalary({
                    ...formNewSalary,
                    gender: e.detail.value! as string,
                  })
                }
                className="input ion-margin-top"
                value={formNewSalary.gender}
                type="text"
              ></IonInput>
            </div>

            <div className="input-wrapper">
              <IonLabel class="label">Is your position fully remote? </IonLabel>
              <IonToggle
                checked={formNewSalary.fullRemote}
                class="ion-margin-top ion-justify-content-start"
                onIonChange={(e) =>
                  setFormNewSalary({
                    ...formNewSalary,
                    fullRemote: e.detail.checked,
                  })
                }
              />
            </div>

            <div className="input-wrapper">
              <IonLabel class="label">Weekly Hours</IonLabel>
              <IonInput
                onIonChange={(e) =>
                  setFormNewSalary({
                    ...formNewSalary,
                    weeklyHours: parseInt(e.detail.value!, 10),
                  })
                }
                type="number"
                className="input ion-margin-top"
                value={formNewSalary.weeklyHours}
              ></IonInput>
            </div>
            <div className="input-wrapper ion-align-self-start">
              <IonLabel class="label">Technologies</IonLabel>
              <div className="ion-margin-top">
                {formNewSalary.technologies.map((tech) => (
                  <IonChip color="primary" key={tech}>
                    <IonLabel>{tech}</IonLabel>
                    <IonIcon
                      icon={closeCircleOutline}
                      onClick={() =>
                        setFormNewSalary({
                          ...formNewSalary,
                          technologies: formNewSalary.technologies.filter(
                            (item) => item !== tech,
                          ),
                        })
                      }
                    />
                  </IonChip>
                ))}
              </div>
              <IonInput
                type="text"
                className="input ion-margin-top"
                onIonChange={(e) => setTechnology(e.detail.value! as string)}
                value={technology}
              ></IonInput>
              <IonButton
                class="ion-margin-top"
                slot="end"
                size="small"
                onClick={addNewTechnology}
              >
                Add
              </IonButton>
            </div>
          </IonList>
          <IonButton
            className="ion-margin"
            expand="block"
            onClick={confirmSalary}
          >
            Confirm Salary Entry
          </IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CreateSalary;
