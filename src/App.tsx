export function App() {
  const addTrip = () => {
    const name = prompt("Name of the trip:");
  };

  return (
    <div className="max-w-[800px] m-auto bg-white px-10 py-10 min-h-screen space-y-2">
      <h1 className="text-2xl font-bold">My trips</h1>
      <div>
        <a onClick={addTrip}>Add a trip</a>
      </div>
    </div>
  );
}
