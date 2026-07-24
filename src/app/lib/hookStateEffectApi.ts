import axios from "axios";

export const getFetchData = async (setData, setLoading, setError) => {
  try {
    setLoading(true); // Fetching start hone par loading state true set karein

    // ---Axios se API Call ---
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    console.log(response.data, "usestate effect api");
    setData(response.data); // Axios se mila data state mein set kar diya

  } catch (err) {
    // Agar koi error aaye toh use error state mein daal do
    setError("Data fetch nahi ho paya!");
  } finally {
    // Request chahe success ho ya fail, loading complete ho gayi
    setLoading(false);
  }
};
