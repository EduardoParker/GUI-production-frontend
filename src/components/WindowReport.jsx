import React, { useState } from "react";
import {
  getDeveloperReport,
  getMentorReport,
  getMonthlyReport,
} from "../utils/Api";
import Report from "./Report.jsx";

export default function WindowReport({
  isDeveloperOpen,
  isMonthWindowOpen,
  isMentorOpen,
}) {
  const [openWindow, setOpenWindow] = React.useState(false);
  const [releaseMonth, setReleaseMonth] = React.useState("Enero");
  const [fiscalYear, setFiscalYear] = React.useState("");
  const [developer, setDeveloper] = React.useState("");
  const [mentor, setMentor] = React.useState("");
  const [monthlyReport, setMonthlyReport] = React.useState(null);
  const [developerReport, setDeveloperReport] = React.useState(null);
  const [mentorReport, setMentorReport] = React.useState(null);

  const handleMontlySearch = (e) => {
    e.preventDefault();
    getMonthlyReport(releaseMonth, fiscalYear)
      .then((res) => {
        setMonthlyReport(res);
        setOpenWindow(true);
      })
      .catch((error) => {
        console.log(error);
        alert("Hubo un error al obtener los datos: " + error.message);
      });
  };

  const handleDeveloperSearch = (e) => {
    e.preventDefault();
    getDeveloperReport(releaseMonth, fiscalYear, developer)
      .then((res) => {
        setDeveloperReport(res);
        setOpenWindow(true);
      })
      .catch((error) => {
        console.log(error);
        alert("Hubo un error al obtener los datos: " + error.message);
      });
  };

  const handleMentorSearch = (e) => {
    e.preventDefault();
    getMentorReport(releaseMonth, fiscalYear, developer, mentor)
      .then((res) => {
        console.log(res);
        setMentorReport(res);
        setOpenWindow(true);
      })
      .catch((error) => {
        console.log(error);
        alert("Hubo un error al obtener los datos" + error.message);
      });
  };

  return (
    <>
      {!openWindow && (
        <section className="window">
          <h2 className="window__text">Reporte</h2>
          <form className="form window__form">
            <fieldset className="form window__form">
              <label className="form__label">Release Month</label>
              <select
                className="form__item"
                value={releaseMonth}
                onChange={(e) => setReleaseMonth(e.target.value)}
              >
                <option value="Enero">Enero</option>
                <option value="Febrero">Febrero</option>
                <option value="Marzo">Marzo</option>
                <option value="Abril">Abril</option>
                <option value="Mayo">Mayo</option>
                <option value="Junio">Junio</option>
                <option value="Julio">Julio</option>
                <option value="Agosto">Agosto</option>
                <option value="Septiembre">Septiembre</option>
                <option value="Octubre">Octubre</option>
                <option value="Noviembre">Noviembre</option>
                <option value="Diciembre">Diciembre</option>
              </select>

              <label className="form__label">Fiscal Year</label>
              <input
                className="form__item"
                type="number"
                id="fiscal_year"
                value={fiscalYear}
                onChange={(e) => setFiscalYear(e.target.value)}
              />

              {isDeveloperOpen && (
                <>
                  <label className="form__label">Desarrollador</label>
                  <input
                    className="form__item"
                    type="text"
                    value={developer}
                    onChange={(e) => setDeveloper(e.target.value)}
                  />
                </>
              )}

              {
                //isMonthWindowOpen === false ||
                isMentorOpen && (
                  <>
                    <label className="form__label">Mentor </label>
                    <input
                      className="form__item"
                      type="text"
                      value={mentor}
                      onChange={(e) => setMentor(e.target.value)}
                    />
                  </>
                )
              }
            </fieldset>
            {!isMentorOpen && !isDeveloperOpen ? (
              <button className="form__button" onClick={handleMontlySearch}>
                Crear Reporte
              </button>
            ) : null}
            {isMonthWindowOpen === false || isDeveloperOpen ? (
              <button className="form__button" onClick={handleDeveloperSearch}>
                Crear reporte por Desarrollador
              </button>
            ) : null}
            {isMonthWindowOpen === false || isMentorOpen ? (
              <button className="form__button" onClick={handleMentorSearch}>
                Crear Reporte por celula
              </button>
            ) : null}
          </form>
        </section>
      )}
      {openWindow && (
        <Report
          monthlyReport={monthlyReport}
          developerReport={developerReport}
          mentorReport={mentorReport}
        />
      )}
    </>
  );
}
