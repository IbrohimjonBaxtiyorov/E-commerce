import Game from "../assets/cardimg/Game.svg";
import Heart from "../assets/cardimg/Heart.svg";
import Sales from "../assets/cardimg/Sales.svg";
import Work from "../assets/cardimg/Work.svg";

export default function DashboardCards() {
  const CardData = [
    {
      img: Heart,
      background: "#eff5ff",
      text: "Save Products",
      number: "178+",
    },
    {
      img: Game,
      background: "#FFF7E1",
      text: "Stock Products",
      number: "20+",
    },
    {
      img: Sales,
      background: "#fff4f1",
      text: "Sales Products",
      number: "190+",
    },
    {
      img: Work,
      background: "#f0efff",
      text: "Job Application",
      number: "12+",
    },
  ];

  return (
    <div className="flex items-center justify-between pt-[38px]">
      {CardData.map(({ img, background, text, number }) => {
        return (
          <div
            key={background}
            className="flex items-center gap-[23px] bg-[#FFFFFF] rounded-[10px] p-7 pr-[63px]"
          >
            <div
              className={`rounded-[50%] p-5`}
              style={{ backgroundColor: background }}
            >
              <img src={img} alt={text} width={20} height={20} />
            </div>
            <div>
              <h2 className="text-[#030229] font-extrabold text-[22px] opacity-70 ">
                {number}
              </h2>
              <p className="opacity-70 text-[#030229] text-[14px]">{text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
