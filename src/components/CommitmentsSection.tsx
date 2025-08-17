import { Button } from "@/components/ui/button";
import { Shield, Recycle, Users } from "lucide-react";
import { motion } from "framer-motion";

const commitments = [
  {
    icon: Shield,
    title: "Qualidade sem compromisso",
    desc: "Selecionamos rigorosamente as melhores marcas de gás GLP e fontes de água mineral para garantir excelência.",
  },
  {
    icon: Users,
    title: "Atendimento personalizado",
    desc: "Cada cliente é único e merece um atendimento diferenciado, com soluções sob medida para suas necessidades.",
  },
  {
    icon: Recycle,
    title: "Sustentabilidade e responsabilidade",
    desc: "Promovemos o uso consciente de recursos e práticas sustentáveis em toda nossa cadeia de fornecimento.",
  },
];

const CommitmentsSection = () => {
  return (
    <motion.section 
      aria-labelledby="compromissos-title" 
      className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Nosso compromisso
          </motion.div>
          <motion.h2 
            id="compromissos-title" 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Nossos valores e compromissos
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Trabalhamos com dedicação para oferecer os melhores produtos em gás GLP e água mineral, sempre priorizando qualidade e atendimento
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {commitments.map(({ icon: Icon, title, desc }, index) => (
            <motion.div 
              key={title} 
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-0 hover:bg-white transition-all duration-300 hover:shadow-[var(--shadow-modern)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="h-6 w-6 text-white" aria-hidden />
                </motion.div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Ver nossos compromissos
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full transition-all duration-300">
                Relatório de sustentabilidade
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CommitmentsSection;
