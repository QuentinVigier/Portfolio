import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_U0v9-68k.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';

const html = "";

				const frontmatter = {"title":"Modern Website","publishDate":"2020-03-02T00:00:00.000Z","img":"/assets/en-cours.jpg","img_alt":"En cours","description":"En cours\n","tags":["Design","UX/UI","React/Tailwind"]};
				const file = "C:/Users/Jackson/portfolio/src/content/work/modern-website.md";
				const url = undefined;
				function rawContent() {
					return "\n";
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
