import './App.css'

function App() {
  return (
    <div className="page">
      <div className="card">
        <div className="card__header">
          <div className="card__header-icon" aria-hidden>📅</div>
          <div className="card__header-title">Cita agendada</div>
        </div>

        <div className="card__content">
          <div className="clinic">
            <img
              className="clinic__logo"
              src={import.meta.env.BASE_URL + 'logo.jpg'}
              alt="Logo"
            />
          </div>

          <div className="section">
            <p className="greeting">
              Estimado/a Marcia Aravena:
            </p>
            <p className="text">
              Tiene una cita reservada con la<strong> Dra. Javiera Navarrete</strong> en
              <strong> lafont estetica</strong> dirección <strong>AV. Libertad 269</strong>
              <br />
              <strong>Oficina 401</strong>
            </p>
          </div>

          <div className="details">
            <div className="detail">
              <span className="detail__icon">📆</span>
              <div>
                <div className="detail__title">Sábado, 06 de septiembre de 2025</div>
                <div className="detail__sub">16:00 horas</div>
              </div>
            </div>

            <div className="detail">
              <span className="detail__icon">📍</span>
              <div>
                <div className="detail__title">AV. Libertad 269</div>
                <div className="detail__sub">Oficina 401 - Piso 4</div>
              </div>
            </div>
          </div>

          <div className="alert">
            <div className="alert__title">Importante</div>
            <div className="alert__content">
              El tratamiento tiene algunas contraindicaciones, tales como tener enfermedad autoinmune,
              estar embarazada o en proceso de lactancia.
            </div>
          </div>

          <div className="notes">
             
          </div>

          <div className="contacts">
            <a className="contact" href="#">Whatsapp +569 99101000</a>
            <a className="contact" href="#">agenda@lafontestetica.cl</a>
          </div>

          <div className="footer-note">Lafont Clinica Estética</div>
        </div>
      </div>
    </div>
  )
}

export default App
