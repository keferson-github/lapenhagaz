import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contato" className="py-16">
      <div
        className="container relative overflow-hidden rounded-lg border border-border bg-cover bg-center text-primary-foreground p-8 md:p-12 shadow-[var(--shadow-elevated)]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 to-background/60" aria-hidden />
        <div className="relative grid md:grid-cols-2 gap-6 items-center z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Pronto para ligar sua casa ou empresa ao gás natural?</h2>
            <p className="mt-2 opacity-90">Fale com nossos especialistas e descubra as vantagens para o seu consumo.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <a href="mailto:contato@lapenhagaz.com.br"><Button size="lg" variant="secondary">Fale conosco</Button></a>
            <a href="#inicio"><Button size="lg" variant="hero">Quero contratar</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;