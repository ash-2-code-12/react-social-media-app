import { TbBrandThreejs } from "react-icons/tb";
import { MdVerified } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { RxOpenInNewWindow } from "react-icons/rx";
import { LuFilter } from "react-icons/lu";



const SideBar = (keyObj) => {



    return (
        
        <div className="sideBar">
            <div class="side-nav text-center shadow-lg">
                <div class="user ">
                <TbBrandThreejs size="60" className="user-img"/>
                    <div>
                        <h2>Pixalos</h2>
                        
                    </div>
                    <MdVerified size={20} className="star-img" /> 
                </div>
                <div class="mid-div">
                    <ul>
                        <li>
                            <GrHomeRounded size="25"/>
                            <p>Home</p>
                        </li>
                        <li>
                            <FiEdit size="25" />
                            <p>Edit Posts</p>
                        </li>
                        <li onClick={keyObj.onNewPost}>
                            <RxOpenInNewWindow size="25" />
                            <p>New Post</p>
                        </li>
                        <li onClick={keyObj.onFilterPost}>
                            <LuFilter size="23" />
                            <p>Filter Post</p>
                        </li>
                        
                    </ul>
                </div>
                <ul class="logout">
                    <li>
                        <i class="fa-solid fa-arrow-right-from-bracket fa-xl"></i>
                        <p>Logout</p>
                    </li>
                </ul>
            </div>
        </div>
        // <div class="w-auto section-main">
        //     <p class="fs-5">This section is for right side of side bar
        //         to make it slide just remove the position:fixed in .side-nav and remove mar-left in section-main
        //     </p>
        // </div>

    );

}
export { SideBar }