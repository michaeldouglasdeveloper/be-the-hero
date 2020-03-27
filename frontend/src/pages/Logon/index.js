import React, { useState } from 'react';

import api from '../../services/api';

import { FiLogIn } from 'react-icons/fi';

import { Link, useHistory } from 'react-router-dom';

import './style.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {

  const [id, setID] = useState('');
  const history = useHistory();

  async function handleLogon(e) {

    e.preventDefault();

    try {
      const response = await api.post('/sessions', { id });
      localStorage.setItem('ong_id', id);
      localStorage.setItem('ong_name', response.data.name);

      history.push('/profile');
    } catch (error) {

    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Logo" />

        <form onSubmit={handleLogon}>
          <h1>Faça seu login</h1>
          <input value={id} onChange={(e) => setID(e.target.value)} placeholder="Sua ID" type="text" />
          <button className="button" type="submit">Entrar</button>
          <Link className="back-link" to="/register"><FiLogIn size={16} color="#E02041" />Não tenho cadastro</Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  )
}