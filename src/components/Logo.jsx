import { SITE } from '../config/site.js';

export default function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 font-serif text-xl tracking-wide" aria-label={`${SITE.name}, início`}>
      <img src={`${import.meta.env.BASE_URL}assets/images/logo-mark.svg`} width="30" height="30" alt="" />
      <span>
        {SITE.name}
        <span className="hidden sm:inline text-mute text-sm font-sans ml-2">{SITE.tagline}</span>
      </span>
    </a>
  );
}
