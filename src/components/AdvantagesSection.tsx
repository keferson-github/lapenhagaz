import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Clock, Shield, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Trabalhamos apenas com as melhores marcas de gás GLP e água mineral do mercado, garantindo qualidade superior."
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Entrega ágil e pontual de gás GLP e água mineral, com agendamento flexível para sua comodidade."
    },
    {
      icon: DollarSign,
      title: "Preços Competitivos",
      description: "Os melhores preços do mercado em gás GLP e água mineral, com condições especiais para clientes fiéis."
    },
    {
      icon: Leaf,
      title: "Produtos Certificados",
      description: "Todos os nossos produtos possuem certificação de qualidade e seguem rigorosos padrões de segurança."
    }
  ];

  return (
    <motion.section 
      className="relative overflow-hidden py-20 md:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_70%)]" />
      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <motion.div 
            className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            Por que escolher?
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Nossas Vantagens
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.25 }}
          >
            Descubra por que somos a escolha preferida para gás GLP e água mineral de qualidade superior.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="group border-0 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-500 hover:shadow-[var(--shadow-modern)] h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="mx-auto w-16 h-16 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AdvantagesSection;