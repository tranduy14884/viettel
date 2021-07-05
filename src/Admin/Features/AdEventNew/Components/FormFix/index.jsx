import { useSnackbar } from "notistack";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import eventNewsApi from "../../../../../api/eventNewsApi";
import "./style.css";

function FormFix(props) {
  const [data, setData] = useState([{}]);
  const match = useRouteMatch();
  const {
    params: { idEventNews },
  } = match;
  useEffect(() => {
    const getData = async () => {
      const dataApi = await eventNewsApi.get(idEventNews);
      setData(dataApi);
    };
    getData();
  }, []);
  // console.log(data[0]);
  const nameForm = useRef();
  const thumnailUrlForm = useRef();
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

  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const onSubmitForm = async () => {
    const dataForm = {
      title: nameForm.current.value,
      thumnailUrl: thumnailUrlForm.current.src,
      id: idEventNews,
    };
    try { 
      // console.log(dataForm);
      await eventNewsApi.update(dataForm);
      enqueueSnackbar("Sửa thành công", { variant: "success" });
      history.push("/Admin/tintuc/");
      
    } catch (error) {
      enqueueSnackbar("Sửa thất bại, do kích thước ảnh quá lớn", { variant: "error" });
      
    }
   
  };

  return (
    <div className="container form-add-data">
      <div className="form-fix">
        <p>Tên dịch vụ</p>
        <input type="text" ref={nameForm} defaultValue={data[0].title} />
        <p>Hình ảnh</p>
        {image === "" && (
          <input
            type="image"
            src={data[0].thumnailUrl}
            alt="Submit"
            width="120px"
            height="520px"
            ref={thumnailUrlForm}
            className="img-update"
          />
        )}
        {image !== "" && (
          <input
            type="image"
            src={image}
            alt="Submit"
            width="120"
            height="120"
            accept="image/*"
            ref={thumnailUrlForm}
            className="img-update"
          />
        )}
        <input type="file" onChange={handleChangeImg} />
        <input type="submit" onClick={onSubmitForm} />
      </div>
    </div>
  );
}

export default FormFix;
