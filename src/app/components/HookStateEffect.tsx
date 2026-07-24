import React, { useEffect, useState } from "react";
import { getFetchData } from "../lib/hookStateEffectApi";

const HookStateEffect = () => {
  // 1. useState: Component ki local state variables declare kar rahe hain
  const [data, setData] = useState(null); // API ka data store karne ke liye
  const [loading, setLoading] = useState(true); // Loading state dikhane ke liye
  const [error, setError] = useState(null); // Error store karne ke liye

  const [count, setCount] = useState(0); // Count state for demonstration

  // 2. useEffect: Component jab screen par mount (load) hoga, tab ye code chalega
  useEffect(() => {
    // Async function ko execute kar rahe hain
    getFetchData(setData, setLoading, setError);
  }, [count]); // [] Empty dependency array ka matlab hai ye Effect sirf ek baar component load hone par chalega

  function countFn() {
    setCount(count + 1); // Count state ko increment kar rahe hain
  }

  // 3. Conditional Rendering (Loading aur Error UI handle karna)
  if (loading) return <h3>Data load ho raha hai...</h3>;
  if (error) return <h3>{error}</h3>;

  // 4. Main UI Output
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}>
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {data?.name}
      </p>
      <p>
        <strong>Email:</strong> {data?.email}
      </p>
      <p>
        <strong>City:</strong> {data?.address?.city}
      </p>
      <button onClick={countFn}>use effect re run</button>
    </div>
  );
};

export default HookStateEffect;
