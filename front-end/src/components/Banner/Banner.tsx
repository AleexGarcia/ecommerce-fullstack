import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import data from "./banner.json";
import { useEffect, useState } from "react";
import logowhite from "../../assets/logo_white_sub.svg";

const Banner = () => {
  const [cont, setCont] = useState<number>(0);
  const [srcImg, setSrcImg] = useState<string>(data[cont].url);

  useEffect(() => {
    setSrcImg(data[cont].url);
  }, [cont]);

  const previous = (cont: number) => {
    cont === 0 ? setCont(data.length - 1) : setCont(cont - 1);
  };

  const next = (cont: number) => {
    cont === data.length - 1 ? setCont(0) : setCont(cont + 1);
  };

  return (
    <div className="relative grid grid-rows-[repeat(2,37.5vh)] sm:h-[55vh] lg:h-[calc(100vh-58px)] sm:grid sm:grid-cols-[repeat(2,1fr)] sm:grid-rows-[100%] sm:gap-0">
      <div>
        <img className="w-full h-full object-cover object-center" src={srcImg} alt="" />
      </div>
      <div className="flex flex-row justify-between items-center absolute top-[43%] w-full">
        <button className="p-4 text-white" onClick={() => previous(cont)}>
          <ChevronLeftIcon />
        </button>
        <button className="p-4 text-white" onClick={() => next(cont)}>
          <ChevronRightIcon />
        </button>
      </div>
      <div className="absolute bottom-[5%] w-full flex flex-row gap-4 justify-center">
        <button onClick={() => setCont(0)}>
          <HorizontalRuleIcon className={cont === 0 ? "text-white" : ""} />
        </button>
        <button onClick={() => setCont(1)}>
          <HorizontalRuleIcon className={cont === 1 ? "text-white" : ""} />
        </button>
        <button onClick={() => setCont(2)}>
          <HorizontalRuleIcon className={cont === 2 ? "text-white" : ""} />
        </button>
      </div>

      {data[cont].content.title ? (
        <div
          className={`flex flex-col items-center justify-center text-white gap-4  ${
            cont === 1 ? "bg-[#EE6471]" : "bg-[#F87F46] -order-1"
          } `}
        >
          <h2 className="font-bold text-3xl lg:text-5xl">
            {data[cont].content.title?.toUpperCase()}
          </h2>
          <p className="text-xl">{data[cont].content.paragraph}</p>
        </div>
      ) : (
        <div className="bg-p_purple flex flex-col items-center justify-center">
          <img className="w-[70%]" src={logowhite} alt="" />
        </div>
      )}
    </div>
  );
};

export default Banner;
