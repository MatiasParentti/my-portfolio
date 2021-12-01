import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { v4 as uuidv4 } from 'uuid';

export function firebaseConfig() {
    const config = {
        apiKey: "AIzaSyA8ID0-CW8YjQnTnXpwfrMRx4E5J2EqWYs",
        authDomain: "matias-parentti.firebaseapp.com",
        projectId: "matias-parentti",
        storageBucket: "matias-parentti.appspot.com",
        messagingSenderId: "535355466636",
        appId: "1:535355466636:web:9b000ddb957e187fcb6ca9",
        measurementId: "G-VKBCDMGPPM"
    };

    // Initialize Firebase
    const app = initializeApp(config);
    const analytics = getAnalytics(app);

}

export function firebaseCrear(coleccion, objeto) {
    objeto.id = uuidv4();
    let referencia = doc(getFirestore(), coleccion, objeto.id);
    setDoc(referencia, objeto);
}

