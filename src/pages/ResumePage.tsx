import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const resumeContent = {
    en: {
        title: 'Resume',
        subtitle: 'looking for a ux student job and later a bachlor thesis opportunity in the field of ux / ui design.',
        download: 'Download PDF',
        back: 'Back to Home',
        profileTitle: 'Profile',
        profile: 'UX design student at TH Ingolstadt with a strong background in medicine (LMU Klinikum). I combine empathy and deep user understanding from my many years of nursing experience with modern design methodologies. My focus is on designing intuitive digital experiences that address real human needs.',
        contactTitle: 'Contact',
        experienceTitle: 'Work Experience',
        educationTitle: 'Education',
        skillsTitle: 'Skills & Tools',
        languagesTitle: 'Languages',
        contact: [
            'LinkedIn: https://www.linkedin.com/in/qi-wang-051159321/',
            'Email: wangqimunich@gmail.com',
            'Phone: +49 1748497777',
        ],
        experience: [
            {
                role: 'UX Design Intern',
                company: 'MAindTec GmbH, Ingolstadt',
                period: 'Internship',
                project: 'Reimagined the MAiQ 2.0 platform',
                bullets: [
                    'Created low- and high-fidelity wireframes for new workflows and interface ideas.',
                    'Developed interactive prototypes for user testing and iteration.',
                    'Integrated AI tools into the design workflow to speed up exploration and validation.',
                    'Collaborated closely with Product and Engineering teams to align design decisions.',
                ],
            },
        ],
        education: [
            {
                title: 'User Experience Design (B.Sc.)',
                school: 'Technische Hochschule Ingolstadt',
                period: 'Since 10/2023',
            },
            {
                title: 'Abitur',
                school: 'Abendgymnasium für Berufstätige, München',
                period: '2019 - 2023',
            },
            {
                title: 'Diploma of Education, Nursing',
                school: 'Nanjing Medical University, China',
                period: '2007 - 2011',
            },
        ],
        skills: [
            'User Research',
            'Wireframing',
            'Prototyping',
            'Storytelling',
            'Apps and Web Design',
        ],
        tools: [
            'Figma',
            'Illustrator',
            'Photoshop',
            'Lightroom',
            'InDesign',
            'After Effects',
            'Gemini',
            'ChatGPT',
            'Claude Code',
            'Stitch',
            'Figma Make',
            'HTML',
            'CSS',
            'JavaScript',
            'Vibe Coding',
        ],
        languages: [
            'Chinese: Mother tongue',
            'German: C2',
            'English: C2',
            'French: A2',
            'Spanish: A1',
        ],
    },
    de: {
        title: 'Lebenslauf',
        subtitle: 'Einseitige Übersicht über Profil, Erfahrung, Bildung und Fähigkeiten.',
        download: 'PDF herunterladen',
        back: 'Zurück zur Startseite',
        profileTitle: 'Profil',
        profile: 'UX-Design-Studentin an der TH Ingolstadt mit fundiertem Hintergrund in der Medizin (LMU Klinikum). Ich verbinde Empathie und tiefes Nutzerverständnis aus meiner langjährigen Erfahrung in der Pflege mit modernen Design-Methoden. Mein Fokus liegt auf der Gestaltung intuitiver digitaler Erlebnisse, die echte menschliche Bedürfnisse adressieren.',
        contactTitle: 'Kontakt',
        experienceTitle: 'Berufserfahrung',
        educationTitle: 'Bildung',
        skillsTitle: 'Fähigkeiten & Tools',
        languagesTitle: 'Sprachen',
        contact: [
            'LinkedIn: https://www.linkedin.com/in/qi-wang-051159321/',
            'E-Mail: wangqimunich@gmail.com',
            'Tel.: +49 1748497777',
        ],
        experience: [
            {
                role: 'UX Design Praktikantin',
                company: 'MAindTec GmbH, Ingolstadt',
                period: 'Praktikum',
                project: 'Neuentwicklung der MAiQ 2.0 Plattform',
                bullets: [
                    'Erstellung von Low- und High-Fidelity Wireframes für neue Workflows und Interface-Ideen.',
                    'Entwicklung interaktiver Prototypen für Nutzertests und Iterationen.',
                    'Integration von AI-Tools in den Design-Workflow zur Beschleunigung von Exploration und Validierung.',
                    'Enge Zusammenarbeit mit Product und Engineering zur Abstimmung von Design-Entscheidungen.',
                ],
            },
        ],
        education: [
            {
                title: 'User Experience Design (B.Sc.)',
                school: 'Technische Hochschule Ingolstadt',
                period: 'Seit 10/2023',
            },
            {
                title: 'Abitur',
                school: 'Abendgymnasium für Berufstätige, München',
                period: '2019 - 2023',
            },
            {
                title: 'Diploma of Education, Nursing',
                school: 'Nanjing Medical University, China',
                period: '2007 - 2011',
            },
        ],
        skills: [
            'User Research',
            'Wireframing',
            'Prototyping',
            'Storytelling',
            'Apps und Webdesign',
        ],
        tools: [
            'Figma',
            'Illustrator',
            'Photoshop',
            'Lightroom',
            'InDesign',
            'After Effects',
            'Gemini',
            'ChatGPT',
            'Claude Code',
            'Stitch',
            'Figma Make',
            'HTML',
            'CSS',
            'JavaScript',
            'Vibe Coding',
        ],
        languages: [
            'Chinesisch: Muttersprache',
            'Deutsch: C2',
            'Englisch: C2',
            'Französisch: A2',
            'Spanisch: A1',
        ],
    },
} as const;

const designToolIcons = [
    { label: 'Figma', icon: 'F' },
    { label: 'Illustrator', icon: 'Ai' },
    { label: 'Photoshop', icon: 'Ps' },
    { label: 'Lightroom', icon: 'Lr' },
    { label: 'InDesign', icon: 'Id' },
    { label: 'After Effects', icon: 'Ae' },
];

const aiToolIcons = [
    { label: 'Gemini', icon: 'G' },
    { label: 'ChatGPT', icon: 'GPT' },
    { label: 'Claude Code', icon: 'C' },
    { label: 'Stitch', icon: 'S' },
    { label: 'Figma Make', icon: 'M' },
];

const coreToolItems = ['HTML', 'CSS', 'JavaScript', 'Vibe Coding'];

export default function ResumePage() {
    const { language } = useLanguage();
    const content = resumeContent[language];

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = `${content.title} | Qi Wang`;
    }, [content.title]);

    const handleDownload = () => {
        const pdfUrl = 'https://ik.imagekit.io/nhh7dpdil/Qi_Wang.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Qi_Wang.pdf';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <main className="resume-page">
            <div className="resume-page__shell">
                <div className="resume-page__actions no-print">
                    <Link to="/" className="resume-page__back">
                        {content.back}
                    </Link>
                    <button className="resume-page__download" onClick={handleDownload}>
                        {content.download}
                    </button>
                </div>

                <section className="resume-page__card">
                    <header className="resume-page__header">
                        <img
                            className="resume-page__photo"
                            src="https://ik.imagekit.io/nhh7dpdil/profilohne.png?updatedAt=1776677244148"
                            alt="Qi Wang portrait"
                        />
                        <div className="resume-page__hero-copy">
                            <p className="resume-page__eyebrow">{content.title}</p>
                            <h1 className="resume-page__name">Qi Wang</h1>
                            <p className="resume-page__role">UX / UI Designer</p>
                            <p className="resume-page__subtitle">{content.subtitle}</p>
                        </div>
                    </header>

                    <section className="resume-page__profile-block">
                        <h2 className="resume-page__section-title">{content.profileTitle}</h2>
                        <p className="resume-page__body-copy">{content.profile}</p>
                    </section>

                    <div className="resume-page__layout">
                        <div className="resume-page__column">
                            <section className="resume-page__section">
                                <h2 className="resume-page__section-title">{content.experienceTitle}</h2>
                                {content.experience.map((entry) => (
                                    <article key={entry.company} className="resume-page__entry">
                                        <div className="resume-page__entry-head">
                                            <div>
                                                <h3>{entry.role}</h3>
                                                <p>{entry.company}</p>
                                            </div>
                                            <span>{entry.period}</span>
                                        </div>
                                        <p className="resume-page__entry-project">{entry.project}</p>
                                        <ul>
                                            {entry.bullets.map((bullet) => (
                                                <li key={bullet}>{bullet}</li>
                                            ))}
                                        </ul>
                                    </article>
                                ))}
                            </section>

                            <section className="resume-page__section">
                                <h2 className="resume-page__section-title">{content.educationTitle}</h2>
                                {content.education.map((education) => (
                                    <article key={`${education.title}-${education.period}`} className="resume-page__entry resume-page__entry--compact">
                                        <div className="resume-page__entry-head">
                                            <div>
                                                <h3>{education.title}</h3>
                                                <p>{education.school}</p>
                                            </div>
                                            <span>{education.period}</span>
                                        </div>
                                    </article>
                                ))}
                            </section>
                        </div>

                        <div className="resume-page__column">
                            <section className="resume-page__section">
                                <h2 className="resume-page__section-title">{content.contactTitle}</h2>
                                <ul className="resume-page__list resume-page__list--contact">
                                    {content.contact.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className="resume-page__section">
                                <h2 className="resume-page__section-title">{content.skillsTitle}</h2>
                                <div className="resume-page__tag-cloud">
                                    {content.skills.map((skill) => (
                                        <span key={skill} className="resume-page__tag">{skill}</span>
                                    ))}
                                </div>
                                <div className="resume-page__subsection">
                                    <h3>Design Tools</h3>
                                    <div className="resume-page__tool-grid">
                                        {designToolIcons.map((tool) => (
                                            <span key={tool.label} className="resume-page__tool-chip" title={tool.label} aria-label={tool.label}>
                                                <span className="resume-page__tool-icon">{tool.icon}</span>
                                                <span className="resume-page__tool-label">{tool.label}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="resume-page__subsection">
                                    <h3>AI Tools</h3>
                                    <div className="resume-page__tool-grid">
                                        {aiToolIcons.map((tool) => (
                                            <span key={tool.label} className="resume-page__tool-chip" title={tool.label} aria-label={tool.label}>
                                                <span className="resume-page__tool-icon">{tool.icon}</span>
                                                <span className="resume-page__tool-label">{tool.label}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="resume-page__subsection">
                                    <h3>Technical</h3>
                                    <div className="resume-page__tag-cloud">
                                        {coreToolItems.map((tool) => (
                                            <span key={tool} className="resume-page__tag resume-page__tag--muted">{tool}</span>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            <section className="resume-page__section">
                                <h2 className="resume-page__section-title">{content.languagesTitle}</h2>
                                <ul className="resume-page__list">
                                    {content.languages.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
