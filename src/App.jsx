import { Form, Formik } from "formik";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit;
  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1);
  }

  return Math.round(total);
};

function App() {
  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    console.log("🚀 ~ file: App.jsx:16 ~ handleSubmit ~ deposit, contribution, years, rate:", deposit, contribution, years, rate)
    const val = compoundInterest(
      Number(deposit),
      Number(contribution),
      Number(years),
      Number(rate)
    )
    console.log(val);
  };
  return (
    <div className="flex h-screen items-center justify-center bg-slate-300 ">
      <div
        className="bg-white py-12 px-4 rounded-lg w-full border-t-4 border-t-purple-300 shadow-lg
    mx-10 
    sm:mx-[100px] 
    md:mx-[400px] 
    xl:mx-[600px]"
      >
        <Formik
          initialValues={{
            deposit: "",
            contribution: "",
            years: "",
            rate: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input name="deposit" label="Initial Deposit"></Input>
            <Input name="contribution" label="Anual Contribution"></Input>
            <Input name="years" label="Years"></Input>
            <Input name="rate" label="Estimated Interest"></Input>
            <Button />
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default App;
