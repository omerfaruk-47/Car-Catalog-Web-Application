import { useEffect, useState } from "react";
import Select from "react-select";
import { OptionType } from "../../types";
import { useSearchParams } from "react-router-dom";
type CustomFilterType = {
  title: string;
  options: OptionType[];
};

const CustomFilter = ({ title, options }: CustomFilterType) => {
  const [selected, setSelected] = useState<OptionType | null>();
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    //Url eklenecek parametreyi belirleme
    const key = title === "Yakıt Tipi" ? "fuel" : "year";
    if (selected?.value) {
      params.set(key, selected.value.toLocaleLowerCase());
    } else {
      params.delete(key);
    }

    //url güncelle
    setParams(params);
  }, [selected]);
  return (
    <div>
      <Select
        options={options}
        placeholder={title}
        className="text-black min-w-[120px]"
        onChange={(e) => setSelected(e)}
      />
    </div>
  );
};

export default CustomFilter;
