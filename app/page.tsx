import React, { useState } from 'react';
import { Calendar, Clock, Euro, Mail, Search, Users, Zap, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import Head from 'next/head';

const workflows = [
  {
    icon: <Users className="w-12 h-12" />,
    title: "Lead-Management",
    description: "Automatische Erfassung, Kategorisierung und Follow-up von Leads. Nie wieder einen potenziellen Kunden verlieren.",
    timeSaved: "10-15 Stunden/Woche",
    moneySaved: "bis zu €2.000/Monat",
    features: [
      "Automatische Lead-Erfassung aus verschiedenen Quellen",
      "Intelligente Priorisierung nach Potenzial",
      "Automatische Follow-up E-Mails zur richtigen Zeit",
      "Integration mit deinem CRM"
    ]
  },
  {
    icon: <Calendar className="w-12 h-12" />,
    title: "Automatische Terminplanung",
    description: "Schluss mit E-Mail-Ping-Pong. Dein KI-Agent findet automatisch den perfekten Termin für alle Beteiligten.",
    timeSaved: "5-8 Stunden/Woche",
    moneySaved: "bis zu €1.200/Monat",
    features: [
      "Automatische Terminfindung basierend auf Verfügbarkeiten",
      "Kalender-Synchronisation über alle Plattformen",
      "Automatische Erinnerungen und Follow-ups",
      "Zeitzone-Management für internationale Meetings"
    ]
  },
  {
    icon: <Search className="w-12 h-12" />,
    title: "KI-Bildersuchmaschine",
    description: "Finde in Sekunden das richtige Bild in deinem Archiv. KI durchsucht dein Drive nach visuellen Kriterien.",
    timeSaved: "3-5 Stunden/Woche",
    moneySaved: "bis zu €800/Monat",
    features: [
      "KI-basierte Bilderkennung und Kategorisierung",
      "Suche nach visuellen Merkmalen, nicht nur Dateinamen",
      "Integration mit Google Drive, Dropbox etc.",
      "Blitzschnelle Ergebnisse statt manueller Suche"
    ]
  },
  {
    icon: <Mail className="w-12 h-12" />,
    title: "E-Mail Sende-Agent",
    description: "Formular-Anfragen werden intelligent verarbeitet und zur richtigen Zeit an die richtige Person weitergeleitet.",
    timeSaved: "4-6 Stunden/Woche",
    moneySaved: "bis zu €1.000/Monat",
    features: [
      "Automatische Verarbeitung von Website-Formularen",
      "Intelligentes Routing basierend auf Anfrage-Typ",
      "Personalisierte Antworten in Sekunden",
      "Vollständige Integration in dein E-Mail-System"
    ]
  }
];

const Navigation = ({ activeSection, setActiveSection, mobileMenuOpen, setMobileMenuOpen }) => (
  <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <Zap className="w-8 h-8 text-cyan-400" />
          <span className="text-2xl font-bold text-white">WorkflowIQ</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {['Home', 'Workflows', 'Über mich', 'Kontakt'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveSection(item.toLowerCase().replace(' ', '-'))}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>

    {mobileMenuOpen && (
      <div className="md:hidden bg-slate-800 border-t border-slate-700">
        <div className="px-4 py-3 space-y-3">
          {['Home', 'Workflows', 'Über mich', 'Kontakt'].map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveSection(item.toLowerCase().replace(' ', '-'));
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    )}
  </nav>
);

const HeroSection = ({ setActiveSection }) => (
  <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-400 text-sm font-medium">🚀 KI-Workflows aus Österreich</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Spare Zeit und Geld mit{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              intelligenten Workflows
            </span>
          </h1>
          
          <p className="text-xl text-gray-300">
            Automatisiere deine wiederkehrenden Aufgaben und konzentriere dich auf das, was wirklich zählt. 
            Mit maßgeschneiderten KI-Workflows sparst du bis zu 20 Stunden pro Woche.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => setActiveSection('kontakt')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center space-x-2"
            >
              <span>Kostenloses Erstgespräch</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => setActiveSection('workflows')}
              className="px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold border border-slate-700 hover:border-cyan-500 transition-all"
            >
              Workflows entdecken
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
            <div>
              <div className="text-3xl font-bold text-cyan-400">20h</div>
              <div className="text-sm text-gray-400">Zeit gespart/Woche</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">€5K</div>
              <div className="text-sm text-gray-400">Ersparnis/Monat</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">24/7</div>
              <div className="text-sm text-gray-400">Automatisiert</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-3xl opacity-20"></div>
          <div className="relative bg-slate-800 border border-slate-700 rounded-3xl p-8 space-y-4">
            <div className="flex items-center space-x-3 text-green-400">
              <CheckCircle className="w-6 h-6" />
              <span>Keine Programmierkenntnisse nötig</span>
            </div>
            <div className="flex items-center space-x-3 text-green-400">
              <CheckCircle className="w-6 h-6" />
              <span>Vollständige Einrichtung inklusive</span>
            </div>
            <div className="flex items-center space-x-3 text-green-400">
              <CheckCircle className="w-6 h-6" />
              <span>Support auch nach der Implementierung</span>
            </div>
            <div className="flex items-center space-x-3 text-green-400">
              <CheckCircle className="w-6 h-6" />
              <span>Maßgeschneidert für dein Business</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WorkflowsSection = ({ setActiveSection }) => (
  <section className="py-20 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Deine Workflow-Lösungen
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Jeder Workflow spart dir messbar Zeit und Geld. Investiere einmal, profitiere jahrelang.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {workflows.map((workflow, index) => (
          <div
            key={index}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-cyan-500 transition-all group"
          >
            <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              {workflow.icon}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">{workflow.title}</h3>
            <p className="text-gray-400 mb-6">{workflow.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-900/50 rounded-lg">
              <div>
                <div className="flex items-center space-x-2 text-green-400 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">Zeit gespart</span>
                </div>
                <div className="text-white font-bold">{workflow.timeSaved}</div>
              </div>
              <div>
                <div className="flex items-center space-x-2 text-cyan-400 mb-1">
                  <Euro className="w-4 h-4" />
                  <span className="text-sm font-medium">Geld gespart</span>
                </div>
                <div className="text-white font-bold">{workflow.moneySaved}</div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {workflow.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveSection('kontakt')}
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Jetzt beraten lassen
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-slate-800 border border-slate-700 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Wie funktioniert's?</h3>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div>
            <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
              <span className="text-2xl font-bold text-cyan-400">1</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Erstgespräch</h4>
            <p className="text-gray-400">Wir analysieren deine Prozesse und finden die größten Zeitfresser.</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
              <span className="text-2xl font-bold text-cyan-400">2</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Umsetzung</h4>
            <p className="text-gray-400">Ich baue deinen maßgeschneiderten Workflow und richte alles ein.</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
              <span className="text-2xl font-bold text-cyan-400">3</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Zeit & Geld sparen</h4>
            <p className="text-gray-400">Dein Workflow läuft 24/7 automatisch. Du konzentrierst dich auf's Wichtige.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Über mich
        </h2>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 md:p-12">
        <div className="space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">
            Hi, ich bin <span className="text-cyan-400 font-semibold">Niklas Ochenbauer</span> aus Pinggau, 
            einer kleinen Gemeinde am Wechsel in Österreich. Als Schüler habe ich mich schon früh gefragt: 
            Warum verschwenden Unternehmen so viel Zeit mit Aufgaben, die ein Computer viel besser erledigen könnte?
          </p>

          <p className="text-lg leading-relaxed">
            Diese Frage hat mich zur <span className="text-cyan-400 font-semibold">Automatisierung mit KI-Workflows</span> gebracht. 
            Ich habe gelernt, wie man mit Tools wie n8n intelligente Systeme baut, die Unternehmen nicht nur Zeit, 
            sondern auch bares Geld sparen.
          </p>

          <p className="text-lg leading-relaxed">
            Bei <span className="font-semibold text-white">WorkflowIQ</span> geht es mir nicht darum, 
            einfach nur Workflows zu verkaufen. Ich möchte echten Mehrwert schaffen. Deshalb nehme ich mir die Zeit, 
            deine Prozesse zu verstehen und die perfekte Lösung für dich zu entwickeln.
          </p>

          <div className="pt-6 border-t border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">Warum WorkflowIQ?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Individuelle Lösungen</div>
                  <div className="text-sm text-gray-400">Keine 08/15 Templates</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Persönlicher Support</div>
                  <div className="text-sm text-gray-400">Auch nach der Einrichtung</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Transparente Preise</div>
                  <div className="text-sm text-gray-400">Auf Anfrage, fair kalkuliert</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Aus Österreich</div>
                  <div className="text-sm text-gray-400">Für den DACH-Markt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => {
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
      alert('Bitte fülle alle Pflichtfelder aus (Name, E-Mail, Nachricht)');
      return;
    }
    
    setFormStatus('sending');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/contact_requests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
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
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lass uns sprechen
          </h2>
          <p className="text-xl text-gray-400">
            Buche ein kostenloses Erstgespräch oder schreib mir direkt eine Nachricht.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Kontaktformular</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2 text-sm">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  placeholder="Dein Name"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm">E-Mail *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  placeholder="deine@email.at"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm">Unternehmen</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  placeholder="Optional"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm">Welcher Workflow interessiert dich?</label>
                <select
                  value={formData.workflow}
                  onChange={(e) => setFormData({...formData, workflow: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="">Bitte wählen</option>
                  <option value="lead-management">Lead-Management</option>
                  <option value="terminplanung">Automatische Terminplanung</option>
                  <option value="bildersuchmaschine">KI-Bildersuchmaschine</option>
                  <option value="email-agent">E-Mail Sende-Agent</option>
                  <option value="custom">Individuelle Lösung</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm">Nachricht *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  placeholder="Erzähl mir kurz, wie ich dir helfen kann..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={formStatus === 'sending'}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50 active:scale-95 cursor-pointer"
              >
                {formStatus === 'sending' ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>

              {formStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
                  Nachricht erfolgreich gesendet! Ich melde mich bald bei dir.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                  Fehler beim Senden. Bitte versuche es erneut.
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Termin buchen</h3>
              <p className="text-gray-400 mb-6">
                Buche direkt ein 30-minütiges kostenloses Erstgespräch. Wir analysieren deine Prozesse und finden die beste Lösung.
              </p>
              
              
                href="https://cal.com/niklas-ochenbauer-bjtw8p"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 bg-slate-900 border border-slate-700 hover:border-cyan-500 text-white rounded-lg font-semibold transition-all text-center"
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                Jetzt Termin buchen
              </a>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Was erwartet dich?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Analyse deiner aktuellen Prozesse</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Identifikation von Automatisierungspotenzial</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Konkrete Empfehlungen & ROI-Berechnung</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Unverbindlich & kostenlos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 border-t border-slate-800 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2">
          <Zap className="w-6 h-6 text-cyan-400" />
          <span className="text-white font-semibold">WorkflowIQ</span>
        </div>
        
        <div className="text-gray-400 text-sm text-center md:text-left">
          © 2026 WorkflowIQ - Niklas Ochenbauer | Pinggau, Österreich
        </div>
        
        <div className="text-gray-400 text-sm">
          Automatisierung mit ❤️ aus dem Wechselgebiet
        </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      <Head>
        <title>WorkflowIQ - KI-Workflow Automatisierung | Zeit & Geld sparen</title>
        <meta name="description" content="Spare bis zu 20 Stunden pro Woche mit maßgeschneiderten KI-Workflows. Lead-Management, Terminplanung & mehr. Aus Österreich für den DACH-Markt." />
<meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>
      <div className="min-h-screen bg-slate-900">
    <Navigation 
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      mobileMenuOpen={mobileMenuOpen}
      setMobileMenuOpen={setMobileMenuOpen}
    />
    
    {activeSection === 'home' && (
      <>
        <HeroSection setActiveSection={setActiveSection} />
        <WorkflowsSection setActiveSection={setActiveSection} />
        <AboutSection />
        <ContactSection />
      </>
    )}
    
    {activeSection === 'workflows' && <WorkflowsSection setActiveSection={setActiveSection} />}
    {activeSection === 'über-mich' && <AboutSection />}
    {activeSection === 'kontakt' && <ContactSection />}
    
    <Footer />
  </div>
</>
