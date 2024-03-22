import { Firestore, collection, doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "./firebase";
import { User } from "firebase/auth";

export function waitForAuthUser() {
  return new Promise<User>((resolve) => {
    if (auth.currentUser) {
      resolve(auth.currentUser);
    } else {
      getResolvedRemoteAuthUser().then(resolve);
    }
  });
}

function getResolvedRemoteAuthUser() {
  return new Promise<User>((resolve) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        unsubscribe();
        resolve(user);
      }
    });
  });
}

export function getUsersRef({ db }: { db: Firestore }) {
  return collection(db, "users");
}

export function getUserRef({ db, userId }: { db: Firestore; userId: string }) {
  return doc(getUsersRef({ db }), userId);
}

export async function onUserSnapshot(): Promise<VoidFunction> {
  const authUser = await waitForAuthUser();
  const doc = getUserRef({ db, userId: authUser.uid });

  return onSnapshot(
    doc,
    (snapshot) => {
      console.log("[onUserSnapshot] snapshot");
    },
    (error) => {
      console.error("[onUserSnapshot] Error:", error);
    }
  );
}
