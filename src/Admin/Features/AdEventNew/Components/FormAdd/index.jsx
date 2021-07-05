import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import eventNewsApi from "../../../../../api/eventNewsApi";
const schema = yup.object().shape({
  nameInput: yup.string().required("Vui lòng nhập vào trường này"),
  thumnailInput: yup.string().required("Vui lòng nhập vào trường này"),
});
function FormAdd(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const nameForm = useRef();
  const thumnailUrlForm = useRef();

  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const onSubmit = async (data) => {
    const dataForm = {
      title: nameForm.current.value,
      thumnailUrl:  image,
    };

    try {
      if (image === "") {
        enqueueSnackbar("Vui lòng thêm hình ảnh cho tin tức !!!", {
          variant: "error",
        });
      } else {
        // console.log(dataForm);
        const sendData = await eventNewsApi.add(dataForm);
        history.push("/Admin/tintuc/");
        enqueueSnackbar("Thêm thành công", { variant: "success" });
      }
    } catch (error) {
      enqueueSnackbar("Thêm thất bại, do kích thước ảnh quá lớn ", { variant: "error" });
      
    }
    
  };
  //set img
  const [image, setImage] = useState("");
  const handleChangeImg = (e) => {
    if (e.target.files[0] && e.target.files) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <div className="container form-add-data">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Tên tin tức</p>
        <input {...register("nameInput")} ref={nameForm} />
        <p className="data-form-error">{errors.nameInput?.message}</p>
        <p>Hình ảnh</p>
        <input
          type="image"
          src={image}
          alt="Submit"
          width="auto"
          height="auto"
          accept="image/*"
          className="img-update"
        />
        <input type="file" onChange={handleChangeImg} />
        <input type="submit" onClick={onSubmit} />
      </form>
    </div>
  );
}

export default FormAdd;
