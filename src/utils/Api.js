const BASE_URL = "//localhost:3000";

export const insertData = (data) => {
  return fetch(`${BASE_URL}/insertar-datos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then((errorData) => {
          throw new Error(errorData.message);
        });
      }
    })
    .then((data) => {
      return { success: true, message: data.message };
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
      return {
        success: false,
        message: "Hubo un error al intentar enviar los datos.",
      };
    });
};

export const getMonthlyReport = (month, year) => {
  return fetch(`${BASE_URL}/reporte-mensual`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      release_month: month,
      fiscal_year: year,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        // Si la respuesta no es correcta, lanzamos un error con el mensaje de la API
        return res.json().then((errorData) => {
          throw new Error(errorData.message || "Error desconocido");
        });
      }
      return res.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.error(error);
      console.error("Error al obtener los datos:", error.message);
      throw error;
    });
};

export const getDeveloperReport = (month, year, developer) => {
  return fetch(`${BASE_URL}/reporte-desarrollador`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      release_month: month,
      fiscal_year: year,
      developer_name: developer,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        // Si la respuesta no es correcta, lanzamos un error con el mensaje de la API
        return response.json().then((errorData) => {
          throw new Error(errorData.message || "Error desconocido");
        });
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.log(error);
      console.error("Error al obtener los datos:", error.message);
      //alert("Hubo un error al obtener los datos: " + error.message);
      throw error;
    });
};

export const getMentorReport = (month, year, developer, mentor) => {
  return fetch(`${BASE_URL}/reporte-mentor`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      release_month: month,
      fiscal_year: year,
      developer_name: developer,
      mentor_name: mentor,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        // Si la respuesta no es correcta, lanzamos un error con el mensaje de la API
        return response.json().then((errorData) => {
          throw new Error(errorData.message || "Error desconocido");
        });
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.log(error);
      console.error("Error al obtener los datos:", error.message);
      //alert("Hubo un error al obtener los datos: " + error.message);
      throw error;
    });
};
