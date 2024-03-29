import { CgFigma } from "react-icons/cg";
import { FaCss3Alt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiMongodb,
  SiStyledcomponents,
} from "react-icons/si";
import { RiFlutterFill, RiJavascriptFill, RiVuejsFill } from "react-icons/ri";
import {
  BiLogoFirebase,
  BiLogoGraphql,
  BiLogoJquery,
  BiLogoTypescript,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { Wrapper, Skill } from "./Icon.style";

export default function AllIcon({ skill }: any) {
  return (
    <Wrapper>
      {skill === "figma" ? (
        <Skill>
          <CgFigma />
          <span>{skill}</span>
        </Skill>
      ) : skill === "design" ? (
        <Skill>
          <SiAdobephotoshop />
          <span>{skill}</span>
        </Skill>
      ) : skill === "html5" ? (
        <Skill>
          <FaHtml5 />
          <span>{skill}</span>
        </Skill>
      ) : skill === "css3" ? (
        <Skill>
          <FaCss3Alt />
          <span>{skill}</span>
        </Skill>
      ) : skill === "emotion" ? (
        <Skill>
          <SiStyledcomponents />
          <span>{skill}</span>
        </Skill>
      ) : skill === "javascript" ? (
        <Skill>
          <RiJavascriptFill />
          <span>{skill}</span>
        </Skill>
      ) : skill === "jquery" ? (
        <Skill>
          <BiLogoJquery />
          <span>{skill}</span>
        </Skill>
      ) : skill === "react" ? (
        <Skill>
          <FaReact />
          <span>{skill}</span>
        </Skill>
      ) : skill === "vue" ? (
        <Skill>
          <RiVuejsFill />
          <span>{skill}</span>
        </Skill>
      ) : skill === "flutter" ? (
        <Skill>
          <RiFlutterFill />
          <span>{skill}</span>
        </Skill>
      ) : skill === "typescript" ? (
        <Skill>
          <BiLogoTypescript />
          <span>{skill}</span>
        </Skill>
      ) : skill === "node" ? (
        <Skill>
          <FaNode />
          <span>{skill}</span>
        </Skill>
      ) : skill === "firebase" ? (
        <Skill>
          <BiLogoFirebase />
          <span>{skill}</span>
        </Skill>
      ) : skill === "graphql" ? (
        <Skill>
          <BiLogoGraphql />
          <span>{skill}</span>
        </Skill>
      ) : skill === "next" ? (
        <Skill>
          <TbBrandNextjs />
          <span>{skill}</span>
        </Skill>
      ) : skill === "mongodb" ? (
        <Skill>
          <SiMongodb />
          <span>{skill}</span>
        </Skill>
      ) : (
        ""
      )}
    </Wrapper>
  );
}
