import React from "react";

export default function WindowReport({
  isDeveloperOpen,
  isMonthWindowOpen,
  isMentorOpen,
}) {
  const months = [
    { text: "January", value: "january" },
    { text: "february", value: "february" },
    { text: "March", value: "march" },
    { text: "April", value: "april" },
    { text: "May", value: "may" },
    { text: "June", value: "june" },
    { text: "July", value: "july" },
    { text: "August", value: "august" },
    { text: "September", value: "september" },
    { text: "October", value: "october" },
    { text: "Novermber", value: "november" },
    { text: "December", value: "december" },
  ];

  const fiscalYears = [
    { text: "2023", value: "2023" },
    { text: "2024", value: "2024" },
    { text: "2025", value: "2025" },
  ];

  const developers = [
    { text: "Jazmin Toledo", value: "Jazmin Toledo" },
    { text: "Alexis Huerta", value: "Alexis Huerta" },
    { text: "Avelino Gomez", value: "Avelino Gomez" },
    { text: "Diana Flores", value: "Diana Flores" },
  ];

  const mentors = [
    { text: "Jazmin Toledo", value: "Jazmin Toledo" },
    { text: "Alexis Huerta", value: "Alexis Huerta" },
    { text: "Avelino Gomez", value: "Avelino Gomez" },
  ];
  return (
    <>
      <section className="window">
        <h2 className="window__text">Reporte por Mes</h2>
        <fieldset className="form window__form">
          <label className="form__label">
            Release Month
            <select className="form__item">
              {months.map((month) => (
                <option value={month.value}>{month.text}</option>
              ))}
            </select>
          </label>
          <label className="form__label">
            Fiscal Year
            <select className="form__item">
              {fiscalYears.map((fiscalYear) => (
                <option value={fiscalYear.value}>{fiscalYear.text}</option>
              ))}
            </select>
          </label>
          {isMonthWindowOpen === false ||
            (isDeveloperOpen && (
              <label className="form__label">
                Desarrollador
                <select className="form__item">
                  {developers.map((developer) => (
                    <option value={developer.value}>{developer.text}</option>
                  ))}
                </select>
              </label>
            ))}

          {isMonthWindowOpen === false ||
            (isMentorOpen && (
              <label className="form__label">
                Mentor
                <select className="form__item">
                  {mentors.map((mentor) => (
                    <option value={mentor.value}>{mentor.text}</option>
                  ))}
                </select>
              </label>
            ))}
        </fieldset>
        <button className="form__button"> Crear Reporte</button>
      </section>
    </>
  );
}
