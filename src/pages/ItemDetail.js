import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { FiShoppingCart } from 'react-icons/fi';

import item1 from '../images/bg.png';

const itemDetail = () => {
    return (
        <>
            <NavBar />
            
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row p-4 min-h-max bg-highlightPrimary bg-opacity-20 rounded-lg border-highlightPrimary2 border-2 border-opacity-10">
                    <div className="flex flex-col mr-6 md:w-96 pb-10">
                        <img src={item1} alt="" className="w-full h-60 rounded-lg mb-4" />
                        <a href="link" className="text-white flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 px-6 py-3 px-3 py-2 rounded-xl">
                            <span className="mr-2">
                                <FiShoppingCart />
                            </span>
                            <span className="text-xs font-regular"> Shop</span>
                        </a>
                    </div>
                    <div className="w-full">
                        <p className="text-gray-400 text-xs font-bold">
                            Collection
                        </p>
                        <h4 className='text-white text-2xl font-bold'>
                            Name of the item
                        </h4>
                        <div className='text-highlightPrimary2 text-xl font-bold'>
                            R$ 200,00
                        </div>
                        <p className="mt-6 mb-1 text-highlightPrimary2">Description</p>
                        <p className="text-white text-xs font-normal pb-10">
                            Lorem ipsum dolor sit amet. Et consequatur officia sit nesciunt doloremque et dolores sint ut optio voluptatem ad harum consequatur est quia quia? Nam tempora corrupti sed exercitationem obcaecati non excepturi cumque id sunt eaque et asperiores dolor. Est nostrum molestiae vel voluptatem sunt sed voluptas consequatur sit molestiae nemo quo eligendi ipsum. Qui error laudantium et tempora nihil ut iste corrupti non fugit reiciendis.
                            Cum sint ipsa quo voluptates accusantium sit possimus quia? Qui blanditiis quia qui illo nesciunt aut aperiam atque et porro rerum in sapiente voluptatum sed totam amet qui blanditiis ducimus. A praesentium quis eum exercitationem commodi aut enim aliquid est omnis neque ex illo voluptatem id dignissimos iusto.
                            Aut consequatur recusandae in blanditiis sequi et esse harum. Et omnis esse sed sint doloribus sed veniam dolorum id pariatur molestiae vel alias nemo est expedita obcaecati. Qui quos provident aut galisum reiciendis ea sunt minima vel voluptas similique est numquam officiis et consequatur adipisci.
                        </p>
                    </div>
                </div>
                   
                
            </main>

            <Footer />
        </>
    )
}

export default itemDetail