import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  home,
  informationCircleOutline,
  documentTextOutline,
} from 'ionicons/icons';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Salaries from './pages/Salaries/Salaries';
import CreateSalary from './pages/CreateSalary/CreateSalary';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.scss';
import './theme/main.scss';
import SalaryDetailPage from './pages/SalaryDetail/SalaryDetailPage';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/about" component={About} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/salaries" component={Salaries} exact />
            <Route path="/salaries/new-salary" component={CreateSalary} exact />
            <Route path="/salaries/:id" component={SalaryDetailPage} exact />
            <Redirect exact from="/" to="/home" />
          </IonRouterOutlet>

          <IonTabBar slot={'bottom'}>
            <IonTabButton tab="home" href="/home">
              <IonIcon className="ion-hide-sm-up" icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="salaries" href="/salaries">
              <IonIcon className="ion-hide-sm-up" icon={documentTextOutline} />
              <IonLabel>Salaries</IonLabel>
            </IonTabButton>

            <IonTabButton tab="about" href="/about">
              <IonIcon
                className="ion-hide-sm-up"
                icon={informationCircleOutline}
              />
              <IonLabel>About</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
