import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import xImage from "../assets/analyticImages/x.svg";
import camera from "../assets/analyticImages/camera.svg";
import { useDispatch } from "react-redux";
import { setAnaliyticUser } from "@/lib/redux-toolkit/slices/commerse-slice";
export default function AnalyticForm({ onClose }) {
  const dispatch = useDispatch();
  const initialValues = {
    imgFile: null,
    fristName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
  };

  const validationSchema = Yup.object({
    imgFile: Yup.mixed().required("Photo is required"),
    fristName: Yup.string()
      .min(3, "Minimum 3 characters")
      .required("Name is required"),
    lastName: Yup.string()
      .min(3, "Minimum 3 characters")
      .required("Last name is required"),
    email: Yup.string().email("Email noto‘g‘ri").required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    gender: Yup.string().required("Gender is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formadagi Malumot", values);
    // dispatch(setAnaliyticUser(values));
    resetForm();
    onClose();
  };

  return (
    <div className=" w-[409px] h-full min-h-[1035px]  rounded-l-[10px] bg-[#FFFFFF]  pt-[40px] px-[30px] transition-transform duration-300 z-50">
      <div className="flex items-center justify-between">
        <h2 className="text-xl text-[#030229] font-semibold mb-4">
          Add Customer
        </h2>
        <button
          onClick={onClose}
          className=" bg-[#FEF3F5] p-[15px] rounded-[50%] cursor-pointer"
        >
          <img src={xImage} alt="" />
        </button>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="flex  flex-col gap-[15px]">
            <div className="flex flex-col items-center justify-center">
              <label className=" px-[53px] max-w-[134px] mt-[34px] mb-[25px] flex items-center py-[55px] rounded-[50%] bg-[#F7F7F8]">
                <img width={27} height={23} src={camera} alt="" />
                <input
                  className="hidden"
                  type="file"
                  onChange={(e) => {
                    const file = e.currentTarget.files[0];
                    setFieldValue("imgFile", file);
                  }}
                />
              </label>

              <ErrorMessage
                name="imgFile"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <label className="text-[#030229] text-[14px]">First Name</label>
            <Field
              name="fristName"
              type="text"
              className="border pl-5 py-[18px] rounded bg-[#F7F7F8]"
              placeholder="John"
            />
            <ErrorMessage
              name="fristName"
              component="div"
              className="text-red-500 text-sm"
            />

            <label className="text-[#030229] text-[14px]">Last Name</label>
            <Field
              name="lastName"
              type="text"
              className="border pl-5 py-[18px] rounded bg-[#F7F7F8]"
              placeholder="Doe"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-500 text-sm"
            />

            <label className="text-[#030229] text-[14px]">Email</label>
            <Field
              name="email"
              type="email"
              className="border pl-5 py-[18px] rounded bg-[#F7F7F8]"
              placeholder="Example@gmail.com"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />

            <label className="text-[#030229] text-[14px]">Phone Number</label>
            <Field
              name="phoneNumber"
              type="text"
              className="border pl-5 py-[18px] rounded bg-[#F7F7F8] placeholder: "
              placeholder="33757005467"
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="text-red-500 text-sm"
            />

            <label className="text-[#42415F] text-[14px]">Gender</label>
            <Field
              as="select"
              name="gender"
              className="border pl-5 py-[18px] rounded bg-[#F7F7F8]"
            >
              <option disabled selected>
                Select gender
              </option>
              <option value="male" className="text-[#62617A]">
                Male
              </option>
              <option value="female" className="text-[#62617A]">
                Female
              </option>
            </Field>
            <ErrorMessage
              name="gender"
              component="div"
              className="text-red-500 text-sm"
            />

            <button
              type="submit"
              className=" bg-[#605BFF] text-[#FFFFFF] p-4 mt-[25px] rounded-[10px] cursor-pointer  "
            >
              Add Customer
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
