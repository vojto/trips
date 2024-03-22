import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { singInFirebaseUser } from "./firebase-signin";
import { onUserSnapshot } from "./user";

import * as Sentry from "@sentry/capacitor";
import * as SentryNext from "@sentry/nextjs";

let dsn = "https://examplePublicKey@o0.ingest.sentry.io/0";
Sentry.init(
  {
    dsn,
    // beforeBreadcrumb() {
    //   return null;
    // },
  },
  SentryNext.init
);

export function App() {
  const [trips, setTrips] = useState<{ destination: string }[]>([]);

  useEffect(() => {
    singInFirebaseUser();
  }, []);

  useEffect(() => {
    let promise: Promise<VoidFunction> | undefined;

    const id = setTimeout(() => {
      promise = onUserSnapshot();
    }, 1000);

    return () => {
      clearTimeout(id);
      if (promise) {
        promise.then((dispose) => dispose());
      }
    };
  }, []);

  useEffect(() => {
    const dispose = onSnapshot(collection(db, "trips"), (doc) => {
      const trips = doc.docs.map(
        (doc) => doc.data() as { destination: string }
      );

      setTrips(trips);
    });

    return () => {
      dispose();
    };
  }, []);

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      const now = Date.now();
      const seconds = Math.ceil((now - start) / 1000);
      console.log(`[DEBUG] App uptime: ${seconds} seconds`);
    }, 10_000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const addTrip = async () => {
    const destination = prompt("Destination of the trip:");

    await addDoc(collection(db, "trips"), {
      destination,
    });
  };

  return (
    <div className="max-w-[800px] m-auto bg-white px-10 pb-10 pt-16 min-h-screen space-y-2">
      <h1 className="text-2xl font-bold">Recent trips</h1>

      <div>
        <a onClick={addTrip}>Add a trip</a>
      </div>

      <ul>
        {trips.map((trip, index) => (
          <li key={index}>{trip.destination}</li>
        ))}
      </ul>
    </div>
  );
}
