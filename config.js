// ============================================================
//  REFORMED CHURCH VAAL — FINANCE APP CONFIGURATION
//  Fill in YOUR values from Firebase after following README.md
// ============================================================

const APP_CONFIG = {

  // --- FIREBASE SETTINGS (from Firebase Console → Project Settings → Your Apps) ---
  firebase: {
    apiKey:            "AIzaSyDYIoAWfSGFbEeTyaFcD_18vJ6RVK4tcXk",
    authDomain:        "church-finance-system-f1ca4.firebaseapp.com",
    projectId:         "church-finance-system-f1ca4",
    storageBucket:     "church-finance-system-f1ca4.firebasestorage.app",
    messagingSenderId: "209970272665",
    appId:             "1:209970272665:web:909a10d23301a58ad0db08"
  },

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
