import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="container grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Fale com a Lapenhagáz</h2>
          <p className="text-muted-foreground max-w-prose">
            Precisa de ajuda ou quer contratar nossos serviços? Nossa equipe está pronta para atender você.
          </p>
          <div className="flex gap-3">
            <a href="tel:0800000000"><Button variant="secondary">Ligar agora</Button></a>
            <a href="/contato"><Button variant="hero">Formulário de contato</Button></a>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <ul className="space-y-3">
            <li><span className="font-medium">Emergência:</span> 0800 000 000</li>
            <li><span className="font-medium">Comercial:</span> (11) 0000-0000</li>
            <li><span className="font-medium">E-mail:</span> atendimento@lapenhagaz.com.br</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
