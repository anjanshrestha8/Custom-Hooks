import { useLoading } from "./hooks/fetch";
import "./app.css";

const App = () => {
  const [loading, fetchData, fetchedData] = useLoading({
    boolean: false,
    message: "Dog Api",
  });
  console.log(fetchedData);
  return (
    <>
      <h1>Welcome to Loading Navigator</h1>

      <button onClick={fetchData} className="button">
        {loading ? "Loading....." : "Fetch Data"}
      </button>
      <p>{fetchedData.status}</p>
    </>
  );
};
export default App;
