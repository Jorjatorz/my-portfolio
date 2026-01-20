import { useEffect, useMemo, useState } from "react";

type PrivacyPolicy = {
  appName: string;
  path: string;
  lastUpdated: string;
};

type Language = "es" | "en";

const policies: PrivacyPolicy[] = [
  {
    appName: "TemporadApp",
    path: "/temporadapp",
    lastUpdated: "March 1, 2025",
  },
  {
    appName: "El Juego de los Papelitos",
    path: "/el-juego-de-los-papelitos",
    lastUpdated: "March 1, 2025",
  },
];

const translations = {
  es: {
    privacyPolicy: "Política de Privacidad",
    lastUpdated: "Última actualización",
    summaryTitle: "Resumen",
    summaryBody: (appName: string) =>
      `${appName} muestra anuncios de Google AdSense y usa Firebase Analytics y Firebase Crashlytics para entender el uso de la app y su estabilidad. No necesitas crear una cuenta y no vendemos tu información personal.`,
    informationTitle: "Información que recopilamos",
    informationList: [
      "Datos de uso de la app como pantallas vistas, duración de la sesión y eventos de interacción, recopilados mediante Firebase Analytics.",
      "Informes de fallos y datos de diagnóstico, recopilados mediante Firebase Crashlytics (Crashanalytics).",
      "Identificadores del dispositivo y relacionados con publicidad usados por Google AdSense para mostrar y medir anuncios.",
    ],
    useTitle: "Cómo usamos la información",
    useList: [
      "Proporcionar y mejorar la experiencia de la app.",
      "Monitorizar el rendimiento y corregir errores.",
      "Medir el rendimiento de anuncios y prevenir fraudes.",
    ],
    thirdPartyTitle: "Servicios de terceros",
    thirdPartyBody:
      "Utilizamos terceros de confianza para operar la app. Estos proveedores pueden recopilar información según sus políticas de privacidad.",
    thirdPartyList: [
      "Google AdSense (anuncios, identificadores publicitarios).",
      "Google Firebase Analytics (analítica de uso).",
      "Google Firebase Crashlytics (informes de fallos).",
    ],
    retentionTitle: "Conservación de datos",
    retentionBody:
      "Conservamos los datos de analítica y fallos el tiempo necesario para mejorar la app y cumplir obligaciones legales. Las políticas de conservación se gestionan desde las plataformas de Firebase y Google.",
    securityTitle: "Seguridad",
    securityBody:
      "Adoptamos medidas razonables para proteger la información, pero ningún método de transmisión o almacenamiento es 100% seguro.",
    childrenTitle: "Privacidad de menores",
    childrenBody: (appName: string) =>
      `${appName} no está dirigida a menores de 13 años. No recopilamos intencionadamente información personal de menores.`,
    changesTitle: "Cambios en esta política",
    changesBody:
      "Podemos actualizar esta política periódicamente. Los cambios se publicarán en esta página con una fecha de actualización revisada.",
    contactTitle: "Contacto",
    contactBody: (appName: string) =>
      `Si tienes preguntas sobre esta política, contacta con nosotros a través de la ficha de la app en la tienda para ${appName}.`,
    privacyCenter: "Centro de Privacidad",
    appPolicies: "Políticas de privacidad de apps",
    chooseApp: "Elige una app para leer su política de privacidad de Play Store.",
    readPolicy: "Leer política",
    notFound: "No se ha encontrado la página.",
    notFoundBody:
      "Usa los enlaces siguientes para acceder a las políticas disponibles.",
    navTitle: "Políticas de privacidad",
    languageLabel: "Idioma",
    spanish: "Español (ES)",
    english: "English",
  },
  en: {
    privacyPolicy: "Privacy Policy",
    lastUpdated: "Last updated",
    summaryTitle: "Summary",
    summaryBody: (appName: string) =>
      `${appName} shows Google AdSense ads and uses Firebase Analytics and Firebase Crashlytics to understand app usage and stability. We do not require you to create an account and we do not sell your personal information.`,
    informationTitle: "Information We Collect",
    informationList: [
      "App usage data such as screens viewed, session duration, and interaction events, collected through Firebase Analytics.",
      "Crash reports and diagnostic data, collected through Firebase Crashlytics (Crashanalytics).",
      "Device and ad-related identifiers used by Google AdSense to serve and measure ads.",
    ],
    useTitle: "How We Use Information",
    useList: [
      "Provide and improve the app experience.",
      "Monitor app performance and fix errors.",
      "Measure ad performance and prevent fraud.",
    ],
    thirdPartyTitle: "Third-Party Services",
    thirdPartyBody:
      "We rely on trusted third parties to operate the app. These providers may collect information as described in their privacy policies.",
    thirdPartyList: [
      "Google AdSense (ads, advertising identifiers).",
      "Google Firebase Analytics (usage analytics).",
      "Google Firebase Crashlytics (crash reporting).",
    ],
    retentionTitle: "Data Retention",
    retentionBody:
      "We retain analytics and crash data for as long as needed to improve the app and comply with legal obligations. Data retention policies are controlled through the Firebase and Google platforms.",
    securityTitle: "Security",
    securityBody:
      "We take reasonable steps to protect information, but no method of transmission or storage is 100% secure.",
    childrenTitle: "Children's Privacy",
    childrenBody: (appName: string) =>
      `${appName} is not directed to children under 13. We do not knowingly collect personal information from children.`,
    changesTitle: "Changes to This Policy",
    changesBody:
      "We may update this policy from time to time. Changes will be posted on this page with a revised \"Last updated\" date.",
    contactTitle: "Contact",
    contactBody: (appName: string) =>
      `If you have questions about this policy, please contact us through the app store listing for ${appName}.`,
    privacyCenter: "Privacy Center",
    appPolicies: "App Privacy Policies",
    chooseApp: "Choose an app to read its Play Store privacy policy.",
    readPolicy: "Read policy",
    notFound: "We could not find that page.",
    notFoundBody:
      "Use the links below to reach the available privacy policies.",
    navTitle: "Privacy Policies",
    languageLabel: "Language",
    spanish: "Español (ES)",
    english: "English",
  },
};

const normalizePath = (path: string) => {
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
};

const findPolicy = (path: string) => {
  const normalized = normalizePath(path);
  return policies.find((policy) => policy.path === normalized);
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "auto" });
};

const useRoute = () => {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (nextPath: string) => {
    const normalized = normalizePath(nextPath);
    if (normalized === path) return;
    window.history.pushState({}, "", normalized);
    setPath(normalized);
    scrollToTop();
  };

  return { path, navigate };
};

const PrivacyPolicyPage = ({
  policy,
  language,
}: {
  policy: PrivacyPolicy;
  language: Language;
}) => {
  const copy = translations[language];
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">{copy.privacyPolicy}</p>
        <h1>{policy.appName}</h1>
        <p className="updated">
          {copy.lastUpdated}: {policy.lastUpdated}
        </p>
      </header>

      <section className="card">
        <h2>{copy.summaryTitle}</h2>
        <p>{copy.summaryBody(policy.appName)}</p>
      </section>

      <section className="card">
        <h2>{copy.informationTitle}</h2>
        <ul>
          {copy.informationList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>{copy.useTitle}</h2>
        <ul>
          {copy.useList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>{copy.thirdPartyTitle}</h2>
        <p>{copy.thirdPartyBody}</p>
        <ul>
          {copy.thirdPartyList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>{copy.retentionTitle}</h2>
        <p>{copy.retentionBody}</p>
      </section>

      <section className="card">
        <h2>{copy.securityTitle}</h2>
        <p>{copy.securityBody}</p>
      </section>

      <section className="card">
        <h2>{copy.childrenTitle}</h2>
        <p>{copy.childrenBody(policy.appName)}</p>
      </section>

      <section className="card">
        <h2>{copy.changesTitle}</h2>
        <p>{copy.changesBody}</p>
      </section>

      <section className="card">
        <h2>{copy.contactTitle}</h2>
        <p>{copy.contactBody(policy.appName)}</p>
      </section>
    </main>
  );
};

const Home = ({
  onNavigate,
  language,
}: {
  onNavigate: (path: string) => void;
  language: Language;
}) => {
  const copy = translations[language];
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">{copy.privacyCenter}</p>
        <h1>{copy.appPolicies}</h1>
        <p className="updated">{copy.chooseApp}</p>
      </header>

      <div className="grid">
        {policies.map((policy) => (
          <a
            key={policy.appName}
            href={policy.path}
            className="card link-card"
            onClick={(event) => {
              event.preventDefault();
              onNavigate(policy.path);
            }}
          >
            <h2>{policy.appName}</h2>
            <p>{copy.summaryTitle} · {copy.privacyPolicy}</p>
            <span className="link-arrow">{copy.readPolicy}</span>
          </a>
        ))}
      </div>
    </main>
  );
};

const NotFound = ({
  onNavigate,
  language,
}: {
  onNavigate: (path: string) => void;
  language: Language;
}) => {
  const copy = translations[language];
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">{copy.notFound}</p>
        <h1>{copy.notFound}</h1>
        <p className="updated">{copy.notFoundBody}</p>
      </header>
      <div className="grid">
        {policies.map((policy) => (
          <a
            key={policy.path}
            href={policy.path}
            className="card link-card"
            onClick={(event) => {
              event.preventDefault();
              onNavigate(policy.path);
            }}
          >
            <h2>{policy.appName}</h2>
            <p>{copy.summaryTitle} · {copy.privacyPolicy}</p>
            <span className="link-arrow">{copy.readPolicy}</span>
          </a>
        ))}
      </div>
    </main>
  );
};

function App() {
  const { path, navigate } = useRoute();
  const activePolicy = useMemo(() => findPolicy(path), [path]);
  const [language, setLanguage] = useState<Language>("es");
  const copy = translations[language];

  return (
    <div className="app">
      <nav className="nav">
        <button type="button" className="brand" onClick={() => navigate("/")}>
          {copy.navTitle}
        </button>
        <div className="nav-links">
          {policies.map((policy) => (
            <button
              key={policy.path}
              type="button"
              className={path === policy.path ? "active" : undefined}
              onClick={() => navigate(policy.path)}
            >
              {policy.appName}
            </button>
          ))}
        </div>
        <div className="language-toggle" aria-label={copy.languageLabel}>
          <span>{copy.languageLabel}</span>
          <button
            type="button"
            className={language === "es" ? "active" : undefined}
            onClick={() => setLanguage("es")}
          >
            {copy.spanish}
          </button>
          <button
            type="button"
            className={language === "en" ? "active" : undefined}
            onClick={() => setLanguage("en")}
          >
            {copy.english}
          </button>
        </div>
      </nav>

      {path === "/" && <Home onNavigate={navigate} language={language} />}
      {path !== "/" && activePolicy && (
        <PrivacyPolicyPage policy={activePolicy} language={language} />
      )}
      {path !== "/" && !activePolicy && (
        <NotFound onNavigate={navigate} language={language} />
      )}

      <footer className="footer">
        <span>© {new Date().getFullYear()} Jorge Sanchez Cremades</span>
      </footer>
    </div>
  );
}

export default App;
