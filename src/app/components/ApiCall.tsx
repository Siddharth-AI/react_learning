"use client";
import { useState } from "react";
import { getAsyncData, getAxiosData, getAxiosDataAsync, getFetchData } from "../lib/api";

export default function ApiCall() {
  // State to hold the fetched data
  const [post, setPost] = useState([]);

  // getFetchData(setPost);

  // getAsyncData(setPost);

  // getAxiosData(setPost);

  // getAxiosDataAsync(setPost);

  // console.log("State mein data:", post);

  return (
    <>
      {post.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </>
  );
}
