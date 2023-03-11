import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

const ShoesCard = ({singleShoes}) => {
    return (
        <>
            <Link to={`/products/${singleShoes._id}`} className="p-4 group relative bg-highlightPrimary bg-opacity-20 border-highlightPrimary2 border-2 border-opacity-10">
                <img src={singleShoes.image} alt="" className="w-full object-cover object-center lg:h-48 lg:w-full h-48" />
                <h5 className='text-white text-opacity-50 text-xs font-light mt-5'>
                    {singleShoes.brand}
                </h5>
                <h4 className='text-white text-md font-light'>
                    {singleShoes.name}
                </h4>
                <div className='flex flex-row justify-between items-center mt-5'>
                    {/* <div className='text-highlightPrimary2 text-base font-bold'>
                        R$ {singleShoes.price}
                    </div> */}
                    <Link to={`/products/${singleShoes._id}`} className="text-white flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 px-6 py-3 w-full rounded-xl">
                        <span className="mr-2">
                            <FiShoppingCart/>
                        </span>
                        <span className="text-xs font-regular"> </span>
                    </Link>
                </div>
            </Link>
        </>
    )
}

export default ShoesCard


