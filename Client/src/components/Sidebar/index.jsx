import {AiFillHome} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import {BsThreeDots} from "react-icons/bs";
import {AiOutlinePlus} from "react-icons/ai"
import {RiCommunityFill} from "react-icons/ri";
import {FaUserPlus} from "react-icons/fa"
import {Link} from "react-router-dom";
import {Fragment, useState} from "react";
import Friend from "./../Friend"

const index = () => {

    let [friends, setFriends] = useState([<Friend />, <Friend />]);
    let [communities, setCommunities] = useState([<Community />]);

    return (
        <div
            className={`w-[80%] sm:w-[65%] smd:w-[55%] md:w-[45%] flex flex-col h-full border-r-[2px] border-grayHard absolute top-0 -left-full sidebar`}>
            <div
                className="flex items-center justify-center px-4 border-b-[2px] border-grayHard">
                <div
                    className={`-mb-[1.5px] flex items-center gap-2 px-6 py-[22px] border-opacity-0 border-b-[3px] font-medium text-lg cursor-pointer border-transparent`}>
                    <AiFillHome size={25}/>
                    Communities
                </div>
                <div
                    className={`-mb-[1.5px] flex items-center gap-2 px-6 py-[22px] border-opacity-0 border-b-[3px] font-medium text-lg cursor-pointer border-transparent`}>
                    <MdEmail size={25}/>
                    Inbox
                </div>
            </div>
            <div
                className="flex-grow w-full max-h-full overflow-y-scroll scrollbar-hide  bg-white">
                {type === "inbox" && (friends.length > 0
                    ? (friends.map((item) => item))
                    : (
                        <div className="h-full flex gap-4 items-center justify-center p-4">
                            <div className="p-1.5 rounded-md bg-secondary bg-opacity-30">
                                <FaUserPlus className="text-primary" size={45}/>
                            </div>
                            <h1 className="font-medium text-[22px]">
                                Connect with Others to Expand Your Circle!
                            </h1>
                        </div>
                    ))}
                {type === "community" && (communities.length > 0
                    ? (communities.map((item) => item))
                    : (
                        <div className="h-full flex gap-4 items-center justify-center p-4">
                            <div className="p-1.5 rounded-md bg-secondary bg-opacity-30">
                                <RiCommunityFill className="text-primary" size={50}/>
                            </div>
                            <h1 className="font-medium text-[22px]">
                                Explore New Communities to Connect With!
                            </h1>
                        </div>
                    ))}
            </div>
            {type === "community" && (
                <Fragment>
                    <div className="my-2"></div>
                    <div className="bg-transparent w-full px-4">
                        <button
                            onClick={() => setShowCommunityModal(true)}
                            className="py-3 mb-3 bg-primary text-white rounded-md w-full flex items-center justify-center gap-2 font-medium">
                            <AiOutlinePlus size={22}/>
                            New Community
                        </button>
                    </div>
                </Fragment>
            )}
            <div
                className="border-t-[2px] flex items-center justify-between px-4 py-3 bg-white ">
                <div className="flex items-center gap-3 w-full">
                    <Link
                        to={`/profile?username=mhmd377`}
                        className="w-[60px] h-[60px] rounded-full overflow-hidden flex items-center justify-center">
                        <img
                            src="https://img.freepik.com/free-photo/profile-shot-aristocratic-girl-blouse-with-frill-lady-with-flowers-her-hair-posing-proudly-against-blue-wall_197531-14304.jpg?w=360&t=st=1693254715~exp=1693255315~hmac=11fc761d3797e16d0e4b26b5b027e97687491af623985635a159833dfb9f7826"
                            alt="profile-picture"/>
                    </Link>
                    <div className="flex flex-col">
                        <div className="text-lg font-semibold">Mohammad Hussein</div>
                        <p className="text-[#737373] font-medium">mhmd377</p>
                    </div>
                </div>
                <BsThreeDots className="cursor-pointer" size={30}/>
            </div>
        </div>
    );
}

export default index