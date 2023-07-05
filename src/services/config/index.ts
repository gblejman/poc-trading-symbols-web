export const config = {
  isDev: import.meta.env.DEV,
  firebase: {
    apiKey: "AIzaSyB4WPxbLCcc76_b6KjjYulp3Xaiz246XdQ",
    authDomain: "poc-trading-symbols.firebaseapp.com",
    projectId: "poc-trading-symbols",
    storageBucket: "poc-trading-symbols.appspot.com",
    messagingSenderId: "588277621413",
    appId: "1:588277621413:web:df2b2ff5f2029389a8a34c",
    measurementId: "G-BH78B6P72D",
  },
};

// TODO: Not Working as advertised - keep inline as everything is public for now
// export const config = {
//   isDev: import.meta.env.DEV,
//   firebase: {
//     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_FIREBASE_APP_ID,
//     measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
//   },
// };
