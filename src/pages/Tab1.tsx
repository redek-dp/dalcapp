import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonItem, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HOME</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">HOME</IonTitle>
          </IonToolbar>
        </IonHeader>
        
       <IonItem>
          <IonLabel>Checkbox</IonLabel>
          <IonCheckbox slot="start" />
        </IonItem>

        <IonItem>
          <IonLabel>Range</IonLabel>
          <IonRange></IonRange>
        </IonItem>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
