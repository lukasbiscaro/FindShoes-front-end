import NavBarLogged from "../components/NavBarLogged"
import { FaLock } from 'react-icons/fa'

const ProfilePage = () => {
    return (
        <>
            <NavBarLogged />
            <div className="container max-w-screen-lg mx-auto px-5 py-8">
                <div className="border border-highlightPrimary2 flex flex-col justify-between md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-purple-500 bg-opacity-10 w-full p-8 rounded-xl shadow-lg text-white
            ">
                    <div className="flex flex-col space-y-8">
                        <div>
                            <h1 className="font-bold text-4xl tracking-wide">Personal Information</h1>
                        </div>
                        <div className="flex flex-col space-y-6 ">
                            <div>
                                <div className="text-lg font-bold text-highlightPrimary2">Full Name:</div>
                                <p>Lukas Biscaro</p>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-highlightPrimary2">Your Email Address:</div>
                                <p>test@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-bgPrimary rounded-xl shadow-lg p-8 text-gray-800">
                            <form className="flex flex-col space-y-4">
                                <div className="flex justify-between gap-5">
                                    <div>
                                        <label className="text-lg text-highlightPrimary2">Edit First Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter new first name..."
                                            className="mt-4 focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-3 focus:outline-none sm:text-sm placeholder:text-sm placeholder:text-gray-600" />
                                    </div>
                                    <div>
                                        <label className="text-lg text-highlightPrimary2">Edit Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter new last name..."
                                            className="mt-4 focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-3 focus:outline-none sm:text-sm placeholder:text-sm placeholder:text-gray-600" />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-lg text-highlightPrimary2">Actual Email</label>
                                    <input
                                        disabled
                                        value="test@gmail.com"
                                        type="text"
                                        className="mt-4 w-full appearance-none rounded-md bg-black text-white px-3 py-3 hover:cursor-not-allowed border border-highlightPrimary" />
                                </div>
                                <div>
                                    <label className="text-lg text-highlightPrimary2">Edit Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter new password..."
                                        className="mt-4 focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-3 focus:outline-none sm:text-sm placeholder:text-sm placeholder:text-gray-600" />
                                </div>
                                <div>
                                    <label className="text-lg text-highlightPrimary2">Confirm New Password</label>
                                    <input
                                        type="password"
                                        placeholder="Confirm new password..."
                                        className="mt-4 focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-3 focus:outline-none sm:text-sm placeholder:text-sm placeholder:text-gray-600" />
                                </div>
                            </form>
                            <button className="w-full flex items-center justify-center gap-3 self-center bg-highlightPrimary text-white font-light rounded-lg px-6 py-2 mt-10 mb-3">
                                <FaLock className="text-black" />Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage







