import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";
import { RiCodeSSlashLine} from "react-icons/ri";
import { FaFileAlt } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";




const Home = () => {
    return (
        <div className="home"><div className="icons">
            
                <AiFillGithub className="icon"/>
                <MdPhoneIphone className="icon"/>
                <RiCodeSSlashLine className="icon"/>
                <FaFileAlt className="icon"/>
                <BsFillPersonLinesFill className="icon"/>
                </div>
            <div className="hero">
                
                <div className="name-box">
                    <h1>HI, I'M <br/>
                    <span className="name">
                      TASNIM ALOM
                    </span><br/>
                    <span className="title-text">
                        I AM </span> <span className="change-text">
                    </span>
                    </h1>
                </div>
               
                <div className="taz-box" >
                    <img className="taz" src="https://i.ibb.co/84DKczR/taz-port.png" alt="taz"/>
                </div>
            </div>
        </div>
    )
}



export default Home
