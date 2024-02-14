import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_U0v9-68k.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';

const html = "<p>Dans le cadre de ma formation j’ai eu l’occasion de prendre en main JavaScript, voici l’un de mes premiers projets personnels réalisé avec JS, HTML et CSS sans aucun Framework. Ces projets personnels qui m’ont accompagné tout au long de ma formation m’ont permis de mieux comprendre le fonctionnement des langages de base du développement et ont été pour moi l’occasion d’essayer des choses, d’explorer et de voir ce qu’il était possible de faire dans les limites des langages sans Framework.</p>\n<p>La calculatrice a été l’un des premiers projets que j’ai réussit à terminer et qui est fonctionnelle. Il s’agit d’un des premiers projets que j’ai mené tout seul et qui m’as donné le goût de programmer des choses pour le plaisir de mon côté dans aucun cadre professionnel ou scolaire et m’ont permis de progresser rapidemment et de comprendre le fonctionnement de JavaScript ainsi que des algorithmes dans le cadre du développement.</p>";

				const frontmatter = {"title":"Calculatrice","publishDate":"2024-10-02T00:00:00.000Z","img":"/assets/calculatrice.jpg","img_alt":"Calculatrice Miami Vice Style","description":"Dans le cadre de ma formation voici l'un de mes premiers projets personnels sur Javascript\n","tags":["Dev","JS","Style"]};
				const file = "C:/Users/Jackson/portfolio/src/content/work/calculatrice.md";
				const url = undefined;
				function rawContent() {
					return "\nDans le cadre de ma formation j'ai eu l'occasion de prendre en main JavaScript, voici l'un de mes premiers projets personnels réalisé avec JS, HTML et CSS sans aucun Framework. Ces projets personnels qui m'ont accompagné tout au long de ma formation m'ont permis de mieux comprendre le fonctionnement des langages de base du développement et ont été pour moi l'occasion d'essayer des choses, d'explorer et de voir ce qu'il était possible de faire dans les limites des langages sans Framework. \n\nLa calculatrice a été l'un des premiers projets que j'ai réussit à terminer et qui est fonctionnelle. Il s'agit d'un des premiers projets que j'ai mené tout seul et qui m'as donné le goût de programmer des choses pour le plaisir de mon côté dans aucun cadre professionnel ou scolaire et m'ont permis de progresser rapidemment et de comprendre le fonctionnement de JavaScript ainsi que des algorithmes dans le cadre du développement. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
