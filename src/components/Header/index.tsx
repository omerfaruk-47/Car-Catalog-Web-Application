import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";

const Header = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className=" max-w-[1440px] mx-auto  flex items-center justify-between sm:px-16 px-6 py-4">
        <Link to={"/"}>
          <img src="/bmw.png" alt="bmw-logo" width={50} />
        </Link>

        <CustomButton
          title="Sıng up"
          btnType="button"
          designs="min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Header;
