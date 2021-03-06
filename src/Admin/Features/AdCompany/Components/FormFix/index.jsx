import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useRouteMatch } from "react-router-dom";
import companyApi from "../../../../../api/companyApi";
import familyApi from "../../../../../api/familyApi";
import "./style.css";

function FormFix(props) {
  const [data, setData] = useState([{}]);
  const match = useRouteMatch();
  const {
    params: { idCompany },
  } = match;
  useEffect(() => {
    const getData = async () => {
      const dataApi = await companyApi.get(idCompany);
      setData(dataApi);
    };
    getData();
  }, []);
  // console.log(data[0]);
  const nameForm = useRef();
  const speedForm = useRef();
  const priceForm = useRef();
  const km6Form = useRef();
  const km12Form = useRef();
  const km18Form = useRef();
  const ipForm = useRef();
  const iplForm = useRef();

  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const onSubmitForm = async () => {
    const dataForm = {
      name: nameForm.current.value,
      speed: speedForm.current.value,
      price: parseInt(priceForm.current.value),
      halfYear: parseInt(km6Form.current.value),
      fullYear: parseInt(km12Form.current.value),
      raderFullYear: parseInt(km18Form.current.value),
      Ip: parseInt(ipForm.current.value),
      IpL: parseInt(iplForm.current.value),
      id: idCompany,
    };
    try {
      await companyApi.update(dataForm);
      enqueueSnackbar("Sửa thành công", { variant: "success" });
      history.push("/Admin/doanhnghiep/");
    } catch (error) {
      enqueueSnackbar("Đã xảy ra lỗi trong quá sửa, vui lòng thử lại sau", {
        variant: "error",
      });
    }
  };

  return (
    <div className="container form-add-data">
      <div className="form-fix">
        <p>Tên gói cước</p>
        <input type="text" ref={nameForm} defaultValue={data[0].name} />
        <p>Tốc độ</p>
        <input type="text" ref={speedForm} defaultValue={data[0].speed} />
        <p>Giá</p>
        <input type="number" ref={priceForm} defaultValue={data[0].price} />
        <p>Khuyến mãi 6 tháng</p>
        <input type="number" ref={km6Form} defaultValue={data[0].halfYear} />
        <p>Khuyến mãi 12 tháng</p>
        <input type="number" ref={km12Form} defaultValue={data[0].fullYear} />
        <p>Khuyến mãi 18 tháng</p>
        <input
          type="number"
          ref={km18Form}
          defaultValue={data[0].raderFullYear}
        />
        <p>Khuyến mãi Ip tĩnh</p>
        <input type="number" ref={ipForm} defaultValue={data[0].Ip} />
        <p>Khuyến mãi Ip động</p>
        <input type="number" ref={iplForm} defaultValue={data[0].IpL} />
        <input type="submit" onClick={onSubmitForm} />
      </div>
    </div>
  );
}

export default FormFix;
