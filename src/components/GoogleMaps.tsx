const GoogleMaps = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Nossa Localização</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visite nossa loja física ou entre em contato conosco. Estamos localizados em uma região de fácil acesso.
          </p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7627455132706!2d-46.54166522489273!3d-23.505053678838575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce610ba4ebe9dd%3A0x1f19f592ca450df!2sLapenhagas%20Com%C3%A9rcio%20G%C3%A1s!5e0!3m2!1spt-BR!2sbr!4v1755998229801!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="350" 
            style={{border: 0}} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Lapenhagáz"
          />
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            📍 Clique no mapa para abrir no Google Maps e obter direções
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoogleMaps;