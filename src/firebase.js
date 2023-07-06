import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from "firebase/auth"

// AQUÍ DEBE IR TU API DE FIRESTORE
const firebaseConfig = {
    apiKey: "AIzaSyDzExr5sHnqG_F8gLB1WAEzt2ePWpDrHXA",
    authDomain: "fitnessubb-96aca.firebaseapp.com",
    projectId: "fitnessubb-96aca",
    storageBucket: "fitnessubb-96aca.appspot.com",
    messagingSenderId: "724548918464",
    appId: "1:724548918464:web:f7bf6d76c185b3d360a125"
};
// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()


export const loginUsuario = (email, password) => {
  const auth = getAuth()
  return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log(user)
          console.log(auth)
          return user // Devuelve el usuario
      })
      .catch((error) => {
          console.log(error.code)
          console.log(error.message)
          return null // Devuelve null en caso de error
      })
}


export const crearNuevoUsuario = (email, password, nomUsuario) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password, nomUsuario)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        updateProfile(user, { displayName: nomUsuario })
          .then(() => {
            // Profile updated successfully
            signInWithEmailAndPassword(auth, email, password)
              .then((signInUserCredential) => {
                // Sign in successful
                const signInUser = signInUserCredential.user;
                console.log("Usuario registrado e inició sesión:", signInUser);
                // Aquí puedes redirigir a la página principal de tu aplicación o realizar otras acciones después del inicio de sesión automático.
              })
              .catch((signInError) => {
                // Sign in error after sign up
                console.error("Error al iniciar sesión después del registro:", signInError);
              });
          })
          .catch((profileUpdateError) => {
            // Profile update error
            console.error("Error al actualizar el perfil del usuario:", profileUpdateError);
          });
      })
      .catch((error) => {
        // Sign up error
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error al registrar el usuario:", errorCode, errorMessage);
      });
  };
  

export const cerrarSesion = () => {
    const auth = getAuth()
    signOut(auth)
        .then(() => {
            // Logout successful
            console.log("Logout successful");
            // Aquí puedes redirigir a la página de inicio de sesión u otra página de tu elección.
        })
        .catch((error) => {
            // Logout error
            console.error("Logout error:", error)
        })
}

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
