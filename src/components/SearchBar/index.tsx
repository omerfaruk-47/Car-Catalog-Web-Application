import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReactSelect from "react-select";
import { OptionType } from "../../types";
import { makes } from "../../constants";

type ButtonProps = {
  styling: string;
};

const SearchButton = ({ styling }: ButtonProps) => {
  return (
    <button className={`ml-3 z-10 ${styling}`}>
      <img src="/public/magnifying-glass.svg" alt="" />
    </button>
  );
};

const SearchBar = () => {
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const [params, setParams] = useSearchParams();

  /*
   * Eventlarda parametrelerin tipini kendimiz tanımlayamayız.
   * React ta yerleşik olarak bulunan tipleri kullanırız.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Url e make ve model parametrelerini ekle
    setParams({
      make: make.toLowerCase(),
      model: model.toLowerCase(),
    });
  };

  const options: OptionType[] = useMemo(
    () =>
      makes.map((item) => ({
        label: item,
        value: item,
      })),
    [make]
  );
  return (
    <form className="searchbar gap-3" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <ReactSelect
          options={options}
          onChange={(e) => e && setMake(e.value)}
          className="w-full text-black"
        />
        <SearchButton styling={"sm:hidden"} />
      </div>

      <div className="searchbar__item">
        <img
          src="/model-icon.png"
          width={25}
          className="absolute ml-4"
          alt=""
        />
        <input
          type="text"
          placeholder="ör:Bmw,Audi"
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input
          text-black"
        />

        <SearchButton styling={"sm:hidden"} />
      </div>

      <SearchButton styling={"max-sm:hidden"} />
    </form>
  );
};

export default SearchBar;
