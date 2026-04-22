// ============================================================
//  REFORMED CHURCH VAAL — FINANCE APP CONFIGURATION
//  Fill in YOUR values from Firebase after following README.md
// ============================================================

const APP_CONFIG = {

  // --- FIREBASE SETTINGS (from Firebase Console → Project Settings → Your Apps) ---
 var firebaseConfig = {
  apiKey: "DISABLED",
  authDomain: "disabled.firebaseapp.com",
  projectId: "disabled",
  storageBucket: "disabled.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:000000000000"
};

  // --- USER ROLES ---
  // After adding users in Firebase Authentication, paste each person's UID below.
  // Find the UID in Firebase Console → Authentication → Users → copy the "User UID" column.
  roles: {
    // Treasurer: full access (add, edit, delete, reports)
    treasurer: [
      "YOGCfWLkNYZgSV9QdznYDnIlgxT2"
    ],
    // Pastor / Leader: view-only (can see everything, cannot change data)
    pastor: [
      "yWWEmm41URMCpkkRFdVCCGyzFhu2"
    ]
  },

  // --- CHURCH INFO (shown in reports) ---
  church: {
    name: "Reformed Church Vaal",
    subtitle: "Finance Manager · Treasurer's Portal"
  }

};
