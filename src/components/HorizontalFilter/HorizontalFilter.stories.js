import 

 
 { 
  
    HorizontalFilter  
    
   }

from
"."

export default {
  title: 'Components/HorizontalFilter',
  component: HorizontalFilter,
  argTypes: {
    width: {
   options: ['seven-hundred-and-fifty-six-px-and-504px', 'one-thousand-two-hundred-and-sixty-px-and-above', 'one-thousand-and-eight-px-and-767px'], control: { type: "select"} 
},
state: {
   options: ['active-selected', 'default'], control: { type: "select"} 
}
  }
  
};

export const Default = {
  args: {
    title: true,
checkbox4: false,
moreLink: true,
resultsText: true,
2ChipRows: true,
1ChipRows: true,
3ChipRows: false,
resetLink: true,
width: 'seven-hundred-and-fifty-six-px-and-504px',
state: 'active-selected',
moreLabel: true,
chips: true,
className: {},
hasFilterContainer: true,
tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand: 'abc',
tabMenuFiltersTabMenuItemsWebIconsExpandWrapperImg: 'https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--73.svg',
tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand1: 'https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--72.svg',
tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand2: 'abc',
tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand3: 'abc',
tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand4: 'https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--72.svg',
tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand5: 'abc',
hasCheckboxGroup: true,

  },
};