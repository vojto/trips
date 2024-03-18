import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./db";

export function App() {
  const [trips, setTrips] = useState<{ destination: string }[]>([]);

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

  const addTrip = async () => {
    const destination = prompt("Destination of the trip:");

    await addDoc(collection(db, "trips"), {
      destination,
    });
  };

  return (
    <div className="max-w-[800px] m-auto bg-white px-10 py-10 min-h-screen space-y-2">
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
