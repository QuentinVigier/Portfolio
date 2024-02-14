import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_BqFnqM-y.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { b as $$Hero, a as $$BaseLayout } from './404_CNWqadzr.mjs';
import { $ as $$ContactCTA } from './__D4x3BcGr.mjs';
/* empty css                          */

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

export { $$About as default, $$file as file, $$url as url };
