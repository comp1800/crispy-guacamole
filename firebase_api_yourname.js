        //---------------------------------------------------------------------
        // Your web app's Firebase configuration (7 fields or "key value" pairs)
        // Replace the configuration with YOUR project's API information
        // copied from the firebase console (settings) of your project.
        //---------------------------------------------------------------------
        var firebaseConfig = {
          apiKey: "",
          authDomain: "",
          databaseURL: "",
          projectId: "",
          storageBucket: "",
          messagingSenderId: "",
          appId: ""
        };
        //------------------------------------------------
        // Initialize Firebase and Firestore reference
        // Do not delete!
        //------------------------------------------------
        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();
        
        
