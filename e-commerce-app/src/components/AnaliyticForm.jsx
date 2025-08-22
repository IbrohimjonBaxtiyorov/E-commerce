import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import xImage from "../assets/analyticImages/x.svg";
import camera from "../assets/analyticImages/camera.svg";
export default function AnalyticForm({ onClose }) {
  const initialValues = {
    imgFile: null,
    fristName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
  };

  const validationSchema = Yup.object({
    imgFile: Yup.mixed().required("Rasm yuklash majburiy"),
    fristName: Yup.string()
      .min(3, "Kamida 3 ta harf bo‘lsin")
      .required("Ism kiritish majburiy"),
    lastName: Yup.string()
      .min(3, "Kamida 3 ta harf bo‘lsin")
      .required("Familiya kiritish majburiy"),
    email: Yup.string().email("Email noto‘g‘ri").required("Email majburiy"),
    phoneNumber: Yup.string().required("Telefon raqam majburiy"),
    gender: Yup.string().required("Jinsingizni tanlang"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Yangi mijoz:", values);
    resetForm();
    onClose();
  };

  return (
    <div className="fixed top-0 right-0 w-[400px] h-full bg-white shadow-lg p-6 transition-transform duration-300 z-50">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 bg-[#FEF3F5] p-[15px] rounded-[50%]"
      >
        <img src={xImage} alt="" />
      </button>

      <h2 className="text-xl text-[#030229] font-semibold mb-4">
        Add Customer
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="flex flex-col gap-3">
            <label className="px-[53px] max-w-[134px] flex items-center justify-center py-[55px] rounded-[50%] bg-[#F7F7F8]">
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

            <label>First Name</label>
            <Field
              name="fristName"
              type="text"
              className="border p-2 rounded"
            />
            <ErrorMessage
              name="fristName"
              component="div"
              className="text-red-500 text-sm"
            />

            <label>Last Name</label>
            <Field name="lastName" type="text" className="border p-2 rounded" />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-500 text-sm"
            />

            <label>Email</label>
            <Field name="email" type="email" className="border p-2 rounded" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />

            <label>Phone Number</label>
            <Field
              name="phoneNumber"
              type="text"
              className="border p-2 rounded"
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="text-red-500 text-sm"
            />

            <label>Gender</label>
            <Field as="select" name="gender" className="border p-2 rounded">
              <option value="male">Erkak</option>
              <option value="female">Ayol</option>
            </Field>
            <ErrorMessage
              name="gender"
              component="div"
              className="text-red-500 text-sm"
            />

            <ErrorMessage
              name="imgFile"
              component="div"
              className="text-red-500 text-sm"
            />

            <button
              type="submit"
              className="bg-[#605BFF] text-white p-2 rounded mt-4"
            >
             Add Customer
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
