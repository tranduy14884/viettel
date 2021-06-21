import { yupResolver } from '@hookform/resolvers/yup';
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
const schema = yup.object().shape({
    nameInput: yup.string().required("Vui lòng nhập vào trường này"),
    speedInput: yup.number().typeError("Vui lòng nhập số").positive().integer().required('Vui lòng nhập vào trường này'),
    priceInput: yup.number().typeError("Vui lòng nhập số").positive().integer().required('Vui lòng nhập vào trường này'),
    km6: yup.number().typeError("Vui lòng nhập số").positive().integer().required('Vui lòng nhập vào trường này'),
    km12: yup.number().typeError("Vui lòng nhập số").positive().integer().required('Vui lòng nhập vào trường này'),
    iptinh: yup.number().typeError("Vui lòng nhập số").positive().integer().required('Vui lòng nhập vào trường này'),
  });
function FormAdd(props) {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const nameForm = useRef();
      const speedForm = useRef();
      const priceForm = useRef();
      const km6Form = useRef();
      const km12Form = useRef();
      const iptinhForm = useRef();
      const onSubmit = data => {
          const dataForm = {
              name : nameForm.current.value,
              speed : parseInt(speedForm.current.value),
              price : parseInt(priceForm.current.value),
              halfYear : parseInt(km6Form.current.value),
              fullYear : parseInt(km12Form.current.value),
              Ip : parseInt(iptinhForm.current.value),
          }
          console.log(dataForm);
      };
  return (
    <div className="container form-add-data">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Tên gói cước</p>
        <input {...register("nameInput")} ref={nameForm}/>
        <p className="data-form-error">{errors.nameInput?.message}</p>
        <p>Tốc độ</p>
        <input {...register("speedInput")} ref={speedForm}  />
        <p className="data-form-error">{errors.speedInput?.message}</p>
        <p>Giá</p>
        <input {...register("priceInput")} ref={priceForm} />
        <p className="data-form-error">{errors.priceInput?.message}</p>
        <p>Khuyến mãi 6 tháng</p>
        <input {...register("km6")} ref={km6Form}  />
        <p className="data-form-error">{errors.km6?.message}</p>
        <p>Khuyến mãi 12 tháng</p>
        <input {...register("km12")} ref={km12Form}  />
        <p className="data-form-error">{errors.km12?.message}</p>
        <p>Ip tĩnh</p>
        <input {...register("iptinh")} ref={iptinhForm}  />
        <p className="data-form-error">{errors.iptinh?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
}

export default FormAdd;
