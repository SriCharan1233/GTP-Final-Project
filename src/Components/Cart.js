// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

// function Cart(props) {
//   const { itemId } = useParams();
//   const [items, setItems] = useState([]);
//   useEffect(() => {
//     viewItems(itemId);
//   }, []);
//   const viewItems = async (itemId) => {
//     let result = await axios.get(
//       `http://localhost:8282/api/MenuItems/getItemByItemId/${itemId}`
//     );
//     setItems(...items, result.data);
//   };
//   return (
//     <div className="container">
//       <ul className="table shadow">
//         {items.map((item) => {
//           return (
//             <li>
//               <div>
//                 <ul>
//                   <li>Item : {item.itemName}</li>
//                   <li>Price : {item.price}</li>
//                   <Link type="button" className="btn btn-outline-success m-2">
//                     {" "}
//                     Order
//                   </Link>
//                   <Link type="button" className="btn btn-outline-danger m-2">
//                     {" "}
//                     Remove
//                   </Link>
//                 </ul>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default Cart;
