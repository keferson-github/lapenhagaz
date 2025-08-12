import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 4002-8922",
      desc: "Segunda a sexta, 8h às 18h"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      info: "(11) 99999-9999",
      desc: "Atendimento rápido e direto"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@lapenhagaz.com.br",
      desc: "Respondemos em até 24h"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua das Flores, 123 - Centro",
      desc: "São Paulo, SP - CEP 01234-567"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    console.log("Formulário enviado:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Estamos aqui para ajudar você. Entre em contato conosco e descobra 
              como podemos atender suas necessidades de energia e água mineral.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map(({ icon: Icon, title, info, desc }) => (
              <Card key={title} className="text-center border-border/70 hover:shadow-[var(--shadow-elevated)] transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="font-medium mb-1">{info}</p>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e nossa equipe entrará em contato.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo*</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail*</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto*</Label>
                      <Select onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o assunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gas-natural">Gás Natural</SelectItem>
                          <SelectItem value="agua-mineral">Água Mineral</SelectItem>
                          <SelectItem value="orcamento">Solicitar Orçamento</SelectItem>
                          <SelectItem value="suporte">Suporte Técnico</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem*</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      placeholder="Descreva como podemos ajudá-lo..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              <Card className="border-border/70">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Nossa Localização
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p>Mapa interativo será integrado aqui</p>
                      <p className="text-sm">Google Maps API</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">LapenhaGáz Distribuidora</p>
                    <p className="text-sm text-muted-foreground">
                      Rua das Flores, 123 - Centro<br />
                      São Paulo, SP - CEP 01234-567
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/70">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Horário de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Segunda a Sexta</span>
                      <span className="text-sm font-medium">08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Sábado</span>
                      <span className="text-sm font-medium">08:00 - 12:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Domingo</span>
                      <span className="text-sm text-muted-foreground">Fechado</span>
                    </div>
                    <hr className="my-3" />
                    <div className="text-center">
                      <p className="text-sm font-medium text-primary">Emergências 24h</p>
                      <p className="text-sm text-muted-foreground">
                        Para vazamentos ou emergências técnicas
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Precisa de Ajuda Rápida?</h2>
            <p className="text-muted-foreground">
              Escolha a opção mais conveniente para você.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" variant="hero" className="flex-1">
              <MessageSquare className="h-5 w-5 mr-2" />
              WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              <Phone className="h-5 w-5 mr-2" />
              Ligar Agora
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;