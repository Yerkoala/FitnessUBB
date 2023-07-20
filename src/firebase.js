import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, fetchSignInMethodsForEmail,} from "firebase/auth";

// AQUÍ DEBE IR TU API DE FIRESTORE
const firebaseConfig = {
  apiKey: "AIzaSyDzExr5sHnqG_F8gLB1WAEzt2ePWpDrHXA",
  authDomain: "fitnessubb-96aca.firebaseapp.com",
  projectId: "fitnessubb-96aca",
  storageBucket: "fitnessubb-96aca.appspot.com",
  messagingSenderId: "724548918464",
  appId: "1:724548918464:web:f7bf6d76c185b3d360a125",
};
// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();

export const loginUsuario = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      console.log(auth);
      return user; // Devuelve el usuario
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      return null; // Devuelve null en caso de error
    });
};

export const crearNuevoUsuario = async (email, password, nomUsuario) => {
  const auth = getAuth();
  try {
    // Verificar disponibilidad del correo electrónico
    const signInMethods = await fetchSignInMethodsForEmail(auth, email);
    if (signInMethods && signInMethods.length > 0) {
      alert(
        "El correo electrónico ya está registrado. Por favor, utilice otro correo."
      );
      return;
    }

    // Verificar disponibilidad del nombre de usuario
    const users = await getUsersByUsername(nomUsuario);
    if (users && users.length > 0) {
      alert(
        "El nombre de usuario no está disponible. Por favor, elija otro nombre de usuario."
      );
      return;
    }

    // Registrar nuevo usuario
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Resto del código sigue igual...
        // ... (código anterior)
      })
      .catch((error) => {
        // Sign up error
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error al registrar el usuario:", errorCode, errorMessage);
      });
  } catch (error) {
    console.error(
      "Error al verificar disponibilidad del correo electrónico:",
      error
    );
  }
};

// Función para obtener usuarios por nombre de usuario
const getUsersByUsername = async (nomUsuario) => {
  const usersRef = db.collection("usuarios");
  try {
    const snapshot = await usersRef
      .where("displayName", "==", nomUsuario)
      .get();
    if (!snapshot.empty) {
      const users = snapshot.docs.map((doc) => doc.data());
      return users;
    } else {
      return null;
    }
  } catch (error) {
    console.error(
      "Error al obtener usuarios por nombre de usuario:",
      error
    );
    return null;
  }
};

export const cerrarSesion = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Logout successful
      console.log("Logout successful");
      // Aquí puedes redirigir a la página de inicio de sesión u otra página de tu elección.
    })
    .catch((error) => {
      // Logout error
      console.error("Logout error:", error);
    });
};

export const obtenerDisplayNameUsuario = (callback) => {
  const auth = getAuth();
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const { displayName } = user;
      callback(displayName);
    } else {
      callback(null);
    }
  });

  // Devuelve una función de limpieza para cancelar la suscripción al estado de autenticación
  return unsubscribe;
};
