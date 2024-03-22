import { FirebaseApp } from "firebase/app";
import {
  connectAuthEmulator,
  indexedDBLocalPersistence,
  initializeAuth,
} from "firebase/auth";

export function getAndConfigAuth(app: FirebaseApp) {
  const auth = initializeAuth(app, {
    persistence: indexedDBLocalPersistence,
  });

  return auth;
}
