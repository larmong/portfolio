import Progress01 from "../../commons/progresses/progress01/Progress01.container";
import { Contents, Wrapper } from "./Profile.style";

export default function Profile() {
  return (
    <Wrapper>
      <Progress01 />
      <Contents>
        <div>
          <h5>끊임없는 도전을 하는 프론트엔드 개발자 "이아름"입니다! 👩🏻‍💻</h5>
          <ul>
            <li>
              꾸준함의 진짜 가치를 알기에 조그마한 프로젝트라도 도전하고
              실행합니다.
            </li>
            <li>
              당장은 풀지 못하는 문제가 생기더라도 포기하지 않고 결국 해내는것을
              즐거워합니다.
            </li>
            <li>새로운 개발 지식을 배우는 것을 좋아합니다.</li>
          </ul>
        </div>
        <div>
          <h5>education</h5>
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
        </div>
        <div>
          <h5>history</h5>
          <ul>
            <li>
              <span>2022.04 ~ 2022.12</span>
              <em>찌읏</em>프론트엔드
            </li>
            <li>
              <span>2023.02 ~ 2023.05</span>
              <em>히포케이메논</em>웹퍼블리셔 및 웹디자이너
            </li>
            <li>
              <span>2018.06 ~ 2020.05</span>
              <em>동아피엠에스</em>웹디자이너 및 사무
            </li>
          </ul>
        </div>
        <div>
          <h5>certificate</h5>
          <ul>
            <li>
              <span>2020.12.10</span>
              웹디자인 기능사
            </li>
            <li>
              <span>2020.10.15</span>GTQ 1급
            </li>
          </ul>
        </div>
        <div>
          <h5>stacks</h5>
          <span>
            간단한 스택 목록입니다. 자세한 skill tree는 SKILL 페이지에서
            확인해주세요!
          </span>
          <div>
            <h6>front-End</h6>
            <ul>
              <li>HTML, CSS, Styled-Components(Emotion)</li>
              <li>JavaScript, TypeScript</li>
              <li>ReactJs, NextJs</li>
              <li>Vue.js</li>
            </ul>
          </div>
          <div>
            <h6>back-End</h6>
            <ul>
              <li>Node.js</li>
              <li>Firebase, MonggoDB</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div>
            <h6>배포</h6>
            <ul>
              <li>github pages</li>
              <li>Netlify</li>
              <li>Heroku</li>
              <li>AWS</li>
            </ul>
          </div>
          <div>
            <h6>design</h6>
            <ul>
              <li>Photoshop, Illustrator</li>
              <li>Figma, Adobe XD</li>
            </ul>
          </div>
          <div>
            <h6>collaboration</h6>
            <ul>
              <li>Github, Bitbuket</li>
              <li>Sourcetree, Jjira</li>
              <li>Slack, Notion</li>
              <li>Postman, Playground</li>
              <li>Web Storm, VS Code</li>
            </ul>
          </div>
        </div>
      </Contents>
    </Wrapper>
  );
}
