import styles, { layout } from "@/styles/style";
import { features } from "@/constants";
import Button from "./Button";
import Image from "next/image";
import { FeatredCardProps } from "@types";
import { mongodb_logo, net_core_logo, nextjs_logo, nodejs_logo, raspberrypi_logo, sql_logo } from "@public/assets";

const FeaturesCard: React.FC<FeatredCardProps> = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full bg-white ${styles.flexCenter}`}
    >
      <Image src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[24px]">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);
const TechSkills: React.FC = () => (
  <section id="features" className={`${styles.paddingY}`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        TECHNICAL SKILLS
      </h2>
    </div>
    <div className={`${layout.section}`}>
      <FeaturesCard index={1} icon={net_core_logo} title=".Net Core" content="A modern, high-performance web development framework for .NET." />
      <FeaturesCard index={1} icon={nodejs_logo} title="Node.js" content="A free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts." />
      <FeaturesCard index={1} icon={nextjs_logo} title="Next.js" content="A flexible React framework that gives you building blocks to create fast, full-stack web applications." />
      {/* <FeaturesCard index={1} icon={net_core_logo} title=".Net Core" content="" />
      <FeaturesCard index={1} icon={net_core_logo} title=".Net Core" content="" /> */}
      {/* {features.map((feature, index) => (
        <FeaturesCard key={feature.id} {...feature} index={index} />
      ))} */}
    </div>
    <div className={`${layout.section}`}>
      <FeaturesCard index={1} icon={raspberrypi_logo} title="Raspberry Pi" content="A series of small single-board computers." />
      <FeaturesCard index={1} icon={mongodb_logo} title="MongoDB" content="A document database with the scalability and flexibility that you want with the querying and indexing that you need." />
      <FeaturesCard index={1} icon={sql_logo} title="SQL" content="A standard language for accessing and manipulating databases." />
      {/* <FeaturesCard index={1} icon={net_core_logo} title=".Net Core" content="" />
      <FeaturesCard index={1} icon={net_core_logo} title=".Net Core" content="" /> */}
      {/* {features.map((feature, index) => (
        <FeaturesCard key={feature.id} {...feature} index={index} />
      ))} */}
    </div>
  </section>
);

export default TechSkills;
