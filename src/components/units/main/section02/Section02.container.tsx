import Tab from "../../../commons/tab/Tab.container";
import Title from "../../../commons/title/Title.container";
import { TitleContainer, Wrapper } from "./Section02.style";
import { FaUserLarge } from "react-icons/fa6";

export default function Section02() {
  const tabTitle = {
    icon: <FaUserLarge />,
    title: "Profile",
  };
  const tabList = [
    {
      title: "Profile",
      contents: "It's about me and my skill. Click if you want to know.",
      number: "01",
      view: true,
    },
    {
      title: "Skill",
      contents: "WebSiteIt's a website I made. I made various websites.",
      number: "02",
      view: false,
    },
    {
      title: "Website",
      contents: "MobileIt's a mobile website I made. Click if you're curious.",
      number: "03",
      view: false,
    },
    {
      title: "Mobile",
      contents: "Various works created with JavaScript.",
      number: "04",
      view: false,
    },
  ];

  return (
    <Wrapper>
      <TitleContainer>
        <Title paddingValue="50" titleName="about me" titleNum="02" />
      </TitleContainer>
      <Tab tabTitle={tabTitle} tabList={tabList} />
    </Wrapper>
  );
}
