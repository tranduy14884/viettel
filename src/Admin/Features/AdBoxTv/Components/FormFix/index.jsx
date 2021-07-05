import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useRouteMatch } from "react-router-dom";
import comboApi from "../../../../../api/comboApi";
import familyApi from "../../../../../api/familyApi";
import "./style.css";

function FormFix(props) {
  const [dataFamily, setData] = useState([{}]);
  const match = useRouteMatch();
  const {
    params: { idBoxtv },
  } = match;
  useEffect(() => {
    const getData = async () => {
      const dataApi = await comboApi.get(idBoxtv);
      setData(dataApi);
    };
    getData();
  }, []);
  // console.log(dataFamily[0]);
  const nameForm = useRef();
  const speedForm = useRef();
  const priceForm = useRef();
  const km6Form = useRef();
  const km12Form = useRef();

  const boxtvForm = useRef();
  const modemForm = useRef();

  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const onSubmitForm = async () => {
    const dataForm = {
      name: nameForm.current.value,
      speed: speedForm.current.value,
      price: parseInt(priceForm.current.value),
      halfYear: parseInt(km6Form.current.value),
      fullYear: parseInt(km12Form.current.value),
      modem: parseInt(modemForm.current.value),
      boxtv: parseInt(boxtvForm.current.value),
      id: idBoxtv,
    };
    // console.log(dataForm);
    await comboApi.update(dataForm);
    enqueueSnackbar("Sửa thành công", { variant: "success" });
    history.push("/Admin/boxtv/");
  };

  return (
    <div className="container form-add-data">
      <div className="form-fix">
        <p>Tên gói cước</p>
        <input type="text" ref={nameForm} defaultValue={dataFamily[0].name} />
        <p>Tốc độ</p>
        <input type="text" ref={speedForm} defaultValue={dataFamily[0].speed} />
        <p>Giá</p>
        <input
          type="number"
          ref={priceForm}
          defaultValue={dataFamily[0].price}
        />
        <p>Khuyến mãi 6 tháng</p>
        <input
          type="number"
          ref={km6Form}
          defaultValue={dataFamily[0].halfYear}
        />
        <p>Khuyến mãi 12 tháng</p>
        <input
          type="number"
          ref={km12Form}
          defaultValue={dataFamily[0].fullYear}
        />
         <p>Khuyến mãi Boxtv</p>
        <input
          type="number"
          ref={boxtvForm}
          defaultValue={dataFamily[0].boxtv}
        />
         <p>Khuyến mãi Modem</p>
        <input
          type="number"
          ref={modemForm}
          defaultValue={dataFamily[0].modem}
        />

        <input type="submit" onClick={onSubmitForm} />
      </div>
    </div>
  );
}

export default FormFix;
