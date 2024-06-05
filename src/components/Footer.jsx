const Footer = () => {
  const TAGS = [
    "Series",
    "Animación",
    "Comedia",
    "Drama",
    "Horror",
    "Musical",
    "Película",
    "Tragedia",
    "Documental",
    "Extranjero",
    "Acción",
    "Aventura",
    "Ciencia Ficción",
    "Policial",
    "Popular",
    "Historia",
    "Fantasia",
    'Nacional',
    'Español',
    'Latino',
    'Estrenos',
    'Actualidad',
    'Teatro',
    'Cine'
  ];

  return (
      <footer className="flex gap-10 p-8 justify-between items-center lg:p-28 text-1xl lg:gap-x-20 gap-y-10 flex-wrap  text-gray-400">
            {TAGS.map((tag) => (<p key={tag}>{tag}</p>))}
      </footer>
)
};

export default Footer;
