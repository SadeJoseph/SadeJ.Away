import {
  FaSquareInstagram,
  FaSquareSnapchat,
} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-5 bg-tertiary mt-10 fixed bottom-0 rounded">
      <div className="w-[95%] mx-auto max-w-[1450px]">
        <div
          className="py-5 border-b border-light border-opacity-20 flex justify-between
            items-center max-md:flex-col maxmd:gap-8 "
        >
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold text-primary">
              Sade
              <span className="text-light">J</span>
              Away
            </h1>
          </div>

          <ul
            className="flex item-center justify-center gap-16 flex-1 text-light
           max-md:flex-col max-md:gap-5"
          >
            <h1>Home</h1>
            <h1>Posts</h1>
            <h1>About</h1>
            <h1>Contact</h1>
          </ul>
          <div className="flex gap-5 text-primary flex-1 justify-end text-2xl">
            <FaFacebookSquare />
            <FaSquareInstagram />
            <FaSquareSnapchat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
