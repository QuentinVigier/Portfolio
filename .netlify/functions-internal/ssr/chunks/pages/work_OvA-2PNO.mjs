import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_U0v9-68k.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { g as getCollection, $ as $$Grid, a as $$PortfolioPreview } from './index_CEkT-Me-.mjs';
import { a as $$Hero, b as $$BaseLayout } from './404_DayLznCd.mjs';
import { a as $$ContactCTA } from './about_DQtzgSsw.mjs';

const $$Astro = createAstro();
const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Work;
  const projects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Work - Quentin Vigier", "description": "Les projets de Quentin Vigier" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20"> <main class="wrapper stack gap-8"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Mon Travail", "tagline": "D\xE9couvrez mes projets les plus r\xE9cents ci-dessous pour avoir une id\xE9e de mes comp\xE9tences et exp\xE8riences.", "align": "start" })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })} </li>`)}` })} </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})} </div> ` })}`;
}, "C:/Users/Jackson/portfolio/src/pages/work.astro", void 0);

const $$file = "C:/Users/Jackson/portfolio/src/pages/work.astro";
const $$url = "/work";

export { $$Work as default, $$file as file, $$url as url };
