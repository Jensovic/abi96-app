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
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
  IonIcon,
  IonButton
} from '@ionic/react';
import { calendar, location, time, people } from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nachtreffen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Nachtreffen</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard className="reunion-card">
          <IonCardHeader>
            <IonCardTitle>30 Jahre Abitur 1996 ??</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="reunion-info">
              <h2>Unser großes Wiedersehen!</h2>
              <p>Nach 30 Jahren treffen wir uns wieder - lasst uns gemeinsam auf unsere Schulzeit anstoßen und Erinnerungen austauschen.</p>
            </div>
          </IonCardContent>
        </IonCard>

        <IonCard className="event-details-card">
          <IonCardHeader>
            <IonCardTitle>Event Details</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem className="detail-item">
                <IonIcon icon={calendar} slot="start" color="primary" />
                <IonLabel>
                  <h2>Datum</h2>
                  <p>Juni 2026 (genauer Termin folgt)</p>
                </IonLabel>
                <IonBadge color="warning">TBD</IonBadge>
              </IonItem>
              <IonItem className="detail-item">
                <IonIcon icon={location} slot="start" color="primary" />
                <IonLabel>
                  <h2>Location</h2>
                  <p>Wird noch bekannt gegeben</p>
                </IonLabel>
                <IonBadge color="warning">TBD</IonBadge>
              </IonItem>
              <IonItem className="detail-item">
                <IonIcon icon={people} slot="start" color="primary" />
                <IonLabel>
                  <h2>Anmeldungen</h2>
                  <p>Bisher 12 Zusagen</p>
                </IonLabel>
                <IonBadge color="success">12</IonBadge>
              </IonItem>
            </IonList>
            <IonButton expand="block" color="primary" className="rsvp-button">
              Zusagen / Absagen
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
