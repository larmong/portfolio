import {
  TabContents,
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
      <TabMenuWrapper>
        {props.tabList.map((el: ITypeTabList) => (
          <TabMenu
            key={el.title}
            isActive={el.view}
            tabLength={props.tabList.length}
            onClick={props.onClickMoveTab(el.title)}
          >
            <TabTitle>{el.title}</TabTitle>
            <TabContents>{el.contents}</TabContents>
            <TabNumber>{el.number}</TabNumber>
          </TabMenu>
        ))}
      </TabMenuWrapper>
    </Wrapper>
  );
}
