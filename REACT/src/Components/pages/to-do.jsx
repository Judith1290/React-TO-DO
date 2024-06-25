import React, { useState, useEffect } from 'react';
import { getData, postData, deleteData, putData } from '../../services/apiFetch';

const TareasComponent = () => {
  const [fileData, setFileData] = useState([]);
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    mostrarTareas();
  }, []);

  const agregarTarea = async () => {
    if (fileName.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const nuevaTarea = { name: fileName, completed: false };
    const tareaGuardada = await guardarTareas(nuevaTarea);

    if (tareaGuardada) {
      setFileData([...fileData, tareaGuardada]);
      setFileName('');
      updateCompletedCount();
    }
  };

  const guardarTareas = async (tarea) => {
    const response = await postData(tarea.name, tarea.completed);
    return response;
  };

  const extraerTarea = async () => {
    const response = await getData();
    return response;
  };

  const actualizarEstadoTarea = async (tarea) => {
    const response = await putData(tarea);
    return response;
  };

  const deleteUploadedFile = async (id) => {
    const deleted = await deleteData(id);
    if (deleted) {
      setFileData(fileData.filter((t) => t.id !== id));
      updateCompletedCount();
    }
  };

  const displayUploadedFile = (tarea) => {
    return (
      <li key={tarea.id}>
        <input
          type="checkbox"
          checked={tarea.completed}
          onChange={async () => {
            tarea.completed = !tarea.completed;
            await actualizarEstadoTarea(tarea);
            setFileData([...fileData]); // Actualizar el estado de fileData
            updateCompletedCount();
          }}
        />
        <span>{tarea.name}</span>
        <button onClick={() => deleteUploadedFile(tarea.id)}>Eliminar</button>
      </li>
    );
  };

  const updateCompletedCount = () => {
    const completedCount = fileData.filter((t) => t.completed).length;
    document.getElementById('completedCount').textContent = completedCount;
  };

  const mostrarTareas = async () => {
    try {
      const tareas = await extraerTarea();
      setFileData(tareas);
      updateCompletedCount();
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  return (
    <div>
      <h1>Gestión de Tareas</h1>
      <div>
        <input
          type="text"
          placeholder="Nombre del archivo"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              agregarTarea();
            }
          }}
        />
        <button id="agregar" onClick={agregarTarea}>Agregar</button>
      </div>
      <ul id="selectedFiles">
        {fileData.map((tarea) => displayUploadedFile(tarea))}
      </ul>
      <div>Tareas Completadas: <span id="completedCount">0</span></div>
    </div>
  );
};

export default TareasComponent;
