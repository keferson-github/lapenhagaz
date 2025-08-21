import { motion } from "framer-motion";

const GoogleMapsSection = () => {
  return (
    <motion.section 
      className="relative z-10 -mb-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full">
        <div className="w-full overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d117080.42709758284!2d-46.62149188942513!3d-23.50503202857625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x94ce610ba4ebe9dd%3A0x1f19f592ca450df!2sAv.%20Dr.%20Assis%20Ribeiro%2C%201424%20A%20-%20Jardim%20Piratininga%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003717-000!3m2!1d-23.5050883!2d-46.539068!5e0!3m2!1spt-BR!2sbr!4v1755644203059!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="450" 
            style={{border: 0}} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Lapenhagáz"
            className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default GoogleMapsSection;