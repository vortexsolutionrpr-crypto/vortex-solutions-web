import React, { useState, useEffect } from 'react';

const MenuIcon = (props: any) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);
const XIcon = (props: any) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const PhoneIcon = (props: any) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const MailIcon = (props: any) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const MapPinIcon = (props: any) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const ChevronRightIcon = (props: any) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="9 18 15 12 9 6"></polyline></svg>
);
const DropletIcon = (props: any) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
);

const SettingsIcon = (props: any) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
);
const FactoryIcon = (props: any) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path><line x1="17" y1="18" x2="17" y2="18.01"></line><line x1="12" y1="18" x2="12" y2="18.01"></line><line x1="7" y1="18" x2="7" y2="18.01"></line></svg>
);
const HomeIcon = (props: any) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
);
const CheckCircleIcon = (props: any) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);
const MessageSquareIcon = (props: any) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
);
const FileTextIcon = (props: any) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
);
const BuildingIcon = (props: any) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="18"></line><line x1="15" y1="22" x2="15" y2="18"></line><line x1="10" y1="6" x2="10" y2="6.01"></line><line x1="14" y1="6" x2="14" y2="6.01"></line><line x1="10" y1="10" x2="10" y2="10.01"></line><line x1="14" y1="10" x2="14" y2="10.01"></line><line x1="10" y1="14" x2="10" y2="14.01"></line><line x1="14" y1="14" x2="14" y2="14.01"></line></svg>
);
const BotIcon = (props: any) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16.01"></line><line x1="16" y1="16" x2="16" y2="16.01"></line></svg>
);
const SendIcon = (props: any) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
);

// ============================================================================
// LOGO CONFIGURATION — Paste your GitHub link, external URL, or local path
// here to update the logo everywhere (Header, Homepage Card, and Footer).
// ============================================================================
const LOGO_SRC = "https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/Untitled%20-%2009%20October%202026%20at%2011.16.24-2.png?raw=true";
const FALLBACK_LOGO_SRC = "/Vortex Logo_2.jpg";

// Automatically converts standard GitHub file links into direct raw image links
const resolveImageUrl = (url: string) => {
  if (!url) return "";
  const trimmed = url.trim();
  if (trimmed.includes("github.com") && trimmed.includes("/blob/")) {
    return trimmed
      .replace("github.com", "raw.githubusercontent.com")
      .replace("/blob/", "/");
  }
  return trimmed;
};

const VortexImpellerLogo = (props: any) => {
  const [imgStep, setImgStep] = useState(0);
  const sources = [resolveImageUrl(LOGO_SRC), resolveImageUrl(FALLBACK_LOGO_SRC), "/Vortex Logo.jpg"];

  if (imgStep < sources.length) {
    return (
      <img
        src={sources[imgStep]}
        alt="Vortex Solutions Logo"
        className={props.className || "w-12 h-12"}
        style={{
          objectFit: 'contain',
          display: 'block',
          ...props.style
        }}
        onError={() => setImgStep(imgStep + 1)}
      />
    );
  }

  return (
    <svg viewBox="0 0 120 120" className={props.className || "w-12 h-12"} style={props.style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vortexMainGrad" x1="10%" y1="90%" x2="90%" y2="10%">
          <stop offset="0%" stopColor="#072142" />
          <stop offset="45%" stopColor="#146B8C" />
          <stop offset="100%" stopColor="#39C8DB" />
        </linearGradient>
        <linearGradient id="vortexInnerGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#061A36" />
          <stop offset="60%" stopColor="#125E7E" />
          <stop offset="100%" stopColor="#2EB9CC" />
        </linearGradient>
      </defs>

      {/* Top-Right Discharge Nozzle & Flange */}
      <path d="M56 10 H106 V32 H98 V16 H56 Z" fill="url(#vortexMainGrad)" />
      <rect x="105" y="4" width="7" height="34" rx="1.5" fill="url(#vortexMainGrad)" />

      {/* Bottom-Left Suction Nozzle & Flange */}
      <path d="M64 110 H14 V88 H22 V104 H64 Z" fill="#082447" />
      <rect x="8" y="82" width="7" height="34" rx="1.5" fill="#082447" />

      {/* Outer & Concentric Spiral Volute Bands */}
      <path d="M18 88 C 6 60, 18 20, 58 10" stroke="url(#vortexMainGrad)" strokeWidth="7" strokeLinecap="round" />
      <path d="M102 32 C 114 60, 102 100, 62 110" stroke="url(#vortexMainGrad)" strokeWidth="7" strokeLinecap="round" />
      <path d="M26 82 C 16 58, 28 26, 62 18" stroke="url(#vortexInnerGrad)" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M94 38 C 104 62, 92 94, 58 102" stroke="url(#vortexMainGrad)" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M34 76 C 26 56, 36 32, 62 26" stroke="url(#vortexInnerGrad)" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M86 44 C 94 64, 84 88, 58 94" stroke="url(#vortexMainGrad)" strokeWidth="3.5" strokeLinecap="round" />

      {/* Central Impeller Chamber */}
      <circle cx="60" cy="60" r="24" fill="#072142" stroke="url(#vortexMainGrad)" strokeWidth="3" />

      {/* Curved Centrifugal Impeller Blades */}
      {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle) => (
        <path
          key={angle}
          d="M60 51 C 66 46, 74 46, 79 53"
          stroke="#39C8DB"
          strokeWidth="2.5"
          strokeLinecap="round"
          transform={`rotate(${angle} 60 60)`}
        />
      ))}

      {/* Central Impeller Eye */}
      <circle cx="60" cy="60" r="8" fill="#FFFFFF" />
      <circle cx="60" cy="60" r="5.5" fill="url(#vortexMainGrad)" />
      <circle cx="61.8" cy="58.2" r="1.8" fill="#FFFFFF" />
    </svg>
  );
};

const WHATSAPP_NUMBER = "917828140702"; 
const CONTACT_EMAIL = "vortexsolutionrpr@gmail.com";
const CONTACT_PHONE = "+91 78281 40701";
const ADDRESS = "Vortex Solutions, Industrial Estate, Raipur, Chhattisgarh, India";

const BRANDS = ['Wilo', 'Havells', 'SFMC', 'Astral'];

const CATEGORIES = [
  { name: 'STP Pumps', tag: 'Wastewater & Sewage', desc: 'Heavy-duty sewage treatment plant pumps for municipal & commercial use.' },
  { name: 'Pressure Booster Pumps', tag: 'Constant Pressure', desc: 'Smart multistage hydro-pneumatic systems for uniform water pressure.' },
  { name: 'Mud Pumps', tag: 'Slurry & Dewatering', desc: 'High-torque mud and slurry pumps built for construction & agriculture.' },
  { name: 'Industrial Pumps', tag: 'Process & Plant', desc: 'Continuous-duty centrifugal and process pumps for industrial facilities.' },
  { name: 'Submersible Pumps', tag: 'Borewell & Openwell', desc: 'High-efficiency corrosion-resistant submersible pumps and motors.' },
  { name: 'PPR-FR Pipes', tag: 'Fire Retardant', desc: 'Three-layer fire-retardant polypropylene piping for industrial & building safety.' },
  { name: 'PPR Composite Pipes', tag: 'Hot & Cold Water', desc: 'Fiber-reinforced composite pipes with minimal thermal expansion.' },
  { name: 'DWC Pipes', tag: 'Underground Drainage', desc: 'Double Wall Corrugated HDPE pipes for sewerage and cable ducting.' },
  { name: 'HDPE Pipes', tag: 'High-Density Piping', desc: 'Flexible, leak-free polyethylene pipes for water supply and irrigation.' },
  { name: 'Heat Pumps', tag: 'Thermal Efficiency', desc: 'Commercial & residential air-source heat pumps for energy-saving hot water.' }
];

const PRODUCTS = [
  { id: 1, name: 'Wilo STP-300 Sewage Series', brand: 'Wilo', category: 'STP Pumps', highlight: 'Non-Clog Impeller', description: 'Robust sewage treatment plant submersible pump engineered for continuous wastewater management.' },
  { id: 2, name: 'Wilo-Helix V Hydro Booster', brand: 'Wilo', category: 'Pressure Booster Pumps', highlight: 'VFD Controlled', description: 'High-efficiency vertical multistage centrifugal booster system for commercial buildings and hotels.' },
  { id: 3, name: 'Havells Mud Master Pro', brand: 'Havells', category: 'Mud Pumps', highlight: 'High Solids Handling', description: 'Heavy-duty mud pump designed for tough agricultural, construction, and industrial slurry transfer.' },
  { id: 4, name: 'Havells Borewell Submersible', brand: 'Havells', category: 'Submersible Pumps', highlight: 'Stainless Steel Grade', description: 'Reliable deep-well submersible pump and motor set for high-head water extraction.' },
  { id: 5, name: 'SFMC SuperFlow PE-100 HDPE', brand: 'SFMC', category: 'HDPE Pipes', highlight: 'IS 4984 Certified Spec', description: 'High-density polyethylene pipes engineered for high-pressure water infrastructure and agriculture.' },
  { id: 6, name: 'SFMC DWC Corrugated Pro', brand: 'SFMC', category: 'DWC Pipes', highlight: 'SN4 / SN8 Ring Stiffness', description: 'Double Wall Corrugated piping system for underground non-pressure drainage and sewerage.' },
  { id: 7, name: 'Astral PPR-FR FireSafe System', brand: 'Astral', category: 'PPR-FR Pipes', highlight: 'Flame Retardant Layer', description: 'Fire-retardant PPR pipes and fittings for industrial fluid transport and commercial plumbing.' },
  { id: 8, name: 'Astral EcoTherm Heat Pump', brand: 'Astral', category: 'Heat Pumps', highlight: '75% Energy Saving', description: 'All-weather commercial and residential heat pump water heater with intelligent digital controller.' },
  { id: 9, name: 'Wilo End-Suction Industrial', brand: 'Wilo', category: 'Industrial Pumps', highlight: 'Heavy Duty Cast Iron', description: 'High-flow industrial process and circulation pump for manufacturing plants and HVAC cooling.' },
  { id: 10, name: 'Astral ThermPro PPR Composite', brand: 'Astral', category: 'PPR Composite Pipes', highlight: 'Glass-Fiber Reinforced', description: 'Multi-layer PPR composite piping designed to prevent sagging in hot water distribution lines.' }
];

const APPLICATIONS = [
  { title: 'Agriculture & Borewell', icon: <DropletIcon style={{ width: '32px', height: '32px', color: '#00CEC8' }} />, desc: 'Submersible pumps, mud pumps, and HDPE piping for irrigation and deep borewell extraction.' },
  { title: 'Residential & High-Rise', icon: <HomeIcon style={{ width: '32px', height: '32px', color: '#00CEC8' }} />, desc: 'Pressure booster systems, heat pumps, and PPR composite plumbing for modern homes and apartments.' },
  { title: 'Commercial, Hotels & Hospitals', icon: <BuildingIcon style={{ width: '32px', height: '32px', color: '#00CEC8' }} />, desc: '24/7 hydro-pneumatic boosters, STP pumps, and energy-efficient centralized heat pump systems.' },
  { title: 'Industrial & Infrastructure', icon: <FactoryIcon style={{ width: '32px', height: '32px', color: '#00CEC8' }} />, desc: 'Process pumps, PPR-FR chemical/fire-safe piping, and underground DWC drainage networks.' },
];

export default function VortexSolutionsApp() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All');
  const [selectedBrandFilter, setSelectedBrandFilter] = useState('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'model', text: 'Hello! I am the Vortex AI Assistant. How can I help you select the right pump or piping system today?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);

  useEffect(() => {
    if (!document.getElementById('vortex-tailwind-cdn')) {
      const script = document.createElement('script');
      script.id = 'vortex-tailwind-cdn';
      script.src = 'https://cdn.tailwindcss.com';
      document.head.appendChild(script);
    }
  }, []);

  const handleSendChatMessage = async (e: any) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newUserMessage = { role: 'user', text: chatInput };
    const updatedMessages = [...chatMessages, newUserMessage];
    setChatMessages(updatedMessages);
    setChatInput('');
    setIsChatLoading(true);

    try {
      const apiKey = ""; 
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;
      
      const contents = updatedMessages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));

      const payload = {
        contents: contents,
        systemInstruction: {
          parts: [{ text: "You are a helpful technical sales assistant for Vortex Solutions, a B2B supplier of pumps, pipes, and water-management solutions in Raipur, India. We supply brands like Wilo, Havells, SFMC, and Astral. We provide best solutions for STP pumps, Pressure Booster Pumps, Mud Pumps, Industrial Pumps, Submersible Pumps, PPR-FR Pipes, PPR Composite Pipes, DWC Pipes, HDPE Pipes, and Heat Pumps. Help users find the right products from our catalog and encourage them to request a quote or contact us on WhatsApp." }]
        }
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      const modelReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Please reach out to our technical team on WhatsApp for immediate sizing and quotation support.";
      
      setChatMessages(prev => [...prev, { role: 'model', text: modelReply }]);
    } catch {
      setChatMessages(prev => [...prev, { role: 'model', text: "For immediate product sizing and price quotations, please click the WhatsApp button or submit a Project Enquiry!" }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const navigateTo = (view: string, category = 'All', brand = 'All') => {
    setSelectedCategoryFilter(category);
    setSelectedBrandFilter(brand);
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleWhatsAppClick = (message = "Hello Vortex Solutions, I would like to make an enquiry regarding pumps and piping solutions.") => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="vortex-app-wrapper min-h-screen bg-[#F5F7F7] font-sans text-[#202729] flex flex-col">
      <style>{`
        html, body, #root {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          max-width: none !important;
          min-height: 100vh !important;
          display: block !important;
          place-items: unset !important;
          text-align: left !important;
          background-color: #F5F7F7 !important;
          color: #202729 !important;
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          box-sizing: border-box !important;
        }
        *, *::before, *::after {
          box-sizing: border-box;
        }
        .vortex-header {
          background: #FFFFFF;
          border-bottom: 1px solid #E5E7EB;
          position: sticky;
          top: 0;
          z-index: 50;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        .vortex-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .vortex-hero {
          background: linear-gradient(135deg, #0B2545 0%, #202729 55%, #118C88 100%);
          color: #FFFFFF;
          padding: 5rem 0;
          position: relative;
          overflow: hidden;
        }
        .vortex-playcard {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid #E2E8F0;
          box-shadow: 0 4px 12px rgba(11, 37, 69, 0.05);
          transition: all 0.25s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .vortex-playcard:hover {
          transform: translateY(-4px);
          border-color: #00CEC8;
          box-shadow: 0 12px 24px rgba(0, 206, 200, 0.14);
        }
        .vortex-brand-card {
          background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFA 100%);
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 1.5rem 2rem;
          text-align: center;
          transition: all 0.2s ease;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.03);
        }
        .vortex-brand-card:hover {
          border-color: #118C88;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(17, 140, 136, 0.12);
        }
        .vortex-grid-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
          gap: 1.5rem;
        }
        .vortex-grid-products {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .vortex-btn-primary {
          background-color: #00CEC8;
          color: #0B2545;
          font-weight: 700;
          padding: 0.75rem 1.75rem;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .vortex-btn-primary:hover {
          background-color: #118C88;
          color: #FFFFFF;
        }
        .vortex-btn-teal {
          background-color: #118C88;
          color: #FFFFFF;
          font-weight: 600;
          padding: 0.65rem 1.4rem;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .vortex-btn-teal:hover {
          background-color: #0B2545;
        }
      `}</style>

      {}
      <header className="vortex-header">
        <div className="vortex-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
            <div 
              style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => navigateTo('home')}
            >
              <div style={{ marginRight: '12px' }}>
                <VortexImpellerLogo style={{ width: '180px', height: '180px' }} />
              </div>
              <div>
                
              </div>
            </div>

            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              {[
                { id: 'home', label: 'Home' },
                { id: 'products', label: 'Products Catalogue' },
                { id: 'projects', label: 'Project Enquiry' },
                { id: 'contact', label: 'Contact Us' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: currentView === item.id ? '#118C88' : '#202729',
                    borderBottom: currentView === item.id ? '2px solid #00CEC8' : '2px solid transparent',
                    paddingBottom: '4px'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button 
                onClick={() => navigateTo('projects')}
                className="vortex-btn-teal"
              >
                Get a Quote
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#202729', display: 'none' }}
              >
                {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {}
      <main style={{ flex: '1 0 auto' }}>
        {currentView === 'home' && <HomeView navigateTo={navigateTo} handleWhatsAppClick={handleWhatsAppClick} />}
        {currentView === 'products' && (
          <ProductsView 
            handleWhatsAppClick={handleWhatsAppClick} 
            initialCategory={selectedCategoryFilter}
            initialBrand={selectedBrandFilter}
          />
        )}
        {currentView === 'projects' && <ProjectEnquiryView />}
        {currentView === 'contact' && <ContactView />}
      </main>

      <footer style={{ backgroundColor: '#0B2545', color: '#D1D5DB', padding: '3.5rem 0' }}>
        <div className="vortex-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <VortexImpellerLogo style={{ width: '40px', height: '40px' }} />
              <h2 style={{ color: '#FFFFFF', fontWeight: 700, margin: '0 0 0 10px', fontSize: '1.25rem' }}>Vortex Solutions</h2>
            </div>
            <p style={{ lineHeight: 1.6, fontSize: '0.9rem', color: '#CBD5E1' }}>
              Engineered Solutions for Every Drop. Premier supplier of industrial, commercial, and agricultural pumping & piping systems in Raipur.
            </p>
          </div>
          <div>
            <h3 style={{ color: '#00CEC8', fontWeight: 700, marginBottom: '1rem', fontSize: '1rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}><button onClick={() => navigateTo('home')} style={{ background: 'none', border: 'none', color: '#E5E7EB', cursor: 'pointer', padding: 0 }}>Home</button></li>
              <li style={{ marginBottom: '8px' }}><button onClick={() => navigateTo('products')} style={{ background: 'none', border: 'none', color: '#E5E7EB', cursor: 'pointer', padding: 0 }}>Product Catalogue</button></li>
              <li style={{ marginBottom: '8px' }}><button onClick={() => navigateTo('projects')} style={{ background: 'none', border: 'none', color: '#E5E7EB', cursor: 'pointer', padding: 0 }}>Project & Bulk Enquiry</button></li>
              <li style={{ marginBottom: '8px' }}><button onClick={() => navigateTo('contact')} style={{ background: 'none', border: 'none', color: '#E5E7EB', cursor: 'pointer', padding: 0 }}>Contact Us</button></li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#00CEC8', fontWeight: 700, marginBottom: '1rem', fontSize: '1rem' }}>Brands We Supply</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {BRANDS.map(brand => (
                <li key={brand} style={{ marginBottom: '8px' }}>
                  <button onClick={() => navigateTo('products', 'All', brand)} style={{ background: 'none', border: 'none', color: '#E5E7EB', cursor: 'pointer', padding: 0 }}>
                    {brand} Solutions
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#00CEC8', fontWeight: 700, marginBottom: '1rem', fontSize: '1rem' }}>Raipur Office</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
                <MapPinIcon style={{ width: '18px', height: '18px', color: '#00CEC8', marginRight: '8px', flexShrink: 0, marginTop: '2px' }} /> 
                <span>{ADDRESS}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <PhoneIcon style={{ width: '18px', height: '18px', color: '#00CEC8', marginRight: '8px' }} /> 
                <span>{CONTACT_PHONE}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <MailIcon style={{ width: '18px', height: '18px', color: '#00CEC8', marginRight: '8px' }} /> 
                <span>{CONTACT_EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="vortex-container" style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0, 206, 200, 0.2)', textAlign: 'center', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} Vortex Solutions (vortexsolution.in). All rights reserved. Raipur, Chhattisgarh.
        </div>
      </footer>

      {}
      <button 
        onClick={() => handleWhatsAppClick()}
        style={{ position: 'fixed', bottom: '24px', right: '24px', backgroundColor: '#25D366', color: '#FFFFFF', padding: '16px', borderRadius: '9999px', border: 'none', boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)', cursor: 'pointer', zIndex: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        aria-label="Contact on WhatsApp"
      >
        <MessageSquareIcon />
      </button>

      <button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        style={{ position: 'fixed', bottom: '96px', right: '24px', backgroundColor: '#00CEC8', color: '#0B2545', padding: '16px', borderRadius: '9999px', border: 'none', boxShadow: '0 10px 25px rgba(0, 206, 200, 0.4)', cursor: 'pointer', zIndex: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}
        aria-label="Toggle AI Assistant"
      >
        {isChatOpen ? <XIcon /> : <BotIcon />}
      </button>

      {isChatOpen && (
        <div 
          style={{ position: 'fixed', bottom: '165px', right: '24px', width: '350px', height: '440px', backgroundColor: '#FFFFFF', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', zIndex: 50, overflow: 'hidden' }}
        >
          <div style={{ backgroundColor: '#0B2545', color: '#FFFFFF', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BotIcon style={{ width: '20px', height: '20px', color: '#00CEC8' }} />
              <h3 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>Vortex Technical AI</h3>
            </div>
            <button onClick={() => setIsChatOpen(false)} style={{ background: 'none', border: 'none', color: '#9CA3AF', cursor: 'pointer' }}>
              <XIcon style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
          
          <div style={{ flex: 1, padding: '16px', overflowY: 'auto', backgroundColor: '#F5F7F7' }}>
            {chatMessages.map((msg, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start', marginBottom: '12px' }}>
                <div style={{
                  maxWidth: '82%',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  fontSize: '0.875rem',
                  backgroundColor: msg.role === 'user' ? '#00CEC8' : '#FFFFFF',
                  color: msg.role === 'user' ? '#0B2545' : '#202729',
                  fontWeight: msg.role === 'user' ? 600 : 400,
                  border: msg.role === 'user' ? 'none' : '1px solid #E5E7EB'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isChatLoading && (
              <div style={{ fontSize: '0.8rem', color: '#118C88', fontWeight: 600 }}>Vortex AI is typing...</div>
            )}
          </div>

          <div style={{ padding: '12px', backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
            <form onSubmit={handleSendChatMessage} style={{ display: 'flex', gap: '8px' }}>
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about STP, Booster, DWC pipes..." 
                style={{ flex: 1, padding: '8px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '0.875rem' }}
                disabled={isChatLoading}
              />
              <button 
                type="submit" 
                disabled={isChatLoading || !chatInput.trim()}
                style={{ backgroundColor: '#118C88', color: '#FFFFFF', border: 'none', borderRadius: '6px', padding: '8px 12px', cursor: 'pointer' }}
              >
                <SendIcon style={{ width: '16px', height: '16px' }} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function HomeView(props: any) {
  const { navigateTo, handleWhatsAppClick } = props;
  return (
    <div>
      <section className="vortex-hero">
        <div className="vortex-container">
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(0, 206, 200, 0.15)', border: '1px solid rgba(0, 206, 200, 0.4)', color: '#00CEC8', padding: '6px 14px', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Raipur, Chhattisgarh • Industrial & Commercial Water Solutions
          </div>
          <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem', maxWidth: '800px', color: '#FFFFFF' }}>
            Engineered Solutions for <span style={{ color: '#00CEC8' }}>Every Drop.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#E2E8F0', marginBottom: '2.25rem', maxWidth: '680px', lineHeight: 1.6 }}>
            Trusted supplier of STP Pumps, Pressure Boosters, Mud Pumps, Submersibles, Heat Pumps, and advanced DWC, HDPE & PPR-FR Piping Systems from global leaders.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <button onClick={() => navigateTo('products')} className="vortex-btn-primary">
              Explore Product Playcards
            </button>
            <button 
              onClick={() => handleWhatsAppClick("Hello Vortex Solutions, I would like to discuss a pumping or piping requirement.")} 
              style={{ backgroundColor: 'transparent', border: '2px solid #00CEC8', color: '#FFFFFF', fontWeight: 600, padding: '0.75rem 1.75rem', borderRadius: '8px', cursor: 'pointer' }}
            >
              Discuss on WhatsApp
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: '3.5rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
        <div className="vortex-container">
          <p style={{ textAlign: 'center', fontSize: '0.8rem', fontWeight: 700, color: '#118C88', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>
            Leading Engineering Brands We Supply
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {[
              { name: 'WILO', filter: 'Wilo', sub: 'German Engineered Pumps & Boosters', color: '#009C82' },
              { name: 'HAVELLS', filter: 'Havells', sub: 'Submersible & Heavy-Duty Mud Pumps', color: '#E4002B' },
              { name: 'SFMC', filter: 'SFMC', sub: 'HDPE & DWC Piping Infrastructure', color: '#0B2545' },
              { name: 'ASTRAL', filter: 'Astral', sub: 'PPR-FR, Composite Pipes & Heat Pumps', color: '#0054A6' }
            ].map(brand => (
              <div 
                key={brand.name} 
                onClick={() => navigateTo('products', 'All', brand.filter)}
                className="vortex-brand-card"
              >
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: brand.color, letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                  {brand.name}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 500 }}>
                  {brand.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#F5F7F7' }}>
        <div className="vortex-container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: '#118C88', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Complete Product Portfolio</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0B2545', margin: '0.5rem 0' }}>
              Our Specialized Pumping & Piping Solutions
            </h2>
            <p style={{ color: '#4B5563', maxWidth: '640px', margin: '0 auto' }}>
              Click any solution playcard below to filter our product catalogue or request a customized quotation.
            </p>
          </div>

          <div className="vortex-grid-cards">
            {CATEGORIES.map((cat, idx) => (
              <div 
                key={idx} 
                className="vortex-playcard"
                onClick={() => navigateTo('products', cat.name, 'All')}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'linear-gradient(135deg, #0B2545, #118C88)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00CEC8' }}>
                      <SettingsIcon style={{ width: '24px', height: '24px' }} />
                    </div>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, backgroundColor: '#E6FFFA', color: '#118C88', padding: '4px 8px', borderRadius: '6px' }}>
                      {cat.tag}
                    </span>
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0B2545', marginBottom: '0.5rem' }}>{cat.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1.25rem' }}>{cat.desc}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', color: '#118C88', fontWeight: 700, fontSize: '0.85rem', borderTop: '1px solid #F1F5F9', paddingTop: '0.75rem' }}>
                  <span>Explore Range</span>
                  <ChevronRightIcon style={{ width: '16px', height: '16px', marginLeft: '4px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="vortex-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#118C88', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Industry Applications</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0B2545', margin: '0.5rem 0 1rem 0' }}>Engineered for Every Sector</h2>
              <p style={{ color: '#4B5563', marginBottom: '2rem', lineHeight: 1.6 }}>
                From deep agricultural borewells and high-rise pressure boosting to municipal STP plants and industrial fluid networks, Vortex Solutions supplies dependable equipment across Chhattisgarh.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                {APPLICATIONS.map((app, idx) => (
                  <div key={idx} style={{ backgroundColor: '#F8FAFA', padding: '1.25rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                    <div style={{ marginBottom: '0.75rem' }}>{app.icon}</div>
                    <h4 style={{ fontWeight: 700, color: '#0B2545', margin: '0 0 0.4rem 0', fontSize: '1rem' }}>{app.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: '#64748B', margin: 0, lineHeight: 1.5 }}>{app.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #0B2545 0%, #118C88 100%)', borderRadius: '16px', padding: '3rem 2rem', color: '#FFFFFF', textAlign: 'center', boxShadow: '0 20px 35px rgba(11, 37, 69, 0.15)' }}>
              <VortexImpellerLogo style={{ width: '88px', height: '88px', margin: '0 auto 1.25rem auto' }} />
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Why Choose Vortex Solutions?</h3>
              <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                {[
                  { title: 'Genuine Brand Portfolio', desc: 'Direct sourcing of Wilo, Havells, SFMC, and Astral products.' },
                  { title: 'Technical Pump & Pipe Sizing', desc: 'Assistance matching head, flow rate, and pressure ratings.' },
                  { title: 'Project & BOQ Quotations', desc: 'Fast turnaround for contractors, builders, and industrial tenders.' },
                  { title: 'Complete Water Management', desc: 'Pumps, pipes, boosters, and heat pumps under a single roof.' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', backgroundColor: 'rgba(255,255,255,0.08)', padding: '12px 16px', borderRadius: '10px' }}>
                    <CheckCircleIcon style={{ width: '20px', height: '20px', color: '#00CEC8', marginRight: '12px', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#FFFFFF' }}>{item.title}</div>
                      <div style={{ fontSize: '0.8rem', color: '#D1FAE5' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(90deg, #00CEC8 0%, #118C88 100%)', padding: '4rem 0', textAlign: 'center' }}>
        <div className="vortex-container">
          <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0B2545', marginBottom: '1rem' }}>
            Planning a Project? Let's Find the Right Solution.
          </h2>
          <p style={{ color: '#0B2545', fontSize: '1.1rem', fontWeight: 500, maxWidth: '650px', margin: '0 auto 2rem auto' }}>
            Share your BOQ, technical specifications, or bulk product requirements with our Raipur engineering sales team.
          </p>
          <button 
            onClick={() => navigateTo('projects')} 
            style={{ backgroundColor: '#0B2545', color: '#FFFFFF', fontWeight: 700, padding: '1rem 2.25rem', borderRadius: '8px', border: 'none', fontSize: '1rem', cursor: 'pointer', boxShadow: '0 8px 20px rgba(11, 37, 69, 0.25)' }}
          >
            Submit Project Enquiry
          </button>
        </div>
      </section>
    </div>
  );
}

function ProductsView(props: any) {
  const { handleWhatsAppClick, initialCategory = 'All', initialBrand = 'All' } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesBrand = selectedBrand === 'All' || product.brand.toLowerCase() === selectedBrand.toLowerCase();
    return matchesSearch && matchesCategory && matchesBrand;
  });

  return (
    <div style={{ padding: '3rem 0', backgroundColor: '#F5F7F7', minHeight: '80vh' }}>
      <div className="vortex-container">
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0B2545', marginBottom: '0.5rem' }}>Product Catalogue</h1>
          <p style={{ color: '#4B5563' }}>Filter by brand or category to request technical specifications and quotations.</p>
        </div>

        <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: '12px', border: '1px solid #E2E8F0', marginBottom: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#0B2545', textTransform: 'uppercase', marginBottom: '6px' }}>Search Catalogue</label>
            <input 
              type="text" 
              placeholder="Search pumps, pipes, models..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ backgroundColor: '#FFFFFF', width: '100%', padding: '10px 12px', border: '1px solid #CBD5E1', borderRadius: '8px', fontSize: '0.9rem' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#0B2545', textTransform: 'uppercase', marginBottom: '6px' }}>Filter by Brand</label>
            <select 
              value={selectedBrand} 
              onChange={(e) => setSelectedBrand(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #CBD5E1', borderRadius: '8px', fontSize: '0.9rem', backgroundColor: '#FFFFFF' }}
            >
              <option value="All">All Brands (Wilo, Havells, SFMC, Astral)</option>
              {BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#0B2545', textTransform: 'uppercase', marginBottom: '6px' }}>Filter by Category</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #CBD5E1', borderRadius: '8px', fontSize: '0.9rem', backgroundColor: '#FFFFFF' }}
            >
              <option value="All">All 10 Product Categories</option>
              {CATEGORIES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
            </select>
          </div>
        </div>

        <div className="vortex-grid-products">
          {filteredProducts.map(product => (
            <div key={product.id} className="vortex-playcard" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ background: 'linear-gradient(135deg, #0B2545 0%, #27757C 100%)', padding: '1.5rem', color: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ backgroundColor: '#00CEC8', color: '#0B2545', fontSize: '0.7rem', fontWeight: 800, padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    {product.brand}
                  </span>
                  <div style={{ fontSize: '0.75rem', color: '#A7F3D0', marginTop: '6px', fontWeight: 600 }}>{product.category}</div>
                </div>
                <SettingsIcon style={{ width: '40px', height: '40px', color: '#00CEC8', opacity: 0.85 }} />
              </div>

              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, color: '#118C88', backgroundColor: '#F0FDFA', padding: '3px 8px', borderRadius: '4px', marginBottom: '8px' }}>
                    {product.highlight}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0B2545', margin: '0 0 0.5rem 0' }}>{product.name}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#4B5563', lineHeight: 1.5, marginBottom: '1.5rem' }}>{product.description}</p>
                </div>

                <button 
                  onClick={() => handleWhatsAppClick(`Hello Vortex Solutions, I am interested in ${product.name} (${product.brand} - ${product.category}). Please share the available specifications and quotation.`)}
                  className="vortex-btn-teal"
                  style={{ width: '100%' }}
                >
                  Request Quote on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectEnquiryView() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setStatus('submitted');
    setTimeout(() => setStatus('idle'), 5000); 
  };

  return (
    <div style={{ padding: '3.5rem 0', backgroundColor: '#F5F7F7', minHeight: '80vh' }}>
      <div className="vortex-container" style={{ maxWidth: '760px' }}>
        <div style={{ backgroundColor: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 10px 25px rgba(11, 37, 69, 0.05)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <FileTextIcon style={{ width: '48px', height: '48px', color: '#118C88', margin: '0 auto 12px auto' }} />
            <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0B2545', marginBottom: '0.5rem' }}>Project & BOQ Enquiry</h1>
            <p style={{ color: '#64748B', fontSize: '0.95rem' }}>
              For builders, contractors, architects, and industrial procurement teams.
            </p>
          </div>

          {status === 'submitted' ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <CheckCircleIcon style={{ width: '64px', height: '64px', color: '#10B981', margin: '0 auto 16px auto' }} />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0B2545' }}>Enquiry Received</h2>
              <p style={{ color: '#4B5563' }}>Thank you! Our Raipur technical team will review your requirements and respond shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0B2545', marginBottom: '6px' }}>Full Name *</label>
                  <input required type="text" style={{ width: '100%', padding: '10px 12px', border: '1px solid #CBD5E1', borderRadius: '8px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0B2545', marginBottom: '6px' }}>Company / Organization *</label>
                  <input required type="text" style={{ width: '100%', padding: '10px 12px', border: '1px solid #CBD5E1', borderRadius: '8px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0B2545', marginBottom: '6px' }}>Phone / WhatsApp Number *</label>
                  <input required type="tel" style={{ width: '100%', padding: '10px 12px', border: '1px solid #CBD5E1', borderRadius: '8px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0B2545', marginBottom: '6px' }}>Email Address *</label>
                  <input required type="email" style={{ width: '100%', padding: '10px 12px', border: '1px solid #CBD5E1', borderRadius: '8px' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0B2545', marginBottom: '6px' }}>Technical Specifications / BOQ Details *</label>
                <textarea required rows={5} placeholder="Describe required pump capacities, pipe diameters, preferred brands (Wilo, Havells, SFMC, Astral), or paste your BOQ..." style={{ width: '100%', padding: '10px 12px', border: '1px solid #CBD5E1', borderRadius: '8px' }}></textarea>
              </div>
              <button type="submit" className="vortex-btn-teal" style={{ padding: '14px', fontSize: '1rem' }}>
                Submit Project Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function ContactView() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setStatus('submitted');
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <div style={{ padding: '3.5rem 0', backgroundColor: '#F5F7F7', minHeight: '80vh' }}>
      <div className="vortex-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ backgroundColor: '#0B2545', color: '#FFFFFF', padding: '2.5rem', borderRadius: '16px' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', color: '#00CEC8' }}>Contact Vortex Solutions</h2>
            <p style={{ color: '#E2E8F0', marginBottom: '2rem', lineHeight: 1.6 }}>
              Connect with our Raipur office for pumping, piping, and water-management equipment.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <MapPinIcon style={{ width: '20px', height: '20px', color: '#00CEC8', marginRight: '12px', flexShrink: 0 }} />
                <span>{ADDRESS}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon style={{ width: '20px', height: '20px', color: '#00CEC8', marginRight: '12px' }} />
                <span>{CONTACT_PHONE}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <MailIcon style={{ width: '20px', height: '20px', color: '#00CEC8', marginRight: '12px' }} />
                <span>{CONTACT_EMAIL}</span>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0B2545', marginBottom: '1.5rem' }}>Send Us a Message</h3>
            {status === 'submitted' ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#118C88', fontWeight: 700 }}>
                Thank you! Your message has been sent.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input required type="text" placeholder="Your Name" style={{ width: '100%', padding: '12px', border: '1px solid #CBD5E1', borderRadius: '8px' }} />
                <input required type="tel" placeholder="Phone Number" style={{ width: '100%', padding: '12px', border: '1px solid #CBD5E1', borderRadius: '8px' }} />
                <textarea required rows={4} placeholder="How can we help you?" style={{ width: '100%', padding: '12px', border: '1px solid #CBD5E1', borderRadius: '8px' }}></textarea>
                <button type="submit" className="vortex-btn-teal">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}