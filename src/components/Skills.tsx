import { useLanguage } from '../i18n/LanguageContext';
import { useInView } from '../hooks/useInView';

const skillIconUrls: Record<string, string[]> = {
  'ux research': [
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Google%20form%20icon.png',
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/gemini%20icoon.png?updatedAt=1777994765313',
  ],
  'ui design': [
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Illustrator%20icon.png?updatedAt=1777994765384',
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Photoshop%20icon.png?updatedAt=1777994765329',
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Figma%20Icon.png?updatedAt=1777994765263',
  ],
  'interaction design': [
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Figma%20Icon.png?updatedAt=1777994765263',
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/gemini%20icoon.png?updatedAt=1777994765313',
  ],
  prototyping: [
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Figma%20Icon.png?updatedAt=1777994765263',
  ],
  'vibe coding': [
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/gemini%20icoon.png?updatedAt=1777994765313',
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/cloud%20icon.png?updatedAt=1777994765156',
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Copilot%20icon.png',
  ],
  'technical foundations': [
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/VSC%20icon.png',
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/github%20icon.png',
  ],
  'technische grundlagen': [
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/VSC%20icon.png',
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/github%20icon.png',
  ],
  'ai product design': [
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Figma%20Icon.png?updatedAt=1777994765263',
  ],
  'promo video': [
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/After%20Effect%20Icon.png?updatedAt=1777994765313',
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Illustrator%20icon.png?updatedAt=1777994765384',
  ],
  photography: [
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Photoshop%20icon.png?updatedAt=1777994765329',
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Adobe_Photoshop_Lightroom_CC_logo.svg%201.png?updatedAt=1777994765268',
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Indesign%20icon.png?updatedAt=1777994765318',
  ],
  fotografie: [
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Photoshop%20icon.png?updatedAt=1777994765329',
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Adobe_Photoshop_Lightroom_CC_logo.svg%201.png?updatedAt=1777994765268',
    'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Indesign%20icon.png?updatedAt=1777994765318',
  ],
};

const iconTooltips: Record<string, string> = {
  'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Google%20form%20icon.png': 'Google Forms',
  'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/gemini%20icoon.png?updatedAt=1777994765313': 'Google Gemini',
  'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Illustrator%20icon.png?updatedAt=1777994765384': 'Adobe Illustrator',
  'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Figma%20Icon.png?updatedAt=1777994765263': 'Figma',
  'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Photoshop%20icon.png?updatedAt=1777994765329': 'Adobe Photoshop',
  'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/cloud%20icon.png?updatedAt=1777994765156': 'Cloud',
  'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Copilot%20icon.png': 'GitHub Copilot',
  'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/VSC%20icon.png': 'Visual Studio Code',
  'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/github%20icon.png': 'GitHub',
  'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/After%20Effect%20Icon.png?updatedAt=1777994765313': 'Adobe After Effects',
  'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Adobe_Photoshop_Lightroom_CC_logo.svg%201.png?updatedAt=1777994765268': 'Adobe Lightroom',
  'https://ik.imagekit.io/nhh7dpdil/Tool%20Icons/Indesign%20icon.png?updatedAt=1777994765318': 'Adobe InDesign',
};

export default function Skills() {
  const { t } = useLanguage();
  const [ref, isVisible] = useInView<HTMLElement>();

  return (
    <section id="skills" className="section" ref={ref}>
      <div className={`fade-in${isVisible ? ' fade-in--visible' : ''}`}>
        <h2 className="section__title">{t.skills.sectionTitle}</h2>
        <div className="skills__grid">
          {t.skills.items.map((skill, i) => {
            const iconUrls = skillIconUrls[skill.title.toLowerCase()] ?? [];

            return (
              <div
                key={i}
                className={`skill-card${isVisible ? ' skill-card--visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="skill-card__glow" />
                <div className="skill-card__inner">
                  {iconUrls.length > 0 ? (
                    <div className="skill-card__icon-row">
                      {iconUrls.map((url, index) => (
                        <span
                          key={`${skill.title}-${index}-${url}`}
                          className="skill-card__icon-wrap"
                          data-tooltip={iconTooltips[url] ?? `${skill.title} tool`}
                          tabIndex={0}
                        >
                          <img
                            src={url}
                            alt={iconTooltips[url] ?? `${skill.title} tool icon`}
                            className="skill-card__icon-img"
                            loading="lazy"
                          />
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <h3 className="skill-card__title">{skill.title}</h3>
                  <p className="skill-card__desc">{skill.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
