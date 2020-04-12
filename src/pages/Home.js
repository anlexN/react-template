import React from 'react';
import { IonHeader, 
    IonToolbar,
    IonButtons, 
    IonMenuButton, 
    IonTitle, 
    IonContent, 
    IonCard, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle, 
    IonCardContent, 
    IonPage
} from "@ionic/react";
import './Home.css';
import logo from './logo.svg';

const HomePage = () => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Home</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonCard>
                <img src={logo} className="App-logo" alt="logo" />
                <IonCardHeader>
                    <IonCardSubtitle>Get Started</IonCardSubtitle>
                    <IonCardTitle>Welcome to You</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    Thank d3, ionic, opensuse, prism, react, workbox and other amazing things!
                </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>
)

export default HomePage;