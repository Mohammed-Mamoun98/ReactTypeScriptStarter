export interface TaskFilterContext {}

//Filter component itself gonna recieve am array of components contain the option props
//option props

interface choice {
  value: number;
  text: string;
}

export interface OptionProps {
  title: string;
  multible: boolean;
  options: choice[];
  onSelect: () => void; // gonna take it from context
}

//const [FilterData , setFilterData] = useState({dueDate : [] ,bla : bla})

//const checkDueDate = (title , type)=>{
//  if(title.indexOf(FilterData.dueDate) > -1 ){ //already exist
//   setFilterData(...FilterData,  dueDate: [...FilterData.dueDate.filter(due => due != title)] ) //it can be more genric by filterData['type']
// else {
//   setFilterData(...FilterData,  dueDate: [...FilterData.dueDate, title])
//
// }
// }
// }

//this method should be inside the context
// const selectDueDate = title => {
//   setFilterData(...FilterData,  dueDate: [...FilterData.dueDate ,checkDueDate(title)] );
//it will be sent with
// };

// const initialState = {
//   dueDateSelected: [],
//   selectDueDate
// };

// <Filter options = {options} />

//<Option />
