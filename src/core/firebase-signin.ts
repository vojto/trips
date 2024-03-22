import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const EMAIL = "test5@test.com";
const PASSWORD = "test1234";

export async function singInFirebaseUser(email = EMAIL, password = PASSWORD) {
  console.log("singInFirebaseUser");

  if (auth.currentUser) {
    return;
  }

  console.log("signInWithEmailAndPassword");
  const user = await signInWithEmailAndPassword(auth, email, password);
  console.log("user id", user.user.uid);
  return user;
}
