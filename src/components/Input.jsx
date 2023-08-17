/* eslint-disable react/prop-types */

import { useField } from "formik";

export const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-3">
      <label className="text-xl inline-block mb-2 font-semibold text-slate-500">{label}</label>
      <input {...field} {...props}  className="outline-1 outline-indigo-400 border-indigo-300 border-2 w-full rounded-md py-1 "/>
      {meta.touched && meta.error ? (
        <div>
          <span className="font-semibold text-red-400">Mensaje de error</span>
        </div>
      ) : null}
    </div>
  );
};
