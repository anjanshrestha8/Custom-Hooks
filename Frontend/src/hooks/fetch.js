import { useState } from "react";

const useLoading = ({ boolean: boolean, message: message }) => {
  const [loading, setLoading] = useState(boolean);
  const [value, setValue] = useState(message);
  const fetchData = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        setValue(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }, 2000);
  };
  return [loading, fetchData, value];
};

export { useLoading };
