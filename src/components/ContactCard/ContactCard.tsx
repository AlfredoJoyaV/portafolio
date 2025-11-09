export const ContactCard = () => {
  return (
    <section id="contacto" className="min-h-screen flex items-center justify-center py-20 px-8">
      <div className="bg-[rgba(20,25,45,0.9)] rounded-2xl p-8 max-w-md w-full shadow-2xl backdrop-blur-md border border-white/10">
        {/* Avatar con inicial */}
        <div className="w-20 h-20 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_4px_20px_rgba(102,126,234,0.4)]">
          <span className="text-5xl font-bold text-white">E</span>
        </div>

        {/* Información del contacto */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white m-0 mb-2">Erick Joya</h2>
          <p className="text-white/60 m-0 mb-8 text-sm">Perfil público · contacto</p>

          <div className="flex flex-col gap-4 mt-6">
            {/* Email */}
            <div className="flex items-start gap-3.5 text-left p-4 bg-white/5 rounded-xl transition-all duration-300 border border-transparent hover:bg-white/8 hover:border-[rgba(102,126,234,0.3)] hover:-translate-y-0.5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-[rgba(102,126,234,0.2)] text-[#667eea]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-base font-medium text-white m-0 mb-1.5">ejoyavaz@gmail.com</p>
                <p className="text-xs text-white/50 m-0">Correo electrónico</p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex items-start gap-3.5 text-left p-4 bg-white/5 rounded-xl transition-all duration-300 border border-transparent hover:bg-white/8 hover:border-[rgba(102,126,234,0.3)] hover:-translate-y-0.5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-[rgba(239,68,68,0.2)] text-[#ef4444]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-base font-medium text-white m-0 mb-1.5">7607-6150</p>
                <p className="text-xs text-white/50 m-0">Teléfono</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCard
