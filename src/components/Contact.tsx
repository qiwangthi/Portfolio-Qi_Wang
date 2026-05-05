import { useLanguage } from '../i18n/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact">
      <h2 className="section__title">{t.contact.sectionTitle}</h2>
      <p className="contact__desc">{t.contact.description}</p>
      <div className="contact__buttons">
        <a
          href="mailto:wangqimunich@gmail.com"
          className="contact__btn contact__btn--primary"
        >
          ✉ {t.contact.email}
        </a>
        <a
          href="https://www.linkedin.com/in/qi-wang-051159321/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__btn contact__btn--secondary"
        >
          🔗 {t.contact.linkedin}
        </a>
      </div>
    </section>
  );
}
