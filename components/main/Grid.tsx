import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { motion } from "framer-motion";

const Grid = () => {
  return (
    <section id="about" className="flex flex-wrap justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        >
        <BentoGrid className="w-[90%] py-20">
          {gridItems.map((item, i) => (
            <BentoGridItem
            // as={motion.div} 
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={`${item.className}`}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
            
            />
          ))}
        </BentoGrid>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Grid;
