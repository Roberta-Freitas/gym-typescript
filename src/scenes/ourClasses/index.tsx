import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import {motion} from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";


const classes: Array<ClassType> = [
  {
    name: "Weight Trainning Classes",
    description: "Sculpt and strengthen your body as expert instructors guide you through a dynamic session focusing on resistance training.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description: "Elevate your mind and body as experienced instructors guide you through harmonious poses, fostering flexibility, balance, and inner peace.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description: "From high-intensity challenges to outdoor excursions, embark on an adrenaline-fueled journey that keeps your workouts exciting and dynamic.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description: "Tailored for all levels, these classes offer a diverse range of workouts, ensuring a well-rounded approach to cardiovascular health, strength, and endurance.",
    image: image5,
  },
  {
    name: "Training Classes",
    image: image6,
  }
]


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return <section id="ourclasses" className="w-full bg-primary-100 py-40">
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
    >
      <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="md:w-3/5">
          <HText>OUR CLASSES</HText>
            <p className="py-5">
              From heart-pumping cardio sessions to zen-inducing yoga, our classes cater to all
              fitness levels and interests. Sculpt your physique in high-energy HIIT workouts, find your
              flow in calming meditation sessions, or join our expert-led strength training classes.
            </p>
        </div>


      </motion.div>
      <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[2800px] whitespace-nowrap">
          {classes.map((item: ClassType, index) => (
            <Class
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
            />

          ))}
        </ul>
      </div>
    </motion.div>
  </section>

};

export default OurClasses;
