import crypto from 'node:crypto';
/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate } from '../astro_09mVCEYX.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';

if (!globalThis.crypto) globalThis.crypto = crypto;
if (typeof globalThis.crypto.subtle === "undefined") globalThis.crypto.subtle = crypto.webcrypto.subtle;
if (typeof globalThis.crypto.randomUUID === "undefined") globalThis.crypto.randomUUID = crypto.randomUUID;

const $$Astro = createAstro();
const $$Archivo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Archivo;
  return renderTemplate``;
}, "C:/Users/Steve/Escritorio/IEEE-PAGE/src/pages/en/archivo.astro", void 0);

const $$file = "C:/Users/Steve/Escritorio/IEEE-PAGE/src/pages/en/archivo.astro";
const $$url = "/en/archivo";

export { $$Archivo as default, $$file as file, $$url as url };
