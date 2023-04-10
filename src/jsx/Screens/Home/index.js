import { Button } from "@mui/material";
import { useFormik } from "formik";
import InputField from "jsx/Common/FormComponents/InputField";
import CustomRadioCheckbox from "jsx/Common/FormComponents/RadioCheckField";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  check: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
  radioTest: Yup.bool().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});
const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Email",
    accessor: "email",
  },
];

const data = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@example.com",
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Smith",
    email: "bobsmith@example.com",
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Smith",
    email: "alicesmith@example.com",
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Smith",
    email: "alicesmith@example.com",
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Smith",
    email: "alicesmith@example.com",
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Smith",
    email: "alicesmith@example.com",
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Smith",
    email: "alicesmith@example.com",
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Smith",
    email: "alicesmith@example.com",
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Smith",
    email: "alicesmith@example.com",
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Smith",
    email: "alicesmith@example.com",
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Smith",
    email: "alicesmith@example.com",
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Smith",
    email: "alicesmith@example.com",
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Smith",
    email: "alicesmith@example.com",
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Smith",
    email: "alicesmith@example.com",
  },
];

const initialValues = {
  name: "",
  phone: "",
  email: "",
  check: false,
  radioTest: false,
};

const Home = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputField
        label="Full Name"
        name="name"
        type="text"
        cols={6}
        formik={formik}
        required
      />
      <InputField
        label="Phone Number"
        name="phone"
        cols={6}
        formik={formik}
        isPhone
        required
      />
      <InputField
        label="Email Address"
        name="email"
        type="email"
        cols={12}
        formik={formik}
        required
      />
      <CustomRadioCheckbox
        formik={formik}
        name="check"
        type="checkbox"
        required
      />
      <CustomRadioCheckbox
        formik={formik}
        name="radioTest"
        type="radio"
        required
      />
      <InputField
        label="Full Name"
        name="name"
        type="text"
        cols={6}
        formik={formik}
        required
      />
      <InputField
        label="Phone Number"
        name="phone"
        cols={6}
        formik={formik}
        isPhone
        required
      />
      <InputField
        label="Email Address"
        name="email"
        type="email"
        cols={12}
        formik={formik}
        required
      />
      <CustomRadioCheckbox
        formik={formik}
        name="check"
        type="checkbox"
        required
      />
      <CustomRadioCheckbox
        formik={formik}
        name="radioTest"
        type="radio"
        required
      />
      <InputField
        label="Full Name"
        name="name"
        type="text"
        cols={6}
        formik={formik}
        required
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Home;
