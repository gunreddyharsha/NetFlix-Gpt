import { GoogleGenAI } from "@google/genai";


export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDYzYTBlOWZmNmYyNzliOGRmYTI1OGY1ZWRhNzQ2YyIsIm5iZiI6MTc3MDk2MzIxMy40ODcsInN1YiI6IjY5OGVjMTBkMDk4N2I5YzNmZTM3MGZmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGMcQ9V9rz7AtrV6d1mWUKyQdxgoti7hQITMIPhMauc",
  }
} 
export const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_GEMINI_API_KEY });
  