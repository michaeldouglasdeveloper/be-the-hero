import React, { useState } from 'react';

import api from '../../services/api';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import './style.css';

export default function NewIncident() {

  const history = useHistory();
  const ongId = localStorage.getItem('ong_id');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      await api.post('/incidents', { title, description, value }, {
        headers: {
          Authorization: ongId
        }
      });
      history.push('/profile');
    } catch (error) {

    }

  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          <Link className="back-link" to="/profile"><FiArrowLeft size={16} color="#E02041" />Voltar para home</Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Título do caso" autoComplete="off" />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} type="email" placeholder="Descrição" autoComplete="off" />
          <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Valor em reais" autoComplete="off" />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}