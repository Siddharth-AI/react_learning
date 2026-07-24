// ---------------------------------- Native Fetch API Example -----------------------------------------

import axios from "axios";

// api call fetch karne ke liye function
export function getFetchData(setPost) {
  // 1. Server ko request bhej rahe hain
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      // 2. Fetch seedha data nahi deta, pehle response stream milati hai
      // Isliye ise json mein convert karna padta hai
      return response.json();
    })
    .then((data) => {
      // 3. Yahan hume actual JSON data milta hai
      console.log("Fetch se mila data:", data);
      // 4. State update kar rahe hain
      setPost(data);
    })
    .catch((error) => {
      // 5. Agar koi network error aaye toh yahan capture hota hai
      console.error("Fetch error:", error);
    });
}

// ---------------------------------- Async / Await in Fetch API Example -----------------------------

// Function ke aage 'async' keyword lagana zaroori hai
export async function getAsyncData(setPost) {
  try {
    // 1. 'await' lagane se JavaScript wait karti hai jab tak request poori na ho jaye
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",   
      }
    }
    );

    // 2. Data ko JSON mein convert hone ka wait kar rahe hain
    const data = await response.json();

    // State update kar rahe hain
    setPost([data]);

    // 3. Response ready hai
    console.log("Async/Await se mila data:", data);
  } catch (error) {
    // 4. Try/Catch block se errors easily handle ho jaate hain
    console.error("Async/Await error:", error);
  }
}

// ---------------------------------- Axios Example wihout async await -------------------------------

// axios.get(url): Fetches data from a specified server URL.
// axios.post(url): Sends new data to a server endpoint.
// axios.put(url): Updates an existing resource completely with new data.
// axios.delete(url): Removes a specific resource from the server. 

export function getAxiosData(setPost) {
  // Axios GET request
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      // Response milne ke baad data ko handle karein
      console.log("Axios se mila data:", response.data);
      setPost(response.data);
    })
    .catch((error) => {
      // Error handling
      console.error("Axios error:", error);
    });
}

// ---------------------------------- Axios Example with Async/Await -----------------------------------------

export async function getAxiosDataAsync(setPost) {
  try {
    // 1. Axios request bhejta hai aur response direct JSON format mein deta hai
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    
    // 2. Direct response.data se aapka JSON object mil jata hai (extra .json() step nahi chahiye)
    console.log('Axios se mila data:', response);

    // State update kar rahe hain
    setPost([response.data]);
  } catch (error) {
    // 3. Axios 404 ya 500 status codes ko bhi automatic catch block mein bhej deta hai
    console.error('Axios error:', error);
  }
}

