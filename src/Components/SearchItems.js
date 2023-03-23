// import React , { useState, useEffect } from 'react';
// import Search from './Search';
// function SearchItems(props) {
//     const [search, setSearch] = useState('');
//     const [searchUrl, setSearchUrl] = useState('');
//     const [items, setItems] = useState([]);
//     useEffect(() => {
//         loadData();
//     }, [searchUrl])
//     const loadData = async () => {
//         const baseUrl = "http://localhost:8282";
//         let url = '';
//         if (searchUrl === '') {
//             url = baseUrl + "/api/MenuItems/allitems";
//         } else {
//             url = baseUrl + searchUrl;
//         }
//         const response = await fetch(url);
//         const responseJson = await response.json();
//         setItems(responseJson);
//         console.log(responseJson);
//     }
//     const handleSearch = () => {
//         if (search === '') {
//             setSearchUrl('');
//         } else {
//             setSearchUrl(`/api/MenuItems/searchitem/${search}`)
//         }
//     }
//     return (
//         <div className='container'>
//             <div className="row justify-content-center">
//                 <div className="col-sm-6">
//                     <div className='d-flex'>
//                         <input className='form-control me-2' type='search'
//                             placeholder='Search' aria-labelledby='Search'
//                             onChange={e => setSearch(e.target.value)} />
//                         <button className='btn btn-outline-success'
//                             onClick={() => handleSearch()}>
//                             Search Items
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <>
//                 {items.map(item => (
//                     <Search key={item.itemName} value={item} />
//                 ))}
//             </>
//         </div>
// }
// export default SearchItems;
