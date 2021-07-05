import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import * as yup from "yup";
import comboApi from '../../../../../api/comboApi';
const schema = yup.object().shape({
    nameInput: yup.string().required("Vui lòng nhập vào trường này"),
    thumnailInput: yup.string().required('Vui lòng nhập vào trường này'),
   
  });
function FormAdd(props) {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const nameForm = useRef();
      const thumnailUrlForm = useRef();
     
      const {enqueueSnackbar} = useSnackbar();
      const history = useHistory();
      const onSubmit = async data => {
          const dataForm = {
            name : nameForm.current.value,
            thumnailUrl : (thumnailUrlForm.current.value),
          }
          const sendData = await comboApi.add(dataForm);
          history.push('/Admin/service/');

          enqueueSnackbar('Thêm thành công', {variant : 'success'});
      };
  return (
    <div className="container form-add-data">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Tên dịch vụ</p>
        <input {...register("nameInput")} ref={nameForm}/>
        <p className="data-form-error">{errors.nameInput?.message}</p>
        <p>Hình ảnh</p>
        <input {...register("thumnailUrlInput")} ref={thumnailUrlForm}  />
        <p className="data-form-error">{errors.thumnailUrlInput?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
}

export default FormAdd;
