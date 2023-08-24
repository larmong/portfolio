import Progress01 from "../../commons/progresses/progress01/Progress01.container";
import {
  Contents,
  Hand,
  List,
  Main,
  ProfileCont,
  ProfileWrapper,
  Stacks,
  StacksContainer,
  StacksWrapper,
  Title,
  Wrapper,
} from "./Profile.style";
import { BsCheck2Square, BsCodeSlash } from "react-icons/bs";
import { MdHistory, MdSchool } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";

export default function Profile() {
  return (
    <Wrapper>
      <Progress01 />
      <Contents>
        <Main>
          <Title>
            <Hand>
              <div className="wave" role="img" aria-label="Waving hand">
                👋
              </div>
            </Hand>
            끊임없는 도전을 하는<span>FRONT-END</span>"이아름" 입니다!
          </Title>
          <List>
            <li>
              <BsCheck2Square />
              꾸준함의 진짜 가치를 알기에 조그마한 프로젝트라도 도전하고
              실행합니다.
            </li>
            <li>
              <BsCheck2Square />
              당장은 풀지 못하는 문제가 생기더라도 포기하지 않고 결국 해내는것을
              즐거워합니다.
            </li>
            <li>
              <BsCheck2Square />
              새로운 개발 지식을 배우는 것을 좋아합니다.
            </li>
          </List>
        </Main>
        <ProfileWrapper>
          <ProfileCont>
            <h5>
              <MdHistory />
              history
            </h5>
            <ul>
              <li>
                <span>2022.04 ~ 2022.12</span>
                <em>찌읏</em>프론트엔드
              </li>
              <li>
                <span>2022.02 ~ 2022.05</span>
                <em>히포케이메논</em>웹퍼블리셔 및 웹디자이너
              </li>
              <li>
                <span>2018.06 ~ 2020.05</span>
                <em>동아피엠에스</em>웹디자이너 및 사무
              </li>
            </ul>
          </ProfileCont>
          <ProfileCont>
            <h5>
              <MdSchool />
              education
            </h5>
            <ul>
              <li>
                <span>2023.03 ~ ing</span>방송통신대학교 컴퓨터과학과 편입
              </li>
              <li>
                <span>2023.02 ~ 2023.05</span>코드캠프 고농축 프론트엔드 코스
                [인프런X코드캠프]
              </li>
              <li>
                <span>2020.06 ~ 2020.11</span>웹표준 기반 UIUX 엔지니어링
                [더조은아카데미]
              </li>
            </ul>
          </ProfileCont>
          <ProfileCont>
            <h5>
              <PiCertificateBold />
              certificate
            </h5>
            <ul>
              <li>
                <span>2020.12.10</span>
                웹디자인 기능사
              </li>
              <li>
                <span>2020.10.15</span>GTQ 1급
              </li>
            </ul>
          </ProfileCont>
        </ProfileWrapper>
        <StacksWrapper>
          <h5>
            <BsCodeSlash />
            stacks
          </h5>
          <span>자세한 STACKS은 SKILL 페이지에서 확인해주세요!</span>
          <StacksContainer>
            <Stacks>
              <h6>디자인</h6>
              <ul>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Figma</li>
                <li>Adobe XD</li>
              </ul>
            </Stacks>
            <Stacks>
              <h6>프론트엔드</h6>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Styled-Components(Emotion)</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>NextJs</li>
                <li>ReactJs</li>
                <li>VueJs</li>
                <li>Flutter</li>
              </ul>
            </Stacks>
            <Stacks>
              <h6>백엔드</h6>
              <ul>
                <li>NodeJs</li>
                <li>Firebase</li>
                <li>MongoDB</li>
                <li>GraphQL</li>
              </ul>
            </Stacks>
            <Stacks>
              <h6>배포</h6>
              <ul>
                <li>Github Pages</li>
                <li>Netlify</li>
                <li>Heroku</li>
                <li>AWS</li>
              </ul>
            </Stacks>
            <Stacks>
              <h6>협업 & 툴</h6>
              <ul>
                <li>Github</li>
                <li>Bitbuket</li>
                <li>Jjira</li>
                <li>Sourcetree</li>
                <li>Slack</li>
                <li>Notion</li>
                <li>Postman</li>
                <li>Playground</li>
                <li>Web Storme</li>
                <li>VS Code</li>
              </ul>
            </Stacks>
          </StacksContainer>
        </StacksWrapper>
      </Contents>
    </Wrapper>
  );
}
