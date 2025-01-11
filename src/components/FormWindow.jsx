export default function Form_window() {
  return (
    <>
      <section className="window">
        <h2 className="window__text">Ingresa los datos solicitados</h2>
        <form className="form window__form">
          <fieldset className="form__input">
            <label className="form__label">
              Nombre del Mentor
              <input
                className="form__item "
                //value="mentor"
                type="text"
                name="mentor"
                placeholder="Mentor"
                required
              />
            </label>
            <label className="form__label">
              Release Month
              <input
                className="form__item "
                //value="monthRelease"
                type="text"
                name="monthRelease"
                placeholder="Month Release"
                required
              />
            </label>
            <label className="form__label">
              Fiscal Year
              <input
                className="form__item "
                //value="FiscalYear"
                type="text"
                name="fiscalYear"
                placeholder="Fiscal Year"
                required
              />
            </label>
            <div className="form__separator"></div>
            <label className="form__label">
              Nombre del Desarrollador
              <input
                className="form__item "
                //value="desarrollador"
                type="text"
                name="developer"
                placeholder="developer"
                required
              />
            </label>
            <label className="form__label">
              File ID
              <input
                className="form__item "
                //value="desarrollador"
                type="text"
                name="fileId"
                placeholder="File ID"
                required
              />
            </label>
            <label className="form__label">
              Calidad Final
              <input
                className="form__item "
                //value="desarrollador"
                type="text"
                name="quality"
                placeholder="% calidad"
                required
              />
            </label>
            <label className="form__label">
              Tiempo de desarrollo
              <input
                className="form__item "
                //value="desarrollador"
                type="number"
                name="time"
                placeholder="tiempo"
                required
              />
            </label>
          </fieldset>
        </form>
        <button className="form__button">Guardar</button>
      </section>
    </>
  );
}
