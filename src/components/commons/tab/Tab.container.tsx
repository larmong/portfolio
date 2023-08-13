import {
  TabContents,
  TabMainTitle,
  TabMenu,
  TabMenuWrapper,
  TabNumber,
  TabTitle,
  Wrapper,
} from "./Tab.style";
import { IPropsTab, ITypeTabList } from "./Tab.types";

export default function Tab(props: IPropsTab) {
  return (
    <Wrapper>
      <TabMainTitle>
        <TabTitle>
          {props.tabTitle.icon}
          <span>{props.tabTitle.title}</span>
        </TabTitle>
      </TabMainTitle>
      <TabMenuWrapper>
        {props.tabList.map((el: ITypeTabList) => (
          <TabMenu key={el.title} isActive={el.view}>
            <TabTitle>{el.title}</TabTitle>
            <TabContents>{el.contents}</TabContents>
            <TabNumber>{el.number}</TabNumber>
          </TabMenu>
        ))}
      </TabMenuWrapper>
    </Wrapper>
  );
}
