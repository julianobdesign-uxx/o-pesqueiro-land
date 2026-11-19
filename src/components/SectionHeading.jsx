export default function SectionHeading({ kicker, title, text, light = false }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: light ? '#7fd1c7' : undefined }}>
        <span className={light ? '' : 'text-ocean'}>{kicker}</span>
      </p>
      <h2 className="font-serif text-3xl sm:text-4xl mt-2">{title}</h2>
      {text && <p className={`mt-3 ${light ? 'text-white/80' : 'text-mute'}`}>{text}</p>}
    </div>
  );
}
