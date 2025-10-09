// "use client";
// import React, { useEffect, useState } from "react";

// const Test = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/api/reviews");
//         const json = await res.json();
//         console.log("✅ Data fetched:", json);
//         setData(json);
//       } catch (err) {
//         console.error("❌ Error fetching:", err);
//       }
//     };

//     loadData();
//   }, []);

//   return (
//     <div>
//       <h2>Test</h2>
//       {data.length > 0 ? (
//         <ul>
//           {data.map((item) => (
//             <li key={item._id}>{item.title} — {item.category}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Test;
