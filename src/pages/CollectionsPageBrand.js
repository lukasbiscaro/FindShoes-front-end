// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import NavBar from '../components/NavBar'
// import Footer from '../components/Footer'
// import { Link, useParams } from 'react-router-dom'

// const CollectionsPageBrand = () => {
//     const { brand } = useParams()
//     const [dataProducts, setDataProducts] = useState([])

//     console.log(dataProducts)

//     useEffect(() => {
//         axios.get(`${process.env.REACT_APP_API_URL}/collections/${brand}`)
//             .then(response => {
//                 setDataProducts(response.data)
//             })
//             .catch(err => console.log(err))
//     }, [brand])

//     return (
//         <>

//             <NavBar />
//             <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//                 <div className="flex flex-col relative justify-center items-center mt-6 sm:mt-6">
//                     <h1 className="font-bold text-white text-center leading-none text-7xl mx-56 relative mb-4">
//                         {brand} Collection
//                     </h1>
//                 </div>
//                 <div className="mx-auto max-w-2xl lg:max-w-7xl">
//                     <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//                         {
//                             dataProducts.length > 0 && dataProducts.map((product) => {
//                                 return (
//                                     <div>
//                                         {/* <div>
//                                             <div className="min-h-full aspect-w-1 aspect-h-1 w-full overflow-hidden group-hover:opacity-75 lg:aspect-none lg:h-48 relative z-50 object-cover object-center lg:w-full h-48">
//                                                 <img
//                                                     src={product.image}
//                                                     alt="brand-img" />
//                                             </div>
//                                             <div className="flex justify-between relative z-50">
//                                                 <h4 className='text-white text-lg font-bold my-5 uppercase'>
//                                                     {product.name}
//                                                 </h4>
//                                                 <p className="text-white text-lg font-bold my-5">{product.price}</p>
//                                             </div>
//                                             <Link
//                                                 to={`/all-products/${product._id}`}
//                                                 className="w-full transition-all duration-500 ease-in-out group inline-flex items-center justify-center py-2 px-6 text-sm font-light focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 border-b-2 border-highlightPrimary bg-highlightPrimary bg-opacity-20 text-white hover:text-black active:bg-highlightPrimary2 active:text-blue-100 focus-visible:outline-highlightPrimary2 uppercase hover:font-bold ">
//                                                 <span className="mr-2">
//                                                     view product
//                                                 </span>
//                                             </Link>
//                                         </div> */}
//                                         <div className="p-4 group relative bg-bgLogin bg-opacity-50">
//                                             <img
//                                                 src={product.image}
//                                                 alt="shoe-img"
//                                                 className="w-full object-cover object-center lg:h-48 h-48" />
//                                             <h5 className='text-white text-opacity-50 text-xs font-light mt-5'>
//                                                 {product.collections}
//                                             </h5>
//                                             <h4 className='text-white text-md font-light'>
//                                                 {product.name}
//                                             </h4>
//                                             <div className='flex flex-row justify-between items-center mt-5'>
//                                                 <Link
//                                                     to={`/all-products/${product._id}`}
//                                                     className="w-full transition-all duration-500 ease-in-out group inline-flex items-center justify-center py-2 px-6 text-sm font-bold border-b-4 border-highlightPrimary bg-highlightPrimary bg-opacity-20 uppercase">
//                                                     <span className='text-white text-opacity-50 hover:text-opacity-100 transition-all duration-300 ease-in-out'>
//                                                         view product
//                                                     </span>
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                     </div>


//                                 )
//                             })
//                         }
//                     </div>
//                 </div>
//             </main>
//             <Footer />
//         </>
//     )
// }

// export default CollectionsPageBrand