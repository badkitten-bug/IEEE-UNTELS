import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderHead, j as renderComponent, k as renderSlot, u as unescapeHTML, h as addAttribute } from '../astro_hpruRCdx.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import crypto from 'node:crypto';
/* empty css                          */

if (!globalThis.crypto) globalThis.crypto = crypto;
if (typeof globalThis.crypto.subtle === "undefined") globalThis.crypto.subtle = crypto.webcrypto.subtle;
if (typeof globalThis.crypto.randomUUID === "undefined") globalThis.crypto.randomUUID = crypto.randomUUID;

const $$Astro$9 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header id="header-nav" class="fixed top-0 w-full px-6 py-4 z-50"> <div class="max-w-7xl mx-auto flex items-center justify-between gap-16"> <a href="/" class="col-span-1"></a> <nav class="col-span-2 justify-self-center"> <a href="/#about" class="text-lg font-bold text-white-700 hover:text-yellow-600 px-4">About</a> <a href="/#projects" class="text-lg font-bold text-white-700 hover:text-yellow-600 px-4">Projects</a> <a href="/#contact" class="text-lg font-bold text-white-700 hover:text-yellow-600 px-4">Contact</a> </nav> <a href="#" class="border rounded-full inline-block border-white px-4 py-2
        justify-self-end hover:bg-white hover:text-black duration-300">
IEEE: OU's Estudiantil UNTELS
</a> </div> </header>`;
}, "C:/Users/Steve/Escritorio/IEEE-PAGE/src/components/Header.astro", void 0);

const $$Astro$8 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta name="viewport" content="width=device-width"><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Steve/Escritorio/IEEE-PAGE/src/components/Layout.astro", void 0);

const SEO_TITLE$1 = "Branch IEEE UNTELS with more than 13 years at the National University of Technology of Lima Sur.";
const SEO_DESCRIPTION$1 = "Discover the IEEE UNTELS Student Branch, a student organization that promotes the professional and personal development of students at the National University of Technology of Lima Sur.";
const INTRO_TITLE$1 = "Welcome";
const INTRO_TITLE_AFTER_BR$1 = "to the IEEE UNTELS Student Branch";
const INTRO_DESCRIPTION_1$1 = "The IEEE UNTELS 2024 student branch is a non-profit student organization that seeks to promote <strong>education</strong> and <strong>research</strong> in electrical, electronic, computer engineering and related fields.";
const INTRO_DESCRIPTION_2$1 = "Our goal is to promote the professional and personal development of students at the National University of Technology of Lima Sur, through academic, technical and social activities.";
const INTRO_DESCRIPTION_3$1 = "Join us and be part of the IEEE community!";
const ABOUT_TITLE$1 = "About us";
const ABOUT_DESCRIPTION_1$1 = "The IEEE UNTELS Student Branch was founded in 2008 and since then has worked on the organization of academic, technical and social events for students at the National University of Technology of Lima Sur.";
const ABOUT_DESCRIPTION_2$1 = "Our goal is to promote the professional and personal development of our members, through activities that promote education, research and innovation in the field of electrical, electronic, computer engineering and related fields.";
const ABOUT_DESCRIPTION_3$1 = "Join us and be part of the IEEE community!";
const BENEFITS_TITLE$1 = "Benefits";
const BENEFITS_DESCRIPTION_1$1 = "By joining the IEEE UNTELS Student Branch, you will have the opportunity to participate in a variety of academic, technical and social activities, which will allow you to develop your professional and personal skills.";
const BENEFITS_DESCRIPTION_2$1 = "In addition, you will have access to resources and tools that will help you complement your academic training, such as publications, conferences, online courses and volunteer opportunities.";
const BENEFITS_DESCRIPTION_3$1 = "Join us and take advantage of all the benefits that the IEEE community has to offer!";
const ACTIVITIES_TITLE$1 = "Activities";
const ACTIVITIES_DESCRIPTION_1$1 = "The IEEE UNTELS Student Branch organizes a variety of academic, technical and social activities, which seek to promote the professional and personal development of its members.";
const ACTIVITIES_DESCRIPTION_2$1 = "Among the activities we carry out are conferences, workshops, courses, technical visits, competitions, social events and much more.";
const ACTIVITIES_DESCRIPTION_3$1 = "Join us and participate in our activities!";
const CONTACT_TITLE$1 = "Contact us";
const CONTACT_DESCRIPTION_1$1 = "If you have any questions or would like more information about the IEEE UNTELS Student Branch, please do not hesitate to contact us.";
const CONTACT_DESCRIPTION_2$1 = "You can send us a message through our social networks or complete the contact form on this page.";
const CONTACT_DESCRIPTION_3$1 = "We will be happy to assist you!";
const CONTACT_FORM_TITLE$1 = "Contact form";
const CONTACT_FORM_NAME$1 = "Name";
const CONTACT_FORM_EMAIL$1 = "Email";
const CONTACT_FORM_MESSAGE$1 = "Message";
const CONTACT_FORM_SEND$1 = "Send";
const CONTACT_FORM_SUCCESS$1 = "Thank you for your message! We will contact you as soon as possible.";
const CONTACT_FORM_ERROR$1 = "An error has occurred. Please try again.";
const CONTACT_FORM_EMPTY_FIELDS$1 = "Please complete all fields in the form.";
const CONTACT_FORM_INVALID_EMAIL$1 = "Please enter a valid email address.";
const CONTACT_FORM_NAME_LENGTH$1 = "The name must be between 2 and 100 characters.";
const CONTACT_FORM_EMAIL_LENGTH$1 = "The email must be between 5 and 100 characters.";
const CONTACT_FORM_MESSAGE_LENGTH$1 = "The message must be between 10 and 1000 characters.";
const CONTACT_FORM_ERROR_MESSAGE$1 = "An error has occurred. Please try again.";
const CONTACT_FORM_ERROR_NETWORK$1 = "A network error has occurred. Please try again.";
const CONTACT_FORM_ERROR_TIMEOUT$1 = "The server took too long to respond. Please try again.";
const CONTACT_FORM_ERROR_INTERNAL$1 = "An internal error has occurred. Please try again.";
const CONTACT_FORM_ERROR_UNKNOWN$1 = "An unknown error has occurred. Please try again.";
const CONTACT_FORM_ERROR_INVALID_RESPONSE$1 = "The server's response is not valid. Please try again.";
const english = {
	SEO_TITLE: SEO_TITLE$1,
	SEO_DESCRIPTION: SEO_DESCRIPTION$1,
	INTRO_TITLE: INTRO_TITLE$1,
	INTRO_TITLE_AFTER_BR: INTRO_TITLE_AFTER_BR$1,
	INTRO_DESCRIPTION_1: INTRO_DESCRIPTION_1$1,
	INTRO_DESCRIPTION_2: INTRO_DESCRIPTION_2$1,
	INTRO_DESCRIPTION_3: INTRO_DESCRIPTION_3$1,
	ABOUT_TITLE: ABOUT_TITLE$1,
	ABOUT_DESCRIPTION_1: ABOUT_DESCRIPTION_1$1,
	ABOUT_DESCRIPTION_2: ABOUT_DESCRIPTION_2$1,
	ABOUT_DESCRIPTION_3: ABOUT_DESCRIPTION_3$1,
	BENEFITS_TITLE: BENEFITS_TITLE$1,
	BENEFITS_DESCRIPTION_1: BENEFITS_DESCRIPTION_1$1,
	BENEFITS_DESCRIPTION_2: BENEFITS_DESCRIPTION_2$1,
	BENEFITS_DESCRIPTION_3: BENEFITS_DESCRIPTION_3$1,
	ACTIVITIES_TITLE: ACTIVITIES_TITLE$1,
	ACTIVITIES_DESCRIPTION_1: ACTIVITIES_DESCRIPTION_1$1,
	ACTIVITIES_DESCRIPTION_2: ACTIVITIES_DESCRIPTION_2$1,
	ACTIVITIES_DESCRIPTION_3: ACTIVITIES_DESCRIPTION_3$1,
	CONTACT_TITLE: CONTACT_TITLE$1,
	CONTACT_DESCRIPTION_1: CONTACT_DESCRIPTION_1$1,
	CONTACT_DESCRIPTION_2: CONTACT_DESCRIPTION_2$1,
	CONTACT_DESCRIPTION_3: CONTACT_DESCRIPTION_3$1,
	CONTACT_FORM_TITLE: CONTACT_FORM_TITLE$1,
	CONTACT_FORM_NAME: CONTACT_FORM_NAME$1,
	CONTACT_FORM_EMAIL: CONTACT_FORM_EMAIL$1,
	CONTACT_FORM_MESSAGE: CONTACT_FORM_MESSAGE$1,
	CONTACT_FORM_SEND: CONTACT_FORM_SEND$1,
	CONTACT_FORM_SUCCESS: CONTACT_FORM_SUCCESS$1,
	CONTACT_FORM_ERROR: CONTACT_FORM_ERROR$1,
	CONTACT_FORM_EMPTY_FIELDS: CONTACT_FORM_EMPTY_FIELDS$1,
	CONTACT_FORM_INVALID_EMAIL: CONTACT_FORM_INVALID_EMAIL$1,
	CONTACT_FORM_NAME_LENGTH: CONTACT_FORM_NAME_LENGTH$1,
	CONTACT_FORM_EMAIL_LENGTH: CONTACT_FORM_EMAIL_LENGTH$1,
	CONTACT_FORM_MESSAGE_LENGTH: CONTACT_FORM_MESSAGE_LENGTH$1,
	CONTACT_FORM_ERROR_MESSAGE: CONTACT_FORM_ERROR_MESSAGE$1,
	CONTACT_FORM_ERROR_NETWORK: CONTACT_FORM_ERROR_NETWORK$1,
	CONTACT_FORM_ERROR_TIMEOUT: CONTACT_FORM_ERROR_TIMEOUT$1,
	CONTACT_FORM_ERROR_INTERNAL: CONTACT_FORM_ERROR_INTERNAL$1,
	CONTACT_FORM_ERROR_UNKNOWN: CONTACT_FORM_ERROR_UNKNOWN$1,
	CONTACT_FORM_ERROR_INVALID_RESPONSE: CONTACT_FORM_ERROR_INVALID_RESPONSE$1
};

const SEO_TITLE = "Rama estudiantil IEEE UNTELS con más de 13 años en la Universidad Nacional Tecnológica de Lima Sur.";
const SEO_DESCRIPTION = "Descubre la Rama Estudiantil IEEE UNTELS, una organización estudiantil que promueve el desarrollo profesional y personal de los estudiantes de la Universidad Nacional Tecnológica de Lima Sur.";
const INTRO_TITLE = "Bienvenidos/as";
const INTRO_TITLE_AFTER_BR = "a la Rama Estudiantil IEEE UNTELS";
const INTRO_DESCRIPTION_1 = "La rama estudiantil IEEE UNTELS 2024 es una organización estudiantil sin fines de lucro que busca promover la <strong>educación</strong> y la <strong>investigación</strong> en ingeniería eléctrica, electrónica, informática y áreas afines.";
const INTRO_DESCRIPTION_2 = "Nuestro objetivo es fomentar el desarrollo profesional y personal de los estudiantes de la Universidad Nacional Tecnológica de Lima Sur, a través de actividades académicas, técnicas y sociales.";
const INTRO_DESCRIPTION_3 = "¡Únete a nosotros y sé parte de la comunidad IEEE!";
const ABOUT_TITLE = "Acerca de nosotros";
const ABOUT_DESCRIPTION_1 = "La Rama Estudiantil IEEE UNTELS fue fundada en el año 2008 y desde entonces ha trabajado en la organización de eventos académicos, técnicos y sociales para los estudiantes de la Universidad Nacional Tecnológica de Lima Sur.";
const ABOUT_DESCRIPTION_2 = "Nuestro objetivo es fomentar el desarrollo profesional y personal de nuestros miembros, a través de actividades que promuevan la educación, la investigación y la innovación en el campo de la ingeniería eléctrica, electrónica, informática y áreas afines.";
const ABOUT_DESCRIPTION_3 = "¡Únete a nosotros y sé parte de la comunidad IEEE!";
const BENEFITS_TITLE = "Beneficios";
const BENEFITS_DESCRIPTION_1 = "Al unirte a la Rama Estudiantil IEEE UNTELS, tendrás la oportunidad de participar en una variedad de actividades académicas, técnicas y sociales, que te permitirán desarrollar tus habilidades profesionales y personales.";
const BENEFITS_DESCRIPTION_2 = "Además, tendrás acceso a recursos y herramientas que te ayudarán a complementar tu formación académica, como publicaciones, conferencias, cursos en línea y oportunidades de voluntariado.";
const BENEFITS_DESCRIPTION_3 = "¡Únete a nosotros y aprovecha todos los beneficios que la comunidad IEEE tiene para ofrecerte!";
const ACTIVITIES_TITLE = "Actividades";
const ACTIVITIES_DESCRIPTION_1 = "La Rama Estudiantil IEEE UNTELS organiza una variedad de actividades académicas, técnicas y sociales, que buscan fomentar el desarrollo profesional y personal de sus miembros.";
const ACTIVITIES_DESCRIPTION_2 = "Entre las actividades que realizamos se encuentran conferencias, talleres, cursos, visitas técnicas, competencias, eventos sociales y mucho más.";
const ACTIVITIES_DESCRIPTION_3 = "¡Únete a nosotros y participa en nuestras actividades!";
const CONTACT_TITLE = "Contáctanos";
const CONTACT_DESCRIPTION_1 = "Si tienes alguna pregunta o deseas obtener más información sobre la Rama Estudiantil IEEE UNTELS, no dudes en contactarnos.";
const CONTACT_DESCRIPTION_2 = "Puedes enviarnos un mensaje a través de nuestras redes sociales o completar el formulario de contacto que se encuentra en esta página.";
const CONTACT_DESCRIPTION_3 = "¡Estaremos encantados de atenderte!";
const CONTACT_FORM_TITLE = "Formulario de contacto";
const CONTACT_FORM_NAME = "Nombre";
const CONTACT_FORM_EMAIL = "Correo electrónico";
const CONTACT_FORM_MESSAGE = "Mensaje";
const CONTACT_FORM_SEND = "Enviar";
const CONTACT_FORM_SUCCESS = "¡Gracias por tu mensaje! Nos pondremos en contacto contigo lo antes posible.";
const CONTACT_FORM_ERROR = "Ha ocurrido un error. Por favor, inténtalo de nuevo.";
const CONTACT_FORM_EMPTY_FIELDS = "Por favor, completa todos los campos del formulario.";
const CONTACT_FORM_INVALID_EMAIL = "Por favor, introduce una dirección de correo electrónico válida.";
const CONTACT_FORM_NAME_LENGTH = "El nombre debe tener entre 2 y 100 caracteres.";
const CONTACT_FORM_EMAIL_LENGTH = "El correo electrónico debe tener entre 5 y 100 caracteres.";
const CONTACT_FORM_MESSAGE_LENGTH = "El mensaje debe tener entre 10 y 1000 caracteres.";
const CONTACT_FORM_ERROR_MESSAGE = "Ha ocurrido un error. Por favor, inténtalo de nuevo.";
const CONTACT_FORM_ERROR_NETWORK = "Ha ocurrido un error de red. Por favor, inténtalo de nuevo.";
const CONTACT_FORM_ERROR_TIMEOUT = "El servidor ha tardado demasiado en responder. Por favor, inténtalo de nuevo.";
const CONTACT_FORM_ERROR_INTERNAL = "Ha ocurrido un error interno. Por favor, inténtalo de nuevo.";
const CONTACT_FORM_ERROR_UNKNOWN = "Ha ocurrido un error desconocido. Por favor, inténtalo de nuevo.";
const CONTACT_FORM_ERROR_INVALID_RESPONSE = "La respuesta del servidor no es válida. Por favor, inténtalo de nuevo.";
const spanish = {
	SEO_TITLE: SEO_TITLE,
	SEO_DESCRIPTION: SEO_DESCRIPTION,
	INTRO_TITLE: INTRO_TITLE,
	INTRO_TITLE_AFTER_BR: INTRO_TITLE_AFTER_BR,
	INTRO_DESCRIPTION_1: INTRO_DESCRIPTION_1,
	INTRO_DESCRIPTION_2: INTRO_DESCRIPTION_2,
	INTRO_DESCRIPTION_3: INTRO_DESCRIPTION_3,
	ABOUT_TITLE: ABOUT_TITLE,
	ABOUT_DESCRIPTION_1: ABOUT_DESCRIPTION_1,
	ABOUT_DESCRIPTION_2: ABOUT_DESCRIPTION_2,
	ABOUT_DESCRIPTION_3: ABOUT_DESCRIPTION_3,
	BENEFITS_TITLE: BENEFITS_TITLE,
	BENEFITS_DESCRIPTION_1: BENEFITS_DESCRIPTION_1,
	BENEFITS_DESCRIPTION_2: BENEFITS_DESCRIPTION_2,
	BENEFITS_DESCRIPTION_3: BENEFITS_DESCRIPTION_3,
	ACTIVITIES_TITLE: ACTIVITIES_TITLE,
	ACTIVITIES_DESCRIPTION_1: ACTIVITIES_DESCRIPTION_1,
	ACTIVITIES_DESCRIPTION_2: ACTIVITIES_DESCRIPTION_2,
	ACTIVITIES_DESCRIPTION_3: ACTIVITIES_DESCRIPTION_3,
	CONTACT_TITLE: CONTACT_TITLE,
	CONTACT_DESCRIPTION_1: CONTACT_DESCRIPTION_1,
	CONTACT_DESCRIPTION_2: CONTACT_DESCRIPTION_2,
	CONTACT_DESCRIPTION_3: CONTACT_DESCRIPTION_3,
	CONTACT_FORM_TITLE: CONTACT_FORM_TITLE,
	CONTACT_FORM_NAME: CONTACT_FORM_NAME,
	CONTACT_FORM_EMAIL: CONTACT_FORM_EMAIL,
	CONTACT_FORM_MESSAGE: CONTACT_FORM_MESSAGE,
	CONTACT_FORM_SEND: CONTACT_FORM_SEND,
	CONTACT_FORM_SUCCESS: CONTACT_FORM_SUCCESS,
	CONTACT_FORM_ERROR: CONTACT_FORM_ERROR,
	CONTACT_FORM_EMPTY_FIELDS: CONTACT_FORM_EMPTY_FIELDS,
	CONTACT_FORM_INVALID_EMAIL: CONTACT_FORM_INVALID_EMAIL,
	CONTACT_FORM_NAME_LENGTH: CONTACT_FORM_NAME_LENGTH,
	CONTACT_FORM_EMAIL_LENGTH: CONTACT_FORM_EMAIL_LENGTH,
	CONTACT_FORM_MESSAGE_LENGTH: CONTACT_FORM_MESSAGE_LENGTH,
	CONTACT_FORM_ERROR_MESSAGE: CONTACT_FORM_ERROR_MESSAGE,
	CONTACT_FORM_ERROR_NETWORK: CONTACT_FORM_ERROR_NETWORK,
	CONTACT_FORM_ERROR_TIMEOUT: CONTACT_FORM_ERROR_TIMEOUT,
	CONTACT_FORM_ERROR_INTERNAL: CONTACT_FORM_ERROR_INTERNAL,
	CONTACT_FORM_ERROR_UNKNOWN: CONTACT_FORM_ERROR_UNKNOWN,
	CONTACT_FORM_ERROR_INVALID_RESPONSE: CONTACT_FORM_ERROR_INVALID_RESPONSE
};

const LANG = {
  ENGLISH: "en",
  SPANISH: "es"
};
const getI18N = ({ currentLocale = "es" }) => {
  if (currentLocale === LANG.ENGLISH)
    return { ...spanish, ...english };
  return spanish;
};

const $$Astro$7 = createAstro();
const $$Intro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Intro;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<section class="text-xl text-left px-20 max-w-[70ch] text-pretty mx-auto my-24"> <img class="w-20 mb-10 m-auto" src="/ieee.jpg" alt="logo de IEEE"> <h1 class="text-4xl font-semibold text-center text-wrap mx-auto mb-10 tracking-wide"> ${i18n.INTRO_TITLE}<br> ${i18n.INTRO_TITLE_AFTER_BR} </h1> <p>${unescapeHTML(i18n.INTRO_DESCRIPTION_1)}</p> <p>${unescapeHTML(i18n.INTRO_DESCRIPTION_2)}</p> <p>${unescapeHTML(i18n.INTRO_DESCRIPTION_3)}</p> </section>`;
}, "C:/Users/Steve/Escritorio/IEEE-PAGE/src/components/Intro.astro", void 0);

const $$Astro$6 = createAstro();
const $$BentoItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BentoItem;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`
  ${Astro2.props.class}
  col-span-5
  relative rounded-xl
  backdrop-blur-md
  border border-black/10
  shadow-inner shadow-white/10
  overflow-hidden
  group
`, "class")}> <div class="absolute bottom-0 top-0 z-10 h-full w-full
bg-gradient-to-b from-transparent from-40% via-[#151836]/50 to-[#151836]/80"></div> ${renderSlot($$result, $$slots["image"])} <div class="relative z-20 flex h-full select-none flex-col justify-end gap-1 p-4 text-lg md:p-6"> <h2 class="mb-4 text-balance text-3xl font-semibold uppercase text-white"> ${title} </h2> ${subtitle && renderTemplate`<h3 class="-mt-4 mb-4 text-3xl font-semibold text-sky-200/80"> ${subtitle} </h3>`} ${renderSlot($$result, $$slots["content"])} </div> </article>`;
}, "C:/Users/Steve/Escritorio/IEEE-PAGE/src/components/BentoItem.astro", void 0);

const $$Astro$5 = createAstro();
const $$Bento = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Bento;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`
  w-full max-w-[1400px]
  grid lg:grid-cols-10 auto-rows-[30rem] gap-4
  mx-auto p-20
  `, "class")}> ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "col-span-10 lg:col-span-6", "title": "CAS: Unidad Organizativa" }, { "content": ($$result2) => renderTemplate`<p class="max-w-xl"></p>`, "image": ($$result2) => renderTemplate`<div class="background transition-scale absolute bottom-0 left-0 top-0
      -z-10 h-full w-full bg-yellow-600
      bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110" style="background-image: url('/tech-blue.jpg');"></div>` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "col-span-10 lg:col-span-4", "title": "CAS: Unidad Organizativa" }, { "content": ($$result2) => renderTemplate`<p class="max-w-xl text-base md:text-lg"></p>`, "image": ($$result2) => renderTemplate`<div class="background transition-scale absolute bottom-0 left-0 top-0
      -z-10 h-full w-full bg-yellow-600
      bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110" style="background-image: url('/tech-blue.jpg');"></div>` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "col-span-10 md:col-span-4", "title": "CAS: Unidad Organizativa" }, { "content": ($$result2) => renderTemplate`<p class="max-w-xl text-base md:text-lg"></p>`, "image": ($$result2) => renderTemplate`<div class="background transition-scale absolute bottom-0 left-0 top-0
      -z-10 h-full w-full bg-yellow-600
      bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110" style="background-image: url('/tech-blue.jpg');"></div>` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "col-span-10 lg:col-span-6", "title": "CAS: Unidad Organizativa" }, { "content": ($$result2) => renderTemplate`<p class="max-w-xl"></p>`, "image": ($$result2) => renderTemplate`<div class="background transition-scale absolute bottom-0 left-0 top-0
      -z-10 h-full w-full bg-yellow-600
      bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110" style="background-image: url('/tech-blue.jpg');"></div>` })} </section> `;
}, "C:/Users/Steve/Escritorio/IEEE-PAGE/src/components/Bento.astro", void 0);

const $$Astro$4 = createAstro();
const $$PreFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$PreFooter;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto w-full max-w-[1400px] p-6 sm:p-20"> <h3 class="mx-auto mb-10 text-balance text-center text-xl font-semibold uppercase tracking-wide md:text-4xl"> <!-- {i18n.PREFOOTER_VIDEO_TITLE} --> </h3> ${renderComponent($$result, "lite-youtube", "lite-youtube", { "class": "rounded-xl shadow-2xl shadow-white/10", "videoid": "fgHKggNGazs" })}</section> `;
}, "C:/Users/Steve/Escritorio/IEEE-PAGE/src/components/PreFooter.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white dark:bg-gray-900"> <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"> <div class="md:flex md:justify-between"> <div class="mb-6 md:mb-0"> <a href="https://flowbite.com/" class="flex items-center"> <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo"> <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">IEEE UNTELS</span> </a> </div> <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"> <div> <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
Resources
</h2> <ul class="text-gray-500 dark:text-gray-400 font-medium"> <li class="mb-4"> <a href="https://flowbite.com/" class="hover:underline">Flowbite</a> </li> <li> <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a> </li> </ul> </div> <div> <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
Follow us
</h2> <ul class="text-gray-500 dark:text-gray-400 font-medium"> <li class="mb-4"> <a href="https://github.com/themesberg/flowbite" class="hover:underline">Github</a> </li> <li> <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a> </li> </ul> </div> <div> <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
Legal
</h2> <ul class="text-gray-500 dark:text-gray-400 font-medium"> <li class="mb-4"> <a href="#" class="hover:underline">Privacy Policy</a> </li> <li> <a href="#" class="hover:underline">Terms &amp; Conditions</a> </li> </ul> </div> </div> </div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <div class="sm:flex sm:items-center sm:justify-between"> <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
</span> <div class="flex mt-4 sm:justify-center sm:mt-0"> <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19"> <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"></path> </svg> <span class="sr-only">Facebook page</span> </a> <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16"> <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path> </svg> <span class="sr-only">Discord community</span> </a> <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17"> <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"></path> </svg> <span class="sr-only">Twitter page</span> </a> <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"></path> </svg> <span class="sr-only">GitHub account</span> </a> <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"></path> </svg> <span class="sr-only">Dribbble account</span> </a> </div> </div> </div> </footer>`;
}, "C:/Users/Steve/Escritorio/IEEE-PAGE/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$App = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$App;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": i18n.SEO_TITLE, "description": "Descubre una de las mejores comunidades para poder realizar y conocer personas con la misma pasi\xF3n en las ramas de Ingenier\xEDa!   \xDAnete y comparte con nosotros, tenemos cursos gratuitos, talleres, eventos y mucho m\xE1s." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Intro", $$Intro, {})} ${renderComponent($$result2, "Bento", $$Bento, {})} ${renderComponent($$result2, "PreFooter", $$PreFooter, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}  <!-- Authenticating with Google --> <!--     {session ? (
        <>
          <p>Hola {session.user?.email}</p>
          <SignOut>Cerrar Sesion</SignOut>
        </>
      ) : (
        <>
          <SignIn provider="google"> Iniciar con Google </SignIn>
          <SignIn provider="github"> Iniciar con Github </SignIn>
        </>
      )
    } -->`;
}, "C:/Users/Steve/Escritorio/IEEE-PAGE/src/components/App.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "App", $$App, {})}`;
}, "C:/Users/Steve/Escritorio/IEEE-PAGE/src/pages/index.astro", void 0);

const $$file$1 = "C:/Users/Steve/Escritorio/IEEE-PAGE/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "App", $$App, {})}`;
}, "C:/Users/Steve/Escritorio/IEEE-PAGE/src/pages/en/index.astro", void 0);

const $$file = "C:/Users/Steve/Escritorio/IEEE-PAGE/src/pages/en/index.astro";
const $$url = "/en";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
