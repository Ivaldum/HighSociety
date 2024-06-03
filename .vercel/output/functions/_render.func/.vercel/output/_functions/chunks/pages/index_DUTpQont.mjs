/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderHead, j as renderComponent, k as renderSlot } from '../astro_ZKrQkVZR.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$c = createAstro("https://astronaut.github.io");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Navbar;
  const navItems = [
    {
      title: "Nuestros Djs",
      label: "djs",
      url: "/#djs"
    },
    {
      title: "Eventos",
      label: "eventos",
      url: "/#eventos"
    },
    {
      title: "PlayList",
      label: "playlist",
      url: "/#spotify"
    },
    {
      title: "Contacto",
      label: "contacto",
      url: "mailto:agustinsantos63@gmail.com"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-10 flex justify-center items-center w-full mt-6" data-astro-cid-5blmo7yk> <nav class="flex flex-row px-3 text-xs md:text-xl font-medium rounded-full text-gray-200 items-center" data-astro-cid-5blmo7yk> <a href="https://www.instagram.com/highsociety.ar/" data-astro-cid-5blmo7yk> <img src="HS-blanco.png" alt="logo high" class="sm:h-12 h-6 sm:pr-12 pr-0" data-astro-cid-5blmo7yk> </a> <div class="flex flex-row" data-astro-cid-5blmo7yk> ${navItems.map((link) => renderTemplate`<a class="relative block px-6 py-2 transition hover:text-fucsia "${addAttribute(link.label, "aria-label")}${addAttribute(link.url, "href")} data-astro-cid-5blmo7yk> ${link.title} </a>`)} </div> </nav> </header>  `;
}, "C:/Users/Agustin Santos/OneDrive/Escritorio/HighSociety/src/components/Navbar.astro", void 0);

const $$Astro$b = createAstro("https://astronaut.github.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="flex flex-col items-center w-full mx-auto rounded-lg shadow m-4 bg-gray-900"> <div class="p-4 md:py-4"> <a href="https://flowbite.com/" class="flex items-center mb-2 sm:mb-0 space-x-3 rtl:space-x-reverse"> <img src="HS-blanco.png" class="h-12" alt="Flowbite Logo"> </a> </div> <div class="p-4 md:flex md:items-center md:justify-between"> <span class="text-sm sm:text-center text-gray-400">© 2024 <a href="https://www.instagram.com/highsociety.ar/">High Society</a>.
</span> </div> </footer>`;
}, "C:/Users/Agustin Santos/OneDrive/Escritorio/HighSociety/src/components/Footer.astro", void 0);

const $$Astro$a = createAstro("https://astronaut.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="HS-blanco.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="relative text-black dark:text-white"> <div class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-950"></div> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "C:/Users/Agustin Santos/OneDrive/Escritorio/HighSociety/src/layouts/Layout.astro", void 0);

const $$Astro$9 = createAstro("https://astronaut.github.io");
const $$DjsCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$DjsCard;
  const { name, location, instagram, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="relative flex flex-col items-center justify-center w-full p-[1px] transition-all rounded-md bg-gradient-to-b from-white/10 via-transparent to-transparent hover:via-white/10 group"> <div class="bg-[#000214]/50 flex-1 group-hover:bg-[#000214]/10 w-full px-4 py-8 rounded transition"> <figure class="flex items-center justify-center"> <img class="object-cover w-40 h-40 transition bg-white rounded-full group-hover:scale-110"${addAttribute(image, "src")}${addAttribute(`DJ ${name}`, "alt")}> </figure> <h3 class="mt-4 text-xl font-bold text-center text-white"> <a${addAttribute(instagram, "href")} target="_blank" rel="external noopener nofollow">${name}</a> </h3> <p class="text-l text-center text-fucsia">${location}</p> </div> </article>`;
}, "C:/Users/Agustin Santos/OneDrive/Escritorio/HighSociety/src/components/DjsCard.astro", void 0);

const $$Astro$8 = createAstro("https://astronaut.github.io");
const $$NuestrosDjs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$NuestrosDjs;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col flex-wrap items-center justify-center"> <h2 class="text-2xl md:text-4xl font-bold text-center text-white">
Nuestros Djs
</h2> <p class="max-w-xl text-md md:text-xl text-sky-200 text-center [text-wrap:balance] mt-4">
Los encargados de hacerte pasar una noche mágica ✨
</p> <div class="grid grid-cols-2 my-8 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-2 md:gap-x-8 md:gap-y-8"> ${renderComponent($$result, "DjsCard", $$DjsCard, { "name": "Gonza Paltenghi", "location": "Rosario del tala", "instagram": "https://www.instagram.com/GonzaPaltenghi", "image": "GonzaPaltenghi.png" })} ${renderComponent($$result, "DjsCard", $$DjsCard, { "name": "Rodrigo Veit", "location": "Macia", "instagram": "https://www.instagram.com/rodrigo_veit", "image": "RodrigoVeit.png" })} ${renderComponent($$result, "DjsCard", $$DjsCard, { "name": "Copy Legaria", "location": "Urdinarrain", "instagram": "https://www.instagram.com/copylegaria", "image": "CopyLegaria.png" })} ${renderComponent($$result, "DjsCard", $$DjsCard, { "name": "Mateo Bosc", "location": "Macia", "instagram": "https://www.instagram.com/mateobosc__", "image": "MateoBosc.png" })} ${renderComponent($$result, "DjsCard", $$DjsCard, { "name": "Joaquin Castillo", "location": "Basavilbaso", "instagram": "https://www.instagram.com/joaquiincastillo", "image": "JoaquinCastillo.png" })} ${renderComponent($$result, "DjsCard", $$DjsCard, { "name": "Paolo Maffei", "location": "Concepcion del Uruguay", "instagram": "https://www.instagram.com/paolomaffei_", "image": "PaoloMaffei.png" })} ${renderComponent($$result, "DjsCard", $$DjsCard, { "name": "\u{1F512}", "location": "Secret Location", "instagram": "", "image": "" })} ${renderComponent($$result, "DjsCard", $$DjsCard, { "name": "\u{1F512}", "location": "Secret Location", "instagram": "", "image": "" })} </div> </section>`;
}, "C:/Users/Agustin Santos/OneDrive/Escritorio/HighSociety/src/components/NuestrosDjs.astro", void 0);

const $$Astro$7 = createAstro("https://astronaut.github.io");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="py-4 px-4 mx-auto max-w-4xl pt-16 lg:pb- lg:px-6"> <div class="mx-auto text-center"> <h2 class="mb-4 text-4xl md:text-6xl tracking-tight font-extrabold text-white"> <a href="">High Society 🗽</a> </h2> <p class="font-light sm:text-xl text-gray-400">
Todos quieren pertenecer, pocos tienen la chance.
</p> </div> </header>`;
}, "C:/Users/Agustin Santos/OneDrive/Escritorio/HighSociety/src/components/Header.astro", void 0);

const $$Astro$6 = createAstro("https://astronaut.github.io");
const $$SectionContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(id, "data-section")}${addAttribute(`section ${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/Agustin Santos/OneDrive/Escritorio/HighSociety/src/components/SectionContainer.astro", void 0);

const $$Astro$5 = createAstro("https://astronaut.github.io");
const $$EventosCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$EventosCard;
  const { title, description, instagram, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-sm border rounded-lg shadow bg-gray-900 border-gray-700"> <a${addAttribute(instagram, "href")}> <img class="rounded-t-lg"${addAttribute(image, "src")} alt=""> </a> <div class="p-4"> <a${addAttribute(instagram, "href")}> <h5 class="mb-2 text-2xl font-bold tracking-tight text-white"> ${title} </h5> </a> <p class="mb-3 font-normal text-pretty text-gray-400"> ${description} </p> </div> </div>`;
}, "C:/Users/Agustin Santos/OneDrive/Escritorio/HighSociety/src/components/EventosCard.astro", void 0);

const $$Astro$4 = createAstro("https://astronaut.github.io");
const $$Eventos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Eventos;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col flex-wrap items-center justify-center"> <h2 class="text-4xl font-bold text-center text-white">Eventos</h2> <p class="max-w-xl text-lg md:text-xl text-sky-200 text-center [text-wrap:balance] mt-4">
Nos caracterizamos por realizar eventos unicos
</p> <div class="grid grid-cols-1 my-8 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 sm:px-2 px-8"> ${renderComponent($$result, "EventosCard", $$EventosCard, { "title": "SUMMER CLUB \u{1F334}", "description": `M\xE1s conocido como "El Club del Verano"\u2600\uFE0F .
        Una serie de fiestas %100 al aire libre . Esas que tanto te gustan a vos, en realidad, a TODOS\u{1F970} .
        \u{1F3D6}\uFE0FEl verano es al aire libre, y con High\u{1F576}\uFE0F.`, "instagram": "https://www.instagram.com/summer.club____/", "image": "summerclub.jpg" })} ${renderComponent($$result, "EventosCard", $$EventosCard, { "title": "LA FINCA \u{1F3DB}\uFE0F", "description": `Es un para\xEDso que abre sus puertas en ocasiones especiales, FINDES XXL, por lo general .
      Un lugar totalmente misterioso, donde tanto los organizadores como los que concurren a los eventos firman un pacto de silencio, donde lo ocurrido en la noche no se vuelve a repetir ni contar \u{1F92B}.`, "instagram": "https://www.instagram.com/lafinca_____/", "image": "lafinca.jpg" })} ${renderComponent($$result, "EventosCard", $$EventosCard, { "title": "YOUNG \u{1F984}", "description": `Es un espacio donde todas las promos y sus invitados van a poder disfrutar una noche a lo High ; a su manera, a su gusto, como ellos kieran vamos a decirle.
      El fin de las estudiantinas es colaborar con la PROMO25 a recaudar fondos
      para el Baile de Recepci\xF3n 2024\u{1F498}.`, "instagram": "https://www.instagram.com/young.season_/", "image": "young.jpg" })} </div> </section>`;
}, "C:/Users/Agustin Santos/OneDrive/Escritorio/HighSociety/src/components/Eventos.astro", void 0);

const $$Astro$3 = createAstro("https://astronaut.github.io");
const $$PlaylistSpoty = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PlaylistSpoty;
  return renderTemplate`${maybeRenderHead()}<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/72KMus6Ii1Nmvl4nM8nACO?utm_source=generator" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
</iframe>`;
}, "C:/Users/Agustin Santos/OneDrive/Escritorio/HighSociety/src/components/PlaylistSpoty.astro", void 0);

const $$Astro$2 = createAstro("https://astronaut.github.io");
const $$SectionSpoty = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SectionSpoty;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center mb-5"> <h2 class="text-4xl py-4 text-white">Musiquita ✨</h2> ${renderComponent($$result, "PlaylistSpoty", $$PlaylistSpoty, {})} </div>`;
}, "C:/Users/Agustin Santos/OneDrive/Escritorio/HighSociety/src/components/SectionSpoty.astro", void 0);

const $$Astro$1 = createAstro("https://astronaut.github.io");
const $$NextEvent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NextEvent;
  const {
    title,
    description,
    imageSrc,
    imageAlt,
    button1Link,
    button2Link
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col justify-center items-center mb-20"> <h2 class="text-white text-4xl font-bold mb-4">${title}</h2> <p class="text-white">${description}</p> <img${addAttribute(imageSrc, "src")}${addAttribute(imageAlt, "alt")} class="w-full h-auto rounded-lg mb-4"> <div class="mt-4"> <a${addAttribute(button1Link, "href")} class="mr-4 px-4 py-2 bg-slate-500 text-white rounded hover:bg-fuchsia-600">+ info</a> <a${addAttribute(button2Link, "href")} class="px-4 py-2 bg-slate-500 text-white rounded hover:bg-fuchsia-600">Adquiri tu ticket</a> </div> </section>`;
}, "C:/Users/Agustin Santos/OneDrive/Escritorio/HighSociety/src/components/NextEvent.astro", void 0);

const $$Astro = createAstro("https://astronaut.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "High Society" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "nosotros", "class": "py-8 md:py-16" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Header", $$Header, {})} ` })} </main> <div> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "djs" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col justify-center items-center gap-8"> <h2 class="text-4xl text-white">Proximos eventos</h2> <div class="flex flex-row gap-6"> ${renderComponent($$result3, "NextEvent", $$NextEvent, { "title": "After Club", "description": "Flow 2000", "imageAlt": "imagen flow 2000", "imageSrc": "flow2000.jpg", "button1Link": "http://www.instagram.com/highsociety.ar", "button2Link": "https://www.passline.com/eventos?q=high+society&region=&mes=&pais=argentina&page=1" })} ${renderComponent($$result3, "NextEvent", $$NextEvent, { "title": "Flow 2000", "description": "Flow 2000", "imageAlt": "imagen After club", "imageSrc": "flow2000.jpg", "button1Link": "http://www.instagram.com/highsociety.ar", "button2Link": "https://www.passline.com/eventos?q=high+society&region=&mes=&pais=argentina&page=1" })} </div> </div> ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "djs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "NuestrosDjs", $$NuestrosDjs, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "eventos" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Eventos", $$Eventos, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "spotify" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionSpoty", $$SectionSpoty, {})} ` })} </div> ` })}`;
}, "C:/Users/Agustin Santos/OneDrive/Escritorio/HighSociety/src/pages/index.astro", void 0);

const $$file = "C:/Users/Agustin Santos/OneDrive/Escritorio/HighSociety/src/pages/index.astro";
const $$url = "/my-repo";

export { $$Index as default, $$file as file, $$url as url };
