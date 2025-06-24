import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonButton,
  IonIcon,
  IonFab,
  IonFabButton
} from '@ionic/react';
import { camera, add, heart } from 'ionicons/icons';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Fotos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Fotos</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard className="photo-gallery-card">
          <IonCardHeader>
            <IonCardTitle>Erinnerungen aus vergangenen Tagen ??</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Hier sammeln wir alle Fotos aus unserer gemeinsamen Schulzeit und von vergangenen Treffen.</p>
          </IonCardContent>
        </IonCard>

        <IonCard className="photo-categories-card">
          <IonCardHeader>
            <IonCardTitle>Foto-Kategorien</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="6">
                  <div className="photo-category">
                    <IonImg src="https://via.placeholder.com/150x150/4A90E2/FFFFFF?text=1996" alt="Abitur 1996" />
                    <h3>Abitur 1996</h3>
                    <p>23 Fotos</p>
                  </div>
                </IonCol>
                <IonCol size="6">
                  <div className="photo-category">
                    <IonImg src="https://via.placeholder.com/150x150/7B68EE/FFFFFF?text=Schule" alt="Schulzeit" />
                    <h3>Schulzeit</h3>
                    <p>45 Fotos</p>
                  </div>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6">
                  <div className="photo-category">
                    <IonImg src="https://via.placeholder.com/150x150/32CD32/FFFFFF?text=Feste" alt="Schulfeste" />
                    <h3>Schulfeste</h3>
                    <p>31 Fotos</p>
                  </div>
                </IonCol>
                <IonCol size="6">
                  <div className="photo-category">
                    <IonImg src="https://via.placeholder.com/150x150/FFB347/FFFFFF?text=Heute" alt="Heute" />
                    <h3>Wie wir heute sind</h3>
                    <p>8 Fotos</p>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="primary">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
