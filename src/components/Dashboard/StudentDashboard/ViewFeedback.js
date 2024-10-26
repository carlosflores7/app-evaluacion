import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import Navbar from "../../Navbar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Card } from "primereact/card";

function ViewFeedback() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await api.get("/evaluations");
        setFeedback(response.data);
      } catch (error) {
        console.error(error);
        alert("Error al obtener la retroalimentación");
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div>
      <Navbar />
      <Card title="Retroalimentación de Evaluaciones">
        {feedback.length === 0 ? (
          <p>No hay retroalimentación disponible.</p>
        ) : (
          <DataTable
            value={feedback}
            paginator
            rows={10}
            className="p-datatable-gridlines"
          >
            <Column field="title" header="Título" />
            <Column field="questions.length" header="Preguntas Respondidas" />
          </DataTable>
        )}
      </Card>
    </div>
  );
}

export default ViewFeedback;
