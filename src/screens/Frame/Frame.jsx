import React from "react";
import { ButtonIconButton } from "../../components/ButtonIconButton";
import { ButtonLabelOnly } from "../../components/ButtonLabelOnly";
import { ButtonLabelOnlyWrapper } from "../../components/ButtonLabelOnlyWrapper";
import { Cells } from "../../components/Cells";
import { Chips } from "../../components/Chips";
import { Divider } from "../../components/Divider";
import { GlobalHeader } from "../../components/GlobalHeader";
import { Header } from "../../components/Header";
import { HorizontalFilter } from "../../components/HorizontalFilter";
import { ItemCount } from "../../components/ItemCount";
import { NumberedPageLinks } from "../../components/NumberedPageLinks";
import { ScreenAndWrapper } from "../../components/ScreenAndWrapper";
import { SortByElement } from "../../components/SortByElement";
import { ToolkitHeader } from "../../components/ToolkitHeader";
import { WebIconsAccount } from "../../components/WebIconsAccount";
import { WebIconsBackward } from "../../components/WebIconsBackward";
import { WebIconsForward } from "../../components/WebIconsForward";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div-8">
        <GlobalHeader
          className="global-header-px"
          flyOutMenu={false}
          logoContainerClassName="global-header-px-instance"
          outerContainerClassName="global-header-1260px"
          override={
            <ToolkitHeader
              className="toolkit-header-instance"
              dropdownMenuItem={
                <WebIconsAccount union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-46.svg" />
              }
              dropdownMenuItemWebIconsExpandWebIconsExpand="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--small--7.svg"
              hasHelpAndSupport={false}
              hasHomeContainer={false}
              hasNotifications={false}
              hasToolsContainer={false}
              profileContainerClassName="web-icons-account-wrapper"
            />
          }
          propertyContainerClassName="global-header-instance"
          tescoLogosTescoFill="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-1.svg"
          tescoLogosTescoImg="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-3.svg"
          tescoLogosTescoText="Partners toolkit"
          tescoLogosTescoType="large-signpost"
          tescoLogosTescoTypeBankNativeClassName="design-component-instance-node-2"
          visible={false}
          visible1={false}
        />
        <HorizontalFilter
          chips={false}
          className="horizontal-filter-instance"
          hasCheckboxGroup={false}
          hasFilterContainer={false}
          moreLabel={false}
          resetLink={false}
          state="default"
          tabMenuFiltersTabMenuItemsWebIconsExpandWrapperImg="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--72.svg"
          tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--4.svg"
          tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand1="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--5.svg"
          tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand2="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--72.svg"
          tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand3="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--73.svg"
          tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand4="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--73.svg"
          tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand5="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--72.svg"
          title={false}
          width="one-thousand-and-eight-px-and-767px"
        />
        <ButtonLabelOnly
          buttonNoIconText="Search"
          className="button-label-only-instance"
          onDark={false}
          size="forty-px-default"
          state="active"
          style="primary"
        />
        <ButtonLabelOnlyWrapper
          buttonNoIconLabelClassName="button-label-only-primary-no-active-40px-default-instance"
          buttonNoIconText="Primary 40px"
          className="button-label-only-primary-no-active-40px-default"
        />
        <ScreenAndWrapper
          className="local-navigation-24"
          flyOut={false}
          hasRightContainer={false}
          item2={false}
          item3={false}
          item4={false}
          item5={false}
          item6={false}
          item7={false}
          item8={false}
          item9={false}
          leftContainerClassName="local-navigation-25"
          localNavigationText="About Clubcard"
          localNavigationTypeDefaultStateClassName="local-navigation-26"
          screen="one-thousand-and-eight-px-and-above"
          truncateActive={false}
        />
        <div className="table-three-example">
          <div className="div-9">
            <Header
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              borderTopClassName="design-component-instance-node-3"
              className="design-component-instance-node-3"
              size="fifty-six-px-fixed"
              text="Request ID"
              type="text"
            />
            <Header
              borderBottomClassName="design-component-instance-node-7"
              borderRightClassName="design-component-instance-node-6"
              borderTopClassName="design-component-instance-node-7"
              className="design-component-instance-node-5"
              size="fifty-six-px-fixed"
              text="Colleague name"
              type="text"
            />
            <Header
              borderBottomClassName="design-component-instance-node-7"
              borderRightClassName="design-component-instance-node-6"
              borderTopClassName="design-component-instance-node-7"
              className="design-component-instance-node-5"
              size="fifty-six-px-fixed"
              text="Application name"
              type="text"
            />
            <Header
              borderBottomClassName="design-component-instance-node-8"
              borderRightClassName="design-component-instance-node-9"
              borderTopClassName="design-component-instance-node-8"
              className="design-component-instance-node-8"
              size="fifty-six-px-fixed"
              text="Request type"
              type="text"
            />
            <Header
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              borderTopClassName="design-component-instance-node-3"
              className="design-component-instance-node-3"
              size="fifty-six-px-fixed"
              text="Status"
              type="text"
            />
          </div>
          <div className="div-9">
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              className="design-component-instance-node-3"
              size="fifty-six-px-fixed"
              text="AR3379963"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-7"
              borderRightClassName="design-component-instance-node-6"
              className="design-component-instance-node-5"
              size="fifty-six-px-fixed"
              text="Tom Byrne"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-7"
              borderRightClassName="design-component-instance-node-6"
              className="design-component-instance-node-5"
              size="fifty-six-px-fixed"
              text="Zendesk"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-8"
              borderRightClassName="design-component-instance-node-9"
              className="design-component-instance-node-8"
              size="fifty-six-px-fixed"
              text="Access Request"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              className="design-component-instance-node-3"
              inputsTextInputClassName="cells-instance"
              size="fifty-six-px-fixed"
              text1="Pending"
              type="status"
            />
          </div>
          <div className="div-9">
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              className="cells-2"
              size="fifty-six-px-fixed"
              text="AR3379604"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-7"
              borderRightClassName="design-component-instance-node-6"
              className="cells-3"
              size="fifty-six-px-fixed"
              text="Tom Byrne"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-7"
              borderRightClassName="design-component-instance-node-6"
              className="cells-3"
              size="fifty-six-px-fixed"
              text="Zendesk"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-8"
              borderRightClassName="design-component-instance-node-9"
              className="cells-4"
              size="fifty-six-px-fixed"
              text="Access Request"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              className="cells-2"
              inputsTextInputClassName="cells-instance"
              size="fifty-six-px-fixed"
              text1="Pending"
              type="status"
            />
          </div>
          <div className="div-9">
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              className="design-component-instance-node-3"
              size="fifty-six-px-fixed"
              text="AR3377275"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-7"
              borderRightClassName="design-component-instance-node-6"
              className="design-component-instance-node-5"
              size="fifty-six-px-fixed"
              text="Tom Byrne"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-7"
              borderRightClassName="design-component-instance-node-6"
              className="design-component-instance-node-5"
              size="fifty-six-px-fixed"
              text="Zendesk"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-8"
              borderRightClassName="design-component-instance-node-9"
              className="design-component-instance-node-8"
              size="fifty-six-px-fixed"
              text="Access Request"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              className="design-component-instance-node-3"
              inputsTextInputClassName="cells-instance"
              size="fifty-six-px-fixed"
              text1="Pending"
              type="status"
            />
          </div>
          <div className="div-9">
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              className="cells-2"
              size="fifty-six-px-fixed"
              text="AR3377316"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-7"
              borderRightClassName="design-component-instance-node-6"
              className="cells-3"
              size="fifty-six-px-fixed"
              text="Tom Byrne"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-7"
              borderRightClassName="design-component-instance-node-6"
              className="cells-3"
              size="fifty-six-px-fixed"
              text="Zendesk"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-8"
              borderRightClassName="design-component-instance-node-9"
              className="cells-4"
              size="fifty-six-px-fixed"
              text="Access Request"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              className="cells-2"
              inputsTextInputClassName="cells-instance"
              size="fifty-six-px-fixed"
              text1="Pending"
              type="status"
            />
          </div>
          <div className="div-9">
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              className="design-component-instance-node-3"
              size="fifty-six-px-fixed"
              text="AR3377275"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-7"
              borderRightClassName="design-component-instance-node-6"
              className="design-component-instance-node-5"
              size="fifty-six-px-fixed"
              text="Tom Byrne"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-7"
              borderRightClassName="design-component-instance-node-6"
              className="design-component-instance-node-5"
              size="fifty-six-px-fixed"
              text="Zendesk"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-8"
              borderRightClassName="design-component-instance-node-9"
              className="design-component-instance-node-8"
              size="fifty-six-px-fixed"
              text="Access Request"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              className="design-component-instance-node-3"
              inputsTextInputClassName="cells-instance"
              size="fifty-six-px-fixed"
              text1="Pending"
              type="status"
            />
          </div>
          <div className="div-9">
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              className="cells-2"
              size="fifty-six-px-fixed"
              text="AR3377316"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-7"
              borderRightClassName="design-component-instance-node-6"
              className="cells-3"
              size="fifty-six-px-fixed"
              text="Tom Byrne"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-7"
              borderRightClassName="design-component-instance-node-6"
              className="cells-3"
              size="fifty-six-px-fixed"
              text="Zendesk"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-8"
              borderRightClassName="design-component-instance-node-9"
              className="cells-4"
              size="fifty-six-px-fixed"
              text="Access Request"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              className="cells-2"
              inputsTextInputClassName="cells-instance"
              size="fifty-six-px-fixed"
              text1="Pending"
              type="status"
            />
          </div>
          <div className="div-9">
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              className="design-component-instance-node-3"
              size="fifty-six-px-fixed"
              text="AR3377275"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-7"
              borderRightClassName="design-component-instance-node-6"
              className="design-component-instance-node-5"
              size="fifty-six-px-fixed"
              text="Tom Byrne"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-7"
              borderRightClassName="design-component-instance-node-6"
              className="design-component-instance-node-5"
              size="fifty-six-px-fixed"
              text="Zendesk"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-8"
              borderRightClassName="design-component-instance-node-9"
              className="design-component-instance-node-8"
              size="fifty-six-px-fixed"
              text="Access Request"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              className="design-component-instance-node-3"
              inputsTextInputClassName="cells-instance"
              size="fifty-six-px-fixed"
              text1="Pending"
              type="status"
            />
          </div>
          <div className="div-9">
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              className="cells-2"
              size="fifty-six-px-fixed"
              text="AR3377316"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-7"
              borderRightClassName="design-component-instance-node-6"
              className="cells-3"
              size="fifty-six-px-fixed"
              text="Tom Byrne"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-7"
              borderRightClassName="design-component-instance-node-6"
              className="cells-3"
              size="fifty-six-px-fixed"
              text="Zendesk"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-8"
              borderRightClassName="design-component-instance-node-9"
              className="cells-4"
              size="fifty-six-px-fixed"
              text="Access Request"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              className="cells-2"
              inputsTextInputClassName="cells-instance"
              size="fifty-six-px-fixed"
              text1="Pending"
              type="status"
            />
          </div>
          <div className="div-10">
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              className="design-component-instance-node-3"
              size="fifty-six-px-fixed"
              text="AR3377275"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="cells-6"
              borderRightClassName="cells-5"
              className="design-component-instance-node-5"
              size="fifty-six-px-fixed"
              text="Tom Byrne"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="cells-6"
              borderRightClassName="cells-5"
              className="design-component-instance-node-5"
              size="fifty-six-px-fixed"
              text="Zendesk"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-8"
              borderRightClassName="design-component-instance-node-9"
              className="design-component-instance-node-8"
              size="fifty-six-px-fixed"
              text="Access Request"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              className="design-component-instance-node-3"
              inputsTextInputClassName="cells-instance"
              size="fifty-six-px-fixed"
              text1="Pending"
              type="status"
            />
          </div>
          <div className="div-11">
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              className="cells-2"
              size="fifty-six-px-fixed"
              text="AR3377316"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-7"
              borderRightClassName="design-component-instance-node-6"
              className="cells-3"
              size="fifty-six-px-fixed"
              text="Tom Byrne"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-7"
              borderRightClassName="design-component-instance-node-6"
              className="cells-3"
              size="fifty-six-px-fixed"
              text="Zendesk"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-8"
              borderRightClassName="design-component-instance-node-9"
              className="cells-4"
              size="fifty-six-px-fixed"
              text="Access Request"
              type="text"
            />
            <Cells
              backgroundColour="white"
              borderBottomClassName="design-component-instance-node-3"
              borderRightClassName="design-component-instance-node-4"
              className="cells-2"
              inputsTextInputClassName="cells-instance"
              size="fifty-six-px-fixed"
              text1="Pending"
              type="status"
            />
          </div>
        </div>
        <div className="chip-responsive">
          <div className="div-12">
            <Chips
              buttonIconButtonButtonNoTextElementWebIconsCloseUnion="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-4.svg"
              className="design-component-instance-node-2"
              state="selected"
            />
            <Chips
              buttonIconButtonButtonNoTextElementWebIconsCloseUnion="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-3.svg"
              className="design-component-instance-node-2"
              state="selected"
              text="Longer chip label"
            />
            <Chips
              buttonIconButtonButtonNoTextElementWebIconsCloseUnion="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-3.svg"
              className="design-component-instance-node-2"
              state="selected"
              text="Slightly Longer chip label"
            />
            <Chips
              buttonIconButtonButtonNoTextElementWebIconsCloseUnion="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-4.svg"
              className="design-component-instance-node-2"
              state="selected"
              text="Chip label"
            />
            <Chips
              buttonIconButtonButtonNoTextElementWebIconsCloseUnion="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-4.svg"
              className="design-component-instance-node-2"
              state="selected"
              text="Extra long label that would wrap on to two lines"
            />
          </div>
        </div>
        <div className="pagination">
          <Divider className="divider-4" color="dark-grey" />
          <Divider className="divider-5" color="dark-grey" />
          <ItemCount className="item-count-instance" />
          <SortByElement
            className="sort-by-element-instance"
            dropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--62.svg"
          />
          <div className="pagination-controls">
            <ButtonIconButton
              buttonNoText={
                <WebIconsBackward
                  className="design-component-instance-node-10"
                  webIconsBackward="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-backward-24px--small--17.svg"
                />
              }
              className="design-component-instance-node-2"
              onDark={false}
              size="twenty-four-px"
              state="disabled"
              style="secondary"
            />
            <div className="numbered-page-links-2">
              <div className="text-19">1</div>
            </div>
            <NumberedPageLinks state="default" text="2" />
            <NumberedPageLinks state="default" text="3" />
            <NumberedPageLinks state="default" text="4" />
            <NumberedPageLinks state="default" text="5" />
            <NumberedPageLinks state="default" text="6" />
            <NumberedPageLinks state="default" text="7" />
            <NumberedPageLinks state="default" text="8" />
            <NumberedPageLinks state="default" text="9" />
            <ButtonIconButton
              buttonNoText={
                <WebIconsForward
                  className="design-component-instance-node-10"
                  webIconsForward="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-forward-24px--small--19.svg"
                />
              }
              className="design-component-instance-node-2"
              onDark={false}
              size="twenty-four-px"
              state="active"
              style="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
