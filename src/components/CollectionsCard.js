import { Link } from 'react-router-dom';

const CollectionsCard = ({collection}) => {
    return (
        <>
            <div className="group relative p-4 bg-opacity-20 rounded-lg border-highlightSecondary border-2 border-opacity-30">
                <Link to={`/${collection._id}`}>
                    <div className='absolute h-full w-full left-0 top-0 bg-gradient-to-b from-highlightSecondary rounded-md opacity-20 z-0'></div>
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-48 relative z-50">
                        <img src={collection.image} alt="Front of men&#039;s Basic Tee in black." className="w-full object-cover object-center lg:h-48 lg:w-full h-48 rounded-lg" />
                    </div>
                    <div className="mt-4 flex justify-between relative z-50">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <span aria-hidden="true" className="absolute inset-0"></span>
                                <span className="text-gray-400 text-xs font-bold">
                                    Collection
                                </span>
                            </h3>
                            <h4 className='text-white text-lg font-bold'>
                                {collection.name}
                            </h4>
                        </div>
                    </div>
                </Link>
            </div> 
        </>
    )
}

export default CollectionsCard


