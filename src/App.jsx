import { Form, Formik } from "formik";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { useState } from "react";

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit;
  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1);
  }

  return Math.round(total);
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function App() {
  const [balance, setBalance] = useState("");
  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest(
      Number(deposit),
      Number(contribution),
      Number(years),
      Number(rate)
    );
    setBalance(formatter.format(val));
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
        
        {balance !== "" ? <div className="flex items-center justify-center text-2xl font-semibold text-slate-600 mt-10">Final Balance: {balance}</div> : null}
      </div>
    </div>
  );
}

export default App;
