import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonListHeader,
  IonItem,
  IonSearchbar,
} from '@ionic/react';
import './Companies.css';

type Company = {
  name: string;
  description: string;
  employees: number;
  averageSalary?: number;
};

const Companies: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const companies: Company[] = [
    {
      name: 'Company Z',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe laborum fugit, rerum repudiandae eaque sed earum, eveniet aliquid laboriosam, vero amet exercitationem aperiam quaerat. Repellat placeat reprehenderit quas. Doloremque?',
      employees: 50,
    },
    {
      name: 'Company W',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe laborum fugit, rerum repudiandae eaque sed earum, eveniet aliquid laboriosam, vero amet exercitationem aperiam quaerat. Repellat placeat reprehenderit quas. Doloremque?',
      employees: 1000,
    },
    {
      name: 'Company Y',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe laborum fugit, rerum repudiandae eaque sed earum, eveniet aliquid laboriosam, vero amet exercitationem aperiam quaerat. Repellat placeat reprehenderit quas. Doloremque?',
      employees: 100,
    },
    {
      name: 'Empresa X',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe laborum fugit, rerum repudiandae eaque sed earum, eveniet aliquid laboriosam, vero amet exercitationem aperiam quaerat. Repellat placeat reprehenderit quas. Doloremque?',
      employees: 300,
    },
  ];

  const changeSearch = (event: CustomEvent) => {
    setSearchQuery(event.detail.value);
  };

  return (
    <IonPage>
      <IonHeader className="ion-hide-sm-up" mode="md">
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="page-header" fixed>
          <IonListHeader color="none" lines="none">
            Buscar Compañias
          </IonListHeader>
          <IonItem lines="none">
            <IonSearchbar
              onIonChange={(event) => {
                changeSearch(event);
              }}
              placeholder="Buscar"
              className="ion-no-padding"
            ></IonSearchbar>
          </IonItem>
          {companies
            .filter((company: any) => {
              return company.name.toLowerCase().includes(searchQuery);
            })
            .map((company: Company) => (
              <IonCard key={company.name}>
                <IonCardContent>
                  <IonCardTitle>{company.name}</IonCardTitle>
                  <IonCardSubtitle>
                    Empleados: {company.employees}
                  </IonCardSubtitle>
                  {company.description}
                </IonCardContent>
              </IonCard>
            ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Companies;
