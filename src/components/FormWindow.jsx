import React, { useState } from "react";
import { insertData } from "../utils/Api.js";

export default function Form_window() {
  //seteo de lo "input"
  const [mentorName, setMentorName] = useState("");
  const [releaseMonth, setReleaseMonth] = useState("");
  const [fiscalYear, setFiscalYear] = useState("");
  const [developerName, setDeveloperName] = useState("");
  const [fileId, setFileId] = useState("");
  const [calidad, setCalidad] = useState("");
  const [tiempoDesarrollo, setTiempoDesarrollo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      developer_name: developerName,
      mentor_name: mentorName,
      fileid: fileId,
      release_month: releaseMonth,
      fiscal_year: fiscalYear,
      calidad: calidad,
      tiempo_desarrollo: tiempoDesarrollo,
    };

    insertData(data)
      .then((res) => {
        if (res.success) {
          alert("Datos insertados correctamente: " + res.message);
        } else {
          alert("Error: " + res.message);
          console.log(res);
        }
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  }

  return (
    <>
      <section className="window">
        <h2 className="window__text">Ingresa los datos solicitados</h2>
        <form className="form window__form" onSubmit={handleSubmit}>
          <fieldset className="form__input">
            <label className="form__label">
              Nombre del Mentor
              <input
                className="form__item "
                value={mentorName}
                type="text"
                name="mentor"
                placeholder="Mentor"
                onChange={(e) => setMentorName(e.target.value)}
                required
              />
            </label>
            <label className="form__label">
              Release Month
              <input
                className="form__item "
                value={releaseMonth}
                type="text"
                name="monthRelease"
                placeholder="Release Month"
                onChange={(e) => setReleaseMonth(e.target.value)}
                required
              />
            </label>
            <label className="form__label">
              Fiscal Year
              <input
                className="form__item "
                value={fiscalYear}
                type="text"
                name="fiscalYear"
                placeholder="Fiscal Year"
                onChange={(e) => setFiscalYear(e.target.value)}
                required
              />
            </label>
            <div className="form__separator"></div>
            <label className="form__label">
              Nombre del Desarrollador
              <input
                className="form__item "
                value={developerName}
                type="text"
                name="developer"
                placeholder="developer"
                onChange={(e) => setDeveloperName(e.target.value)}
                required
              />
            </label>
            <label className="form__label">
              File ID
              <input
                className="form__item "
                value={fileId}
                type="text"
                name="fileId"
                placeholder="File ID"
                onChange={(e) => setFileId(e.target.value)}
                required
              />
            </label>
            <label className="form__label">
              Calidad Final
              <input
                className="form__item "
                value={calidad}
                type="text"
                name="quality"
                placeholder="% calidad"
                onChange={(e) => setCalidad(e.target.value)}
                required
              />
            </label>
            <label className="form__label">
              Tiempo de desarrollo
              <input
                className="form__item "
                value={tiempoDesarrollo}
                type="number"
                name="time"
                placeholder="tiempo"
                onChange={(e) => setTiempoDesarrollo(e.target.value)}
                required
              />
            </label>
          </fieldset>
          <button className="form__button" type="submit">
            Guardar
          </button>
        </form>
      </section>
    </>
  );
}
