export default function GenderBage({ gender }) {
  if (gender == "male") {
    return (
      <div className="text-[#5B93FF] bg-[#EFF5FF] rounded-[33px] flex items-center justify-center w-[68px] px-[18px] py-[5px] text-[14px]">
        {gender}
      </div>
    );
  }
  return (
    <div className="rounded-[33px] text-[14px] text-[#FF8F6B] bg-[#FEF3F0] flex items-center justify-center w-[75px] px-[18px] py-[5px]">
      {gender}
    </div>
  );
}
