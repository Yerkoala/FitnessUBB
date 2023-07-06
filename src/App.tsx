import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Buscar from './pages/Buscar';
import Estadisticas from './pages/Estadisticas';
import { RutinasProvider } from './provider/RutinasProvider';
import CheckEjercicios from './components/Home/CheckEjercicios';

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
import './theme/variables.css';
import { EstadisticasProvider } from './provider/EstadisticasProvider';




setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <RutinasProvider>
        <EstadisticasProvider>

          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/home/:categoria/:nombre">
              <CheckEjercicios />
            </Route>
            <Route exact path="/buscar">
              <Buscar />
            </Route>
            <Route exact path="/estadisticas">
              <Estadisticas />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>

        </EstadisticasProvider>
      </RutinasProvider>

    </IonReactRouter>
  </IonApp>
);

export default App;
