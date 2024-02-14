import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderSlot, f as renderComponent } from '../astro_U0v9-68k.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { $ as $$Icon, a as $$Hero, b as $$BaseLayout } from './404_DayLznCd.mjs';
/* empty css                          */
/* empty css                          */

const $$Astro$2 = createAstro();
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-balv45lp>${renderSlot($$result, $$slots["default"])}</a> `;
}, "C:/Users/Jackson/portfolio/src/components/CallToAction.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContactCTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactCTA;
  return renderTemplate`${maybeRenderHead()}<aside data-astro-cid-rcdzuq3a> <h2 data-astro-cid-rcdzuq3a>Envie de travailler avec moi ?</h2> ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "mailto:vigierquentinpro@gmail.com", "data-astro-cid-rcdzuq3a": true }, { "default": ($$result2) => renderTemplate`
Me contacter
${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} ` })} </aside> `;
}, "C:/Users/Jackson/portfolio/src/components/ContactCTA.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About - Quentin Vigier", "description": "About Quentin VIgier", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-kh7btl4r> <main class="wrapper about" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Hero", $$Hero, { "title": "About", "tagline": "Venez d\xE9couvrir mon parcours et mes comp\xE9tences.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <img width="1553" height="873" src="/assets/at-work.png" alt="Quentin VIgier au travail" data-astro-cid-kh7btl4r> ` })} <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Background</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
D'une formation initiale en commerce, j'ai choisit de me réorienter dans le domaine du développement à la suite de mon Master 1.
						J'ai eu l'occasion d'en apprendre les bases au cours de mon cursus en école de Commerce ce qui m'a décidé à m'orienter vers cette voie
						plutôt que ma voie initiale.
</p> <p data-astro-cid-kh7btl4r>
Ce qui me caractérise le plus c'est ma capacité d'adaptation que ce soit à de nouveaux environnements, de nouvelles technologies ou méthodes
						de travail. Je suis sans cesse à la recherche de nouvelles choses à apprendre ou à pérfectionner mes compétences
</p> <p data-astro-cid-kh7btl4r>
D'une nature patiente et ouverte, j'accorde de l'importance au travail d'équipe, à la communication ainsi qu'au partage de connaissances.
</p> </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Education</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>BAC+2 Développeur Web et Web Mobile (Titre RNCP), Master 1 ISC Paris - Master Management des Systèmes
						d’Informations - Entrepreunarial Track.</p> </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Skills</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>Curieux, Créatif, Autonome, Organisé, Polyuvalent, Team Work</p> </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Me Contacter</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>vigierquentinpro@gmail.com</p> </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-kh7btl4r": true })} </div> ` })} `;
}, "C:/Users/Jackson/portfolio/src/pages/about.astro", void 0);

const $$file = "C:/Users/Jackson/portfolio/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CallToAction as $, $$ContactCTA as a, about as b };
