import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import * as yup from "yup";
import companyApi from '../../../../../api/companyApi';
const schema = yup.object().shape({
    nameInput: yup.string().required("Vui lòng nhập vào trường này"),
    speedInput: yup.string().required('Vui lòng nhập vào trường này'),
    priceInput: yup.number().typeError("Vui lòng nhập số").integer().required('Vui lòng nhập vào trường này'),
    km6: yup.number().typeError("Vui lòng nhập số").integer().required('Vui lòng nhập vào trường này'),
    km12: yup.number().typeError("Vui lòng nhập số").integer().required('Vui lòng nhập vào trường này'),
    km18: yup.number().typeError("Vui lòng nhập số").integer().required('Vui lòng nhập vào trường này'),
    iptinh: yup.number().typeError("Vui lòng nhập số").integer().required('Vui lòng nhập vào trường này'),
    ipdong: yup.number().typeError("Vui lòng nhập số").integer().required('Vui lòng nhập vào trường này'),
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
      const km18Form = useRef();
      const iptinhForm = useRef();
      const ipdongForm = useRef();
      const history = useHistory();
      const {enqueueSnackbar} = useSnackbar();
      const onSubmit = async data => {
          const dataForm = {
              name : nameForm.current.value,
              speed : (speedForm.current.value),
              price : parseInt(priceForm.current.value),
              halfYear : parseInt(km6Form.current.value),
              fullYear : parseInt(km12Form.current.value),
              raderFullYear : parseInt(km18Form.current.value),
              Ip : parseInt(iptinhForm.current.value),
              IpL : parseInt(ipdongForm.current.value),
          }
          try {
            const sendData = await companyApi.add(dataForm);
            history.push('/Admin/doanhnghiep/');
            enqueueSnackbar('Thêm thành công', {variant : 'success'});
          } catch (error) {
            enqueueSnackbar('Đã xảy ra lỗi trong quá trình thêm, vui lòng thử lại sau', {variant : 'error'});
            
          }
         
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
        <p>Khuyến mãi 18 tháng</p>
        <input {...register("km18")} ref={km18Form}  />
        <p className="data-form-error">{errors.km18?.message}</p>
        <p>Ip tĩnh</p>
        <input {...register("iptinh")} ref={iptinhForm}  />
        <p className="data-form-error">{errors.iptinh?.message}</p>
        <p>Ip động</p>
        <input {...register("ipdong")} ref={ipdongForm}  />
        <p className="data-form-error">{errors.ipdong?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
}

export default FormAdd;
