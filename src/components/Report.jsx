import React from "react";

export default function report({
  monthlyReport,
  developerReport,
  mentorReport,
}) {
  return (
    <>
      <div className="report">
        <h2 className="report__title">Resultados de la Búsqueda</h2>
        <table className="report__table">
          <thead>
            <tr>
              <th className=" report__head-title">Developer Name</th>
              <th className=" report__head-title">File ID</th>
              <th className=" report__head-title">Release Month</th>
              <th className=" report__head-title">Fiscal Year</th>
              <th className=" report__head-title">Calidad</th>
              <th className=" report__head-title">Tiempo de Desarrollo</th>
            </tr>
          </thead>
          <tbody>
            {monthlyReport && monthlyReport.length > 0
              ? monthlyReport.map((data, index) => (
                  <tr key={index}>
                    <td className="report__data-table">
                      {data.developer_name}
                    </td>
                    <td className="report__data-table">{data.fileid}</td>
                    <td className="report__data-table">{data.release_month}</td>
                    <td className="report__data-table">{data.fiscal_year}</td>
                    <td className="report__data-table">{data.calidad}</td>
                    <td className="report__data-table">
                      {data.tiempo_desarrollo}
                    </td>
                  </tr>
                ))
              : null}
            {developerReport && developerReport.length > 0
              ? developerReport.map((data, index) => (
                  <tr key={index}>
                    <td className="report__data-table">
                      {data.developer_name}
                    </td>
                    <td className="report__data-table">{data.fileid}</td>
                    <td className="report__data-table">{data.release_month}</td>
                    <td className="report__data-table">{data.fiscal_year}</td>
                    <td className="report__data-table">{data.calidad}</td>
                    <td className="report__data-table">
                      {data.tiempo_desarrollo}
                    </td>
                  </tr>
                ))
              : null}
            {mentorReport && mentorReport.length > 0
              ? mentorReport.map((data, index) => (
                  <tr key={index}>
                    <td className="report__data-table">
                      {data.developer_name}
                    </td>
                    <td className="report__data-table">{data.fileid}</td>
                    <td className="report__data-table">{data.release_month}</td>
                    <td className="report__data-table">{data.fiscal_year}</td>
                    <td className="report__data-table">{data.calidad}</td>
                    <td className="report__data-table">
                      {data.tiempo_desarrollo}
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
}
