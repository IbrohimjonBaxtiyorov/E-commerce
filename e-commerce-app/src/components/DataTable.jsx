import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import menu from "../assets/Menu.svg";
import arrow from "../assets/Arrow.svg";
import oil from "../assets/oil.svg";
import dress from "../assets/dress.svg";
import camera from "../assets/camera.svg";
import parfum from "../assets/parfum.svg";

const invoices = [
  {
    img: camera,
    invoice: "#876364",
    name: "Camera Lens",
    order: "325",
    totalAmount: "$1,46,660",
    Price: "$178",
  },
  {
    img: dress,
    invoice: "#876368",
    name: "Black Sleep Dress",
    order: "53",
    totalAmount: "$46,660",
    Price: "$14",
  },
  {
    img: oil,
    invoice: "#876412",
    name: "Argan Oil",
    order: "78",
    totalAmount: "$3,46,676",
    Price: "$21",
  },
  {
    img: parfum,
    invoice: "#876621",
    name: "EAU DE Parfum",
    order: "98",
    totalAmount: "$3,46,676",
    Price: "$32",
  },
];

const tableHeaders = [
  { label: "Tracking no", align: "left" },
  { label: "Product Name", align: "left" },
  { label: "Price", align: "left" },
  { label: "Total Order", align: "right" },
  { label: "Total Amount", align: "right" },
];

export function DataTable() {
  return (
    <div className="bg-[#FFFFFF] rounded-[10px] w-full max-w-[708px] mt-7">
      <div className=" rounded-[10px] p-6 ">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[#030229] font-bold opacity-70 ">
            Recent Orders
          </h3>
          <img src={menu} alt="" />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              {tableHeaders.map(({ label }, i) => {
                return (
                  <TableHead
                    key={label}
                    className={
                      i >= tableHeaders.length - 2 ? "text-right" : "text-left"
                    }
                  >
                    {label}{" "}
                    <img src={arrow} className="inline-block ml-3" alt="" />
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody className={""}>
            {invoices.map((invoice, i) => (
              <TableRow
                className={`border-none ${
                  i % 2 == 0 ? "bg-[#FAFAFB]" : ""
                } rounded `}
                key={invoice.invoice}
              >
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>
                  <img src={invoice.img} className="inline-block mr-3" alt="" />
                  {invoice.name}
                </TableCell>
                <TableCell>{invoice.Price}</TableCell>
                <TableCell className=" flex items-end justify-center">
                  <div className="w-[61px] bg-[#EAF9FD] text-[#26C0E2] px-[21px] py-[7px] rounded-[8px]">
                    {invoice.order}
                  </div>
                </TableCell>
                <TableCell className={"text-right"}>
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
