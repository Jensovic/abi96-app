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
  IonAvatar,
  IonButton,
  IonIcon
} from '@ionic/react';
import { person, settings, logOut, school } from 'ionicons/icons';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profil</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard className="profile-card">
          <IonCardContent>
            <div className="profile-header">
              <IonAvatar className="profile-avatar">
                <img src="https://via.placeholder.com/80x80/4A90E2/FFFFFF?text=ABI" alt="Profile" />
              </IonAvatar>
              <h2 className="profile-name">Max Mustermann</h2>
              <p className="profile-info">Abiturjahrgang 1996</p>
              <p className="profile-info">30 Jahre später...</p>
            </div>
          </IonCardContent>
        </IonCard>

        <IonCard className="profile-card">
          <IonCardHeader>
            <IonCardTitle>Mein Profil vervollständigen</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem button className="settings-item">
                <IonIcon icon={person} slot="start" />
                <IonLabel>
                  <h2>Persönliche Daten</h2>
                  <p>Name, Beruf, Familie...</p>
                </IonLabel>
              </IonItem>
              <IonItem button className="settings-item">
                <IonIcon icon={school} slot="start" />
                <IonLabel>
                  <h2>Damals & Heute</h2>
                  <p>Was ist aus mir geworden?</p>
                </IonLabel>
              </IonItem>
              <IonItem button className="settings-item">
                <IonIcon icon={settings} slot="start" />
                <IonLabel>
                  <h2>App-Einstellungen</h2>
                  <p>Benachrichtigungen, Privatsphäre</p>
                </IonLabel>
              </IonItem>
              <IonItem button className="settings-item">
                <IonIcon icon={logOut} slot="start" />
                <IonLabel>
                  <h2>Abmelden</h2>
                  <p>Aus der App abmelden</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
