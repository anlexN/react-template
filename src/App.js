import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSplitPane,
  IonMenu,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonIcon,
  IonPage
} from '@ionic/react';

import HomePage from './pages/Home';
import D3Page from './pages/D3';

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
// import './theme/variables.css';

import d3svg from './d3-dot-js.svg';
import prismsvg from './prism.svg';

import './App.css';
import './theme/prism-vs.css';
import PrismPage from './pages/Prism';

function App() {
  const appPages = [
    {
      title: 'D3',
      url: '#/d3',
      icon: d3svg
    },
    {
      title: 'Prism',
      url: '#/prism',
      icon: prismsvg
    }
  ];

  return (
    <IonApp>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main" type="overlay">
          <IonHeader>
            <IonToolbar>
              <IonTitle color="primary">
                <a href="#/">anlex N</a>
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              {appPages.map((appPage, index) => (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem href={`${appPage.url}`}>
                    <IonIcon slot="start" icon={appPage.icon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              ))}
            </IonList>
          </IonContent>
        </IonMenu>

        <IonPage id="main">
          <Router>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/d3">
                <D3Page />
              </Route>
              <Route path="/prism">
                <PrismPage />
              </Route>
            </Switch>
          </Router>
        </IonPage>
      </IonSplitPane>
    </IonApp>
  );
}

export default App;
