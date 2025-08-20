import nike from "../assets/Nike.svg";
import iphone from "../assets/iPhone-12.svg";
import star from "../assets/star.svg";
import menu from "../assets/Menu.svg";
export default function Card() {
  const cardData = [
    { img: nike, title: "NIKE Shoes Black Pattern", price: "$87" },
    { img: iphone, title: "iPhone 12", price: "$987" },
  ];
  return (
    <div className="bg-[#FFFFFF]  w-[430px] p-[25px] rounded-[10px] 2xl:w-[500px]">
      <div className="flex items-center justify-between ">
        <h2 className="text-[#000000] font-bold opacity-70 mb-[25px]">
          Top Selling Products
        </h2>
        <img src={menu} alt="" />
      </div>
      <div className="flex flex-col">
        {cardData.map(({ img, title, price }, i) => {
          return (
            <div
              key={title}
              className={`flex items-center text-start gap-[21px] ${
                i == 0 ? "border-b  pb-6 " : "pt-6"
              } `}
            >
              <div className={`${i == 0 ? "" : "bg-[#D4E5F0] p-4 rounded-[10px]"} `}>
                <img src={img} alt="" />
              </div>
              <div className="flex flex-col gap-3">
                <h3>{title}</h3>
                <img src={star} alt="" width={83} />
                <p className="text-[#000000] font-bold">{price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
