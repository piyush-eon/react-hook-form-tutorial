import { FormData } from "../types";

// Simulate API call
const simulatedApi = (
  data: FormData
): Promise<{ success: boolean; data?: FormData; message?: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate an error response
      if (Math.random() < 0.5) {
        reject({ message: "Server error occurred. Please try again." });
      } else {
        resolve({ success: true, data });
      }
    }, 2000);
  });
};

export default simulatedApi;
