// import React, { useState } from "react";
// import { properties } from "../data/properties.js";

// export default function PropertiesSection() {
//   const [search, setSearch] = useState("");
//   const [filterCity, setFilterCity] = useState("");
//   const [filterType, setFilterType] = useState("");
//   const [filterPrice, setFilterPrice] = useState("");

//   const filteredProperties = properties.filter((prop) => {
//     const priceValue = parseInt(prop.price.replace(/[^0-9]/g, ""), 10);

//     return (
//       (prop.title.toLowerCase().includes(search.toLowerCase()) ||
//         prop.location.toLowerCase().includes(search.toLowerCase())) &&
//       (filterCity
//         ? prop.location.toLowerCase().includes(filterCity.toLowerCase())
//         : true) &&
//       (filterType
//         ? prop.title.toLowerCase().includes(filterType.toLowerCase())
//         : true) &&
//       (filterPrice ? priceValue <= parseInt(filterPrice, 10) : true)
//     );
//   });

//   return (
//     <section id="properties" className="py-20 bg-white justify-center">
//       <div className="container mx-auto px-4 flex justify-center flex-col items-center">
//         <h2 className="text-3xl font-semibold mb-6">Properties in All Cities</h2>

        
//         <div className="mb-8 flex flex-wrap gap-2 justify-center">
//           <input
//             type="text"
//             placeholder="Search by city or keyword"
//             className="border border-gray-300 px-4 py-2 rounded-lg"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />

         
//           <select
//             className="border border-gray-300 px-4 py-2 rounded-lg"
//             value={filterCity}
//             onChange={(e) => setFilterCity(e.target.value)}
//           >
//             <option value="">All Cities</option>
//             <option value="Uttarakhand">Uttarakhand</option>
//             <option value="Bengaluru">Bengaluru</option>
//             <option value="Hyderabad">Hyderabad</option>
//             <option value="Delhi">Delhi</option>
//             <option value="Pune">Pune</option>
//           </select>

         
//           <select
//             className="border border-gray-300 px-4 py-2 rounded-lg"
//             value={filterType}
//             onChange={(e) => setFilterType(e.target.value)}
//           >
//             <option value="">All Types</option>
//             <option value="1BHK">1BHK</option>
//             <option value="2BHK">2BHK</option>
//             <option value="3BHK">3BHK</option>
//             <option value="Villa">Villa</option>
//             <option value="Hotel">Hotel</option>
//             <option value="Mens PG">Mens PG</option>
//             <option value="Womens PG">Womens PG</option>
//           </select>

          
//           <select
//             className="border border-gray-300 px-4 py-2 rounded-lg"
//             value={filterPrice}
//             onChange={(e) => setFilterPrice(e.target.value)}
//           >
//             <option value="">Any Price</option>
//             <option value="5000">Up to ₹5,000</option>
//             <option value="7500">Up to ₹7,500</option>
//             <option value="9000">Up to ₹9,000</option>
//             <option value="10000">Up to ₹10,000</option>
//             <option value="20000">Up to ₹20,000</option>
//             <option value="30000">Up to ₹30,000</option>
//           </select>
//         </div>

       
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {filteredProperties.length > 0 ? (
//             filteredProperties.map((prop) => (
//               <div
//                 key={prop.id}
//                 className="border border-gray-200 rounded-lg overflow-hidden shadow"
//               >
//                 <img
//                   src={prop.image}
//                   alt={prop.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="font-semibold mb-2">{prop.title}</h3>
//                   <p className="text-gray-600 mb-2">{prop.location}</p>
//                   <p className="font-bold mb-4">{prop.price}</p>
//                   <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-600">No properties found.</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
