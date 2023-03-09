import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

const ShoesCard = ({singleShoes}) => {
    return (
        <>
            <Link to={`/${singleShoes._id}`} className="p-4 group relative bg-highlightPrimary bg-opacity-20 rounded-lg border-highlightPrimary2 border-2 border-opacity-10">
                <img src={singleShoes.image} alt="" className="w-full h-48 rounded-lg mb-4" />
                <p className="text-gray-400 text-xs font-bold">
                    {singleShoes.collections}
                </p>
                <h4 className='text-white text-lg font-bold'>
                    {singleShoes.name}
                </h4>
                <div className='flex flex-row justify-between items-center mt-8'>
                    <div className='text-highlightPrimary2 text-base font-bold'>
                        {singleShoes.price}
                    </div>
                    <Link to={`/${singleShoes._id}`} className="text-white flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 px-6 py-3 px-3 py-2 rounded-xl">
                        <span className="mr-2">
                            <FiShoppingCart />
                        </span>
                        <span className="text-xs font-regular"> Shop</span>
                    </Link>
                </div>
            </Link>
        </>
    )
}

export default ShoesCard


