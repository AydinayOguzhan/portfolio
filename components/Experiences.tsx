import { apple, bill, google } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Image from "next/image";
const Experiences: React.FC = () => (
  <section id="experiences" className={layout.sectionReverse}>
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd" />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">Nov 2023 - Present</time>
          <div className="text-lg font-black">ESBAŞ</div>
          <div className="text-lg font-black">Fullstack Developer</div>
          <ul>
            <li>
              - Developed web solutions for The Space Camp Türkiye (NextJs).
            </li>
            <li>
              - Developed a platform that provides two way data stream between The Aegean Free Zone companies and
              the ESBAŞ. (.Net Core, NextJs)
            </li>
            <li>
              - Developed an IOT solution for detecting the smokers in the company cars
            </li>
          </ul>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd" />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">Jun 2022 - Jun 2023</time>
          <div className="text-lg font-black">Dokuz Eylül University</div>
          <div className="text-lg font-black">Back-end Developer</div>
          <ul>
            <li>
              - Developed fast and scalable API using Node.js to meet the project's requirements. The database
              technologies chosen for the project were PostgreSQL, MySQL, and MongoDB.
            </li>
            <li>
              - Worked on Raspberry Pi devices to address specific project needs. I prepared these devices, which read
              data from necessary sensors, to integrate into the system through the API I developed.
            </li>
            <li>
              - Supported design, algorithm development, and implementation phases for a react‑native mobile application
              that utilized BLE (Bluetooth Low Energy) technology.
            </li>
          </ul>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd" />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">Aug 2020 - Sep 2021</time>
          <div className="text-lg font-black">Freelance</div>
          <div className="text-lg font-black">Fullstack Developer</div>
          <ul>
            <li>
              - Designed and developed web apps with .Net Core and Angular
            </li>
            <li>
              - Provided mobile application development support
            </li>
          </ul>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd" />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">Jul 2020 - Aug 2020</time>
          <div className="text-lg font-black">Elra Computer</div>
          <div className="text-lg font-black">Mobile Application Developer</div>
          <ul>
            <li>
              - Designed and developed essential mobile applications according to the company's needs.
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </section>
);

export default Experiences;
