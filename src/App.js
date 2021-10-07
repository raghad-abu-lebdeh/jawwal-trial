import { IonButton, IonDatetime, IonPage } from '@ionic/react'
import '@ionic/react/css/core.css'
import React from 'react'

const App = () => {
  return (
    <IonPage>
      <IonDatetime
        displayFormat="MM/DD/YYYY"
        placeholder="Select Date"
      ></IonDatetime>
      <IonButton fill="clear">Start</IonButton>
    </IonPage>
  )
}
export default App
