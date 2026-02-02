import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    workflow: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Bitte fülle alle Pflichtfelder aus');
      return;
    }
    
    setFormStatus('sending');

    try {
      const response = await fetch('https://unwwidquwmofhiizwwpt.supabase.co/rest/v1/contact_requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVud3dpZHF1d21vZmhpaXp3d3B0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5ODEwMTEsImV4cCI6MjA4MzU1NzAxMX0.qAnk2xSz2V8fMUXqkUtsL5RdEKT0ouVjjAGYtX0i7Ks',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVud3dpZHF1d21vZmhpaXp3d3B0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5ODEwMTEsImV4cCI6MjA4MzU1NzAxMX0.qAnk2xSz2V8fMUXqkUtsL5RdEKT0ouVjjAGYtX0i7Ks',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          workflow: formData.workflow || null,
          message: formData.message,
          created_at: new Date().toISOString()
        })
      });
      
      if (response.ok || response.status === 201) {
        setFormStatus('success');
        setFormData({ name: '', email: '', company: '', workflow: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <>
      <Head>
        <title>WorkflowIQ - KI-Workflow Automatisierung</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0f172a; color: white; }
      `}</style>

      <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)' }}>
        
        {/* Navigation */}
        <nav style={{ position: 'fixed', top: 0, width: '100%', background: 'rgba(15, 23, 42, 0.95)', borderBottom: '1px solid #334155', zIndex: 50, backdropFilter: 'blur(10px)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>⚡ WorkflowIQ</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '5rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.3)', borderRadius: '9999px', marginBottom: '1.5rem' }}>
                <span style={{ color: '#06b6d4', fontSize: '0.875rem' }}>🚀 KI-Workflows aus Österreich</span>
              </div>
              
              <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                Spare Zeit und Geld mit <span style={{ background: 'linear-gradient(to right, #06b6d4, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>intelligenten Workflows</span>
              </h1>
              
              <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Automatisiere deine wiederkehrenden Aufgaben und konzentriere dich auf das, was wirklich zählt. Mit maßgeschneiderten KI-Workflows sparst du bis zu 20 Stunden pro Woche.
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
                <a href="#kontakt" style={{ padding: '1rem 2rem', background: 'linear-gradient(to right, #06b6d4, #3b82f6)', color: 'white', borderRadius: '0.5rem', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
                  Kostenloses Erstgespräch →
                </a>
                <a href="#workflows" style={{ padding: '1rem 2rem', background: '#1e293b', color: 'white', borderRadius: '0.5rem', fontWeight: 'bold', textDecoration: 'none', border: '1px solid #334155' }}>
                  Workflows entdecken
                </a>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '600px', margin: '0 auto', paddingTop: '2rem', borderTop: '1px solid #334155' }}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#06b6d4' }}>20h</div>
                  <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Zeit gespart/Woche</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#06b6d4' }}>€5K</div>
                  <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Ersparnis/Monat</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#06b6d4' }}>24/7</div>
                  <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Automatisiert</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflows Section */}
        <section id="workflows" style={{ padding: '5rem 2rem', background: '#0f172a' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>Deine Workflow-Lösungen</h2>
            <p style={{ fontSize: '1.125rem', color: '#94a3b8', textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
              Jeder Workflow spart dir messbar Zeit und Geld. Investiere einmal, profitiere jahrelang.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              
              {/* Lead Management */}
              <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '1rem', padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👥</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Lead-Management</h3>
                <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Automatische Erfassung, Kategorisierung und Follow-up von Leads.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1rem', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <div style={{ color: '#10b981', fontSize: '0.875rem', marginBottom: '0.25rem' }}>⏱️ Zeit gespart</div>
                    <div style={{ fontWeight: 'bold' }}>10-15h/Woche</div>
                  </div>
                  <div>
                    <div style={{ color: '#06b6d4', fontSize: '0.875rem', marginBottom: '0.25rem' }}>💶 Geld gespart</div>
                    <div style={{ fontWeight: 'bold' }}>€2.000/Monat</div>
                  </div>
                </div>
                <a href="#kontakt" style={{ display: 'block', width: '100%', padding: '0.75rem', background: 'linear-gradient(to right, #06b6d4, #3b82f6)', color: 'white', borderRadius: '0.5rem', fontWeight: 'bold', textAlign: 'center', textDecoration: 'none' }}>
                  Jetzt beraten lassen
                </a>
              </div>

              {/* Terminplanung */}
              <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '1rem', padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📅</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Automatische Terminplanung</h3>
                <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Schluss mit E-Mail-Ping-Pong. Automatische Terminfindung.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1rem', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <div style={{ color: '#10b981', fontSize: '0.875rem', marginBottom: '0.25rem' }}>⏱️ Zeit gespart</div>
                    <div style={{ fontWeight: 'bold' }}>5-8h/Woche</div>
                  </div>
                  <div>
                    <div style={{ color: '#06b6d4', fontSize: '0.875rem', marginBottom: '0.25rem' }}>💶 Geld gespart</div>
                    <div style={{ fontWeight: 'bold' }}>€1.200/Monat</div>
                  </div>
                </div>
                <a href="#kontakt" style={{ display: 'block', width: '100%', padding: '0.75rem', background: 'linear-gradient(to right, #06b6d4, #3b82f6)', color: 'white', borderRadius: '0.5rem', fontWeight: 'bold', textAlign: 'center', textDecoration: 'none' }}>
                  Jetzt beraten lassen
                </a>
              </div>

              {/* Bildersuchmaschine */}
              <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '1rem', padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔍</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>KI-Bildersuchmaschine</h3>
                <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Finde in Sekunden das richtige Bild in deinem Archiv.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1rem', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <div style={{ color: '#10b981', fontSize: '0.875rem', marginBottom: '0.25rem' }}>⏱️ Zeit gespart</div>
                    <div style={{ fontWeight: 'bold' }}>3-5h/Woche</div>
                  </div>
                  <div>
                    <div style={{ color: '#06b6d4', fontSize: '0.875rem', marginBottom: '0.25rem' }}>💶 Geld gespart</div>
                    <div style={{ fontWeight: 'bold' }}>€800/Monat</div>
                  </div>
                </div>
                <a href="#kontakt" style={{ display: 'block', width: '100%', padding: '0.75rem', background: 'linear-gradient(to right, #06b6d4, #3b82f6)', color: 'white', borderRadius: '0.5rem', fontWeight: 'bold', textAlign: 'center', textDecoration: 'none' }}>
                  Jetzt beraten lassen
                </a>
              </div>

              {/* E-Mail Agent */}
              <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '1rem', padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✉️</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>E-Mail Sende-Agent</h3>
                <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Intelligente Verarbeitung und Weiterleitung von Anfragen.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1rem', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <div style={{ color: '#10b981', fontSize: '0.875rem', marginBottom: '0.25rem' }}>⏱️ Zeit gespart</div>
                    <div style={{ fontWeight: 'bold' }}>4-6h/Woche</div>
                  </div>
                  <div>
                    <div style={{ color: '#06b6d4', fontSize: '0.875rem', marginBottom: '0.25rem' }}>💶 Geld gespart</div>
                    <div style={{ fontWeight: 'bold' }}>€1.000/Monat</div>
                  </div>
                </div>
                <a href="#kontakt" style={{ display: 'block', width: '100%', padding: '0.75rem', background: 'linear-gradient(to right, #06b6d4, #3b82f6)', color: 'white', borderRadius: '0.5rem', fontWeight: 'bold', textAlign: 'center', textDecoration: 'none' }}>
                  Jetzt beraten lassen
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Über mich Section */}
        <section style={{ padding: '5rem 2rem', background: 'linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}>Über mich</h2>
            
            <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '1rem', padding: '3rem' }}>
              <p style={{ fontSize: '1.125rem', color: '#cbd5e1', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Hi, ich bin <span style={{ color: '#06b6d4', fontWeight: 'bold' }}>Niklas Ochenbauer</span> aus Pinggau, 
                einer kleinen Gemeinde am Wechsel in Österreich. Als Schüler habe ich mich schon früh gefragt: 
                Warum verschwenden Unternehmen so viel Zeit mit Aufgaben, die ein Computer viel besser erledigen könnte?
              </p>

              <p style={{ fontSize: '1.125rem', color: '#cbd5e1', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Diese Frage hat mich zur <span style={{ color: '#06b6d4', fontWeight: 'bold' }}>Automatisierung mit KI-Workflows</span> gebracht. 
                Ich habe gelernt, wie man mit Tools wie n8n intelligente Systeme baut, die Unternehmen nicht nur Zeit, 
                sondern auch bares Geld sparen.
              </p>

              <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.7' }}>
                Bei <span style={{ fontWeight: 'bold' }}>WorkflowIQ</span> geht es mir nicht darum, 
                einfach nur Workflows zu verkaufen. Ich möchte echten Mehrwert schaffen. Deshalb nehme ich mir die Zeit, 
                deine Prozesse zu verstehen und die perfekte Lösung für dich zu entwickeln.
              </p>
            </div>
          </div>
        </section>

        {/* Kontakt Section */}
        <section id="kontakt" style={{ padding: '5rem 2rem', background: '#0f172a' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>Lass uns sprechen</h2>
            <p style={{ fontSize: '1.125rem', color: '#94a3b8', textAlign: 'center', marginBottom: '3rem' }}>
              Buche ein kostenloses Erstgespräch oder schreib mir direkt eine Nachricht.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              
              {/* Kontaktformular */}
              <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '1rem', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Kontaktformular</h3>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem 1rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '0.5rem', color: 'white' }}
                    placeholder="Dein Name"
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.875rem' }}>E-Mail *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem 1rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '0.5rem', color: 'white' }}
                    placeholder="deine@email.at"
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Unternehmen</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem 1rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '0.5rem', color: 'white' }}
                    placeholder="Optional"
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Welcher Workflow interessiert dich?</label>
                  <select
                    value={formData.workflow}
                    onChange={(e) => setFormData({...formData, workflow: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem 1rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '0.5rem', color: 'white' }}
                  >
                    <option value="">Bitte wählen</option>
                    <option value="lead-management">Lead-Management</option>
                    <option value="terminplanung">Automatische Terminplanung</option>
                    <option value="bildersuchmaschine">KI-Bildersuchmaschine</option>
                    <option value="email-agent">E-Mail Sende-Agent</option>
                    <option value="custom">Individuelle Lösung</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Nachricht *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    style={{ width: '100%', padding: '0.75rem 1rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '0.5rem', color: 'white', resize: 'vertical' }}
                    placeholder="Erzähl mir kurz, wie ich dir helfen kann..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={formStatus === 'sending'}
                  style={{ width: '100%', padding: '0.75rem 1.5rem', background: 'linear-gradient(to right, #06b6d4, #3b82f6)', color: 'white', borderRadius: '0.5rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', opacity: formStatus === 'sending' ? 0.5 : 1 }}
                >
                  {formStatus === 'sending' ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>

                {formStatus === 'success' && (
                  <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '0.5rem', color: '#10b981' }}>
                    Nachricht erfolgreich gesendet! Ich melde mich bald bei dir.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '0.5rem', color: '#ef4444' }}>
                    Fehler beim Senden. Bitte versuche es erneut.
                  </div>
                )}
              </div>

              {/* Termin buchen */}
              <div>
                <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '1rem', padding: '2rem', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Termin buchen</h3>
                  <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
                    Buche direkt ein 30-minütiges kostenloses Erstgespräch.
                  </p>
                  
                    href="https://cal.com/niklas-ochenbauer-bjtw8p"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'block', width: '100%', padding: '1rem 1.5rem', background: '#0f172a', border: '1px solid #334155', color: 'white', borderRadius: '0.5rem', fontWeight: 'bold', textAlign: 'center', textDecoration: 'none' }}
                  >
                    📅 Jetzt Termin buchen
                  </a>
                </div>

                <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '1rem', padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Was erwartet dich?</h3>
                  <div style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
                    <p style={{ marginBottom: '0.5rem' }}>✅ Analyse deiner aktuellen Prozesse</p>
                    <p style={{ marginBottom: '0.5rem' }}>✅ Identifikation von Automatisierungspotenzial</p>
                    <p style={{ marginBottom: '0.5rem' }}>✅ Konkrete Empfehlungen & ROI-Berechnung</p>
                    <p>✅ Unverbindlich & kostenlos</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ background: '#0f172a', borderTop: '1px solid #334155', padding: '2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>⚡ WorkflowIQ</span>
            </div>
            <div style={{ color: '#94a3b8', fontSize: '0
      </div>
</>
