import React, { useState } from 'react';
import api from '../../services/api';

import './style.css';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    try {

      const data = { name, email, whatsapp, city, uf };
      await api.post('/ongs', data);

      history.push('/');
    } catch (error) {

    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
          <Link className="back-link" to="/"><FiArrowLeft size={16} color="#E02041" />Não tenho cadastro</Link>
        </section>
        <form onSubmit={handleRegister}>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nome da ONG" autoComplete="off" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" autoComplete="off" />
          <input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} type="tel" placeholder="WhatsApp" autoComplete="off" />

          <div className="input-group">
            <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="Cidade" autoComplete="off" />
            <input value={uf} onChange={(e) => setUf(e.target.value)} type="text" placeholder="UF" style={{ width: 80 }} autoComplete="off" />
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}