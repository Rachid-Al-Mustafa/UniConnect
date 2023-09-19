import {MdOutlineClose, MdEmail} from "react-icons/md";
import {RiGraduationCapFill} from "react-icons/ri";
import {BiSolidBuildingHouse} from "react-icons/bi";
import {FaLocationDot} from "react-icons/fa6";
import {BsFillTelephoneFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import UserDetail from "./../UserDetail"

const index = ({showUserDetails, setShowUserDetails}) => {

    return (
        <div
            className={`absolute top-0 bg-white dark:bg-black dark:text-white community-details h-screen w-[80%] xs:w-[70%] sm:w-[55%] smd:w-[48%] md:w-[42%] lg:w-[35%] xl:w-[27%] z-50 transition-all duration-300 ease-linear border-l-[2px] ${showUserDetails
            ? "right-0"
            : "-left-full"}`}>
            <div className="pb-4 border-b-2 border-grayHard">
                <div className="flex items-center justify-end pr-4 py-4 pb-1 ">
                    <div>
                        <MdOutlineClose
                            onClick={() => setShowUserDetails((prev) => !prev)}
                            className="cursor-pointer"
                            size={30}/>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Link
                        className="w-[120px] h-[120px] rounded-full overflow-hidden flex items-center justify-center">
                        <img
                            className="cursor-pointer"
                            src="https://img.freepik.com/free-photo/profile-shot-aristocratic-girl-blouse-with-frill-lady-with-flowers-her-hair-posing-proudly-against-blue-wall_197531-14304.jpg?w=360&t=st=1693254715~exp=1693255315~hmac=11fc761d3797e16d0e4b26b5b027e97687491af623985635a159833dfb9f7826"
                            alt="profile-picture"/>
                    </Link>
                    <Link className="text-2xl cursor-pointer">Mohammad Hussein</Link>
                </div>
            </div>
            <div className="p-4 flex flex-col gap-2">
                <UserDetail
                    icon={< MdEmail size = {
                    20
                } />}
                    label="Email"
                    value="mohammad.hussein377@gmail.com"/>
                <UserDetail
                    icon={< RiGraduationCapFill size = {
                    20
                } />}
                    label="Major"
                    value="Computer Science"/>
                <UserDetail
                    icon={< BiSolidBuildingHouse size = {
                    20
                } />}
                    label="University"
                    value="Toronto University"/>
                <UserDetail
                    icon={< FaLocationDot size = {
                    20
                } />}
                    label="Location"
                    value="Berlin, Germany"/>
                <UserDetail
                    icon={< BsFillTelephoneFill size = {
                    20
                } />}
                    label="Phone"
                    value="81 954 732"/>
            </div>
        </div>
    );
};

export default index;
