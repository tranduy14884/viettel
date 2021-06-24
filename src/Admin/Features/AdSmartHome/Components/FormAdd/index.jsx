import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useRef } from "react";
const schema = yup.object().shape({
    nameInput: yup.string().required("Vui lòng nhập vào trường này"),
    speedInput: yup.string().required('Vui lòng nhập vào trường này'),
    priceInput: yup.number().typeError("Vui lòng nhập số").positive().integer().required('Vui lòng nhập vào trường này'),
    km6: yup.number().typeError("Vui lòng nhập số").positive().integer().required('Vui lòng nhập vào trường này'),
    km12: yup.number().typeError("Vui lòng nhập số").positive().integer().required('Vui lòng nhập vào trường này'),
    modem: yup.number().typeError("Vui lòng nhập số").positive().integer().required('Vui lòng nhập vào trường này'),
    wifi: yup.number().typeError("Vui lòng nhập số").positive().integer().required('Vui lòng nhập vào trường này'),
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
      const modemForm = useRef();
      const wifiForm = useRef();


      const onSubmit = data => {
          const dataForm = {
            name : nameForm.current.value,
            speed : (speedForm.current.value),
            price : parseInt(priceForm.current.value),
            halfYear : parseInt(km6Form.current.value),
            fullYear : parseInt(km12Form.current.value),
            modem : parseInt(modemForm.current.value),
            wifi : parseInt(wifiForm.current.value),
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
        <p>Khuyến mãi modem</p>
        <input {...register("modem")} ref={modemForm}  />
        <p className="data-form-error">{errors.modem?.message}</p>
        <p>Khuyến mãi wifi</p>
        <input {...register("wifi")} ref={wifiForm}  />
        <p className="data-form-error">{errors.wifi?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
}

export default FormAdd;
