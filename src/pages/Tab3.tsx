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
  IonAvatar,
  IonButton,
  IonIcon,
  IonFab,
  IonFabButton
} from '@ionic/react';
import { heart, chatbubble, add, time } from 'ionicons/icons';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stories</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Stories</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard className="stories-intro-card">
          <IonCardHeader>
            <IonCardTitle>Geschichten aus vergangenen Tagen ??</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Teilt eure lustigsten, peinlichsten und schönsten Erinnerungen aus der Schulzeit mit uns allen!</p>
          </IonCardContent>
        </IonCard>

        <IonCard className="story-card">
          <IonCardContent>
            <div className="story-header">
              <IonAvatar className="story-avatar">
                <img src="https://via.placeholder.com/40x40/4A90E2/FFFFFF?text=MK" alt="Max" />
              </IonAvatar>
              <div className="story-info">
                <h3>Max Kellner</h3>
                <p className="story-time">vor 2 Tagen</p>
              </div>
            </div>
            <div className="story-content">
              <h4>Die große Pausenhof-Schneeballschlacht 1995 ??</h4>
              <p>Erinnert ihr euch noch an den Winter 1995? Als Herr Schmidt uns alle erwischt hat, wie wir eine epische Schneeballschlacht auf dem Pausenhof veranstaltet haben? Er war so sauer, aber am Ende hat er selbst mitgemacht! ??</p>
            </div>
            <div className="story-actions">
              <IonButton fill="clear" size="small">
                <IonIcon icon={heart} slot="start" />
                12 Likes
              </IonButton>
              <IonButton fill="clear" size="small">
                <IonIcon icon={chatbubble} slot="start" />
                5 Kommentare
              </IonButton>
            </div>
          </IonCardContent>
        </IonCard>

        <IonCard className="story-card">
          <IonCardContent>
            <div className="story-header">
              <IonAvatar className="story-avatar">
                <img src="https://via.placeholder.com/40x40/7B68EE/FFFFFF?text=SM" alt="Sarah" />
              </IonAvatar>
              <div className="story-info">
                <h3>Sarah Müller</h3>
                <p className="story-time">vor 1 Woche</p>
              </div>
            </div>
            <div className="story-content">
              <h4>Unser legendärer Abistreich ??</h4>
              <p>Wie wir das ganze Schulgebäude mit Luftballons gefüllt haben und Herr Direktor Wagner erst dachte, es wäre ein Notfall! Die Feuerwehr war schon unterwegs... ??</p>
            </div>
            <div className="story-actions">
              <IonButton fill="clear" size="small">
                <IonIcon icon={heart} slot="start" />
                18 Likes
              </IonButton>
              <IonButton fill="clear" size="small">
                <IonIcon icon={chatbubble} slot="start" />
                8 Kommentare
              </IonButton>
            </div>
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

export default Tab3;
