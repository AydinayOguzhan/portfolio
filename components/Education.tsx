import { feedback } from "@/constants";
import styles from "@/styles/style";
import FeedbackCard from "./FeedbackCard";
const Education: React.FC = () => (
  <section
    id="education"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-10 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        What people are <br className="sm:block hidden" /> saying about us.
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div> */}

    <div className="flex w-full flex-col lg:flex-row">
      <div className="card bg-base-300 rounded-box grid h-72 flex-grow place-items-center">

        <div className="flex w-full flex-col">
          <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
            <div className="text-sm lg:text-lg  font-black">Bachelor of Management Information Systems</div>
            <div className="text-sm lg:text-lg font-black">Dokuz Eylül University, İzmir</div>
            <time className="text-sm lg:text-lg font-mono italic">Sep 2020 - Jun 2023</time>
          </div>
          <div className="divider"></div>
          <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
            <div className="text-sm lg:text-lg font-black">Associate Degree of Computer Programming</div>
            <div className="text-sm lg:text-lg font-black">Adnan Menderes University, Aydın</div>
            <time className="text-sm lg:text-lg font-mono italic">Sep 2018 - Jun 2020</time>
          </div>
        </div>
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="card bg-base-300 rounded-box grid h-72 flex-grow place-items-center">
        <ul>
          <li>
            <div className="text-sm lg:text-lg font-black">2nd place at Senior Project Exhibition</div>
            <div className="">Dokuz Eylül University, İzmir</div>
            <br />
          </li>
          <li>
            <div className="text-sm lg:text-lg font-black">Litum best project prize</div>
            <div className="">Dokuz Eylül University, İzmir</div>
            <br />
          </li>
          <li>
            <div className="text-sm lg:text-lg font-black">Cyber Anadolu CTF Program</div>
            <br />
          </li>
          <li>
            <div className="text-sm lg:text-lg font-black">BAISTANBUL</div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Education;
