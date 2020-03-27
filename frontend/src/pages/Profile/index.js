import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './style.css';
import logoImg from '../../assets/logo.svg';

export default function Profile() {

  const history = useHistory();
  const [incidents, setIncidents] = useState([]);
  const ongId = localStorage.getItem('ong_id');
  const ongName = localStorage.getItem('ong_name');

  useEffect(() => {
    getProfiles();
  }, []);

  async function getProfiles() {

    try {
      const response = await api.get('/profile', {
        headers: {
          Authorization: ongId
        }
      });
      setIncidents(response.data);
    } catch (error) {

    }
  }

  async function handleDeleteIncident(id) {

    try {

      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout}>
          <Link to="/"><FiPower size={18} color="#E02041" /></Link>
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map((incident, index) =>
          <li key={index}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>Valor:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
            <button onClick={() => handleDeleteIncident(incident.id)} type="submit">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}