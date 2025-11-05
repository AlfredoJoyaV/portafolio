import './ContactCard.css'

const ContactCard = () => {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-card">
        {/* Avatar con inicial */}
        <div className="contact-avatar">
          <span>E</span>
        </div>

        {/* Información del contacto */}
        <div className="contact-info">
          <h2 className="contact-name">Erick Joya</h2>
          <p className="contact-subtitle">Perfil público · contacto</p>

          <div className="contact-details">
            {/* Email */}
            <div className="contact-item">
              <div className="contact-icon email-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </div>
              <div className="contact-text">
                <p className="contact-value">ejoyavaz@gmail.com</p>
                <p className="contact-label">Correo electrónico</p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="contact-item">
              <div className="contact-icon phone-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-text">
                <p className="contact-value">7607-6150</p>
                <p className="contact-label">Teléfono</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCard
