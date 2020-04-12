import React, { useEffect, useState } from 'react';
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem
} from '@ionic/react';
import Prism from 'prismjs';
import marked from 'marked';

marked.setOptions({
    highlight: function (code, language) {
        return Prism.highlight(code, Prism.languages[language], language);
    }
});

const PrismPage = () => {
    const [snippet, setSnippet] = useState('');

    useEffect(() => {
        fetch('prism.md')
            .then(res => res.text())
            .then(text => {
                setSnippet(marked(text));
            });
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Prism</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonItem>
                    {/* <header data-plugin-header="line-numbers"></header> */}
                    <div dangerouslySetInnerHTML={{ __html: snippet }}></div>
                </IonItem>
            </IonContent>
        </IonPage>
    )
};

export default PrismPage;