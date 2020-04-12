import React from 'react';
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';

const D3Page = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>D3</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                Hello D3.
            </IonContent>
        </IonPage>
    )
};

export default D3Page;