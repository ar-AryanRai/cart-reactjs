import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ cartsData }) => {
  const [len, setLen] = useState(0);

  useEffect(() => {
    setLen(cartsData.length);
  }, [cartsData]);

  return (
    <div className="h-[15vh] flex justify-between items-center px-4 w-[100%] fixed top-[0] bg-blue-400">
      <div className="logo w-[30%] h-[80%] lg:w-[20%] bg-[#1b253b] rounded-full">
        <Link to="/" className="w-[60%]">
          <img className="w-[100%] h-[90%]" src={logo} alt="" />
        </Link>
      </div>
      <Link to="/cart">
        <div className="lg:pr-4">
          <FontAwesomeIcon
            className="text-2xl relative"
            icon={faCartShopping}
          />
          <p className="text-center w-[22px] h-[15px] pb-6 fixed top-9 right-2 lg:right-5 lg:top-8 bg-red-400 font-semibold rounded-[50%]">
            {len}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Nav;
