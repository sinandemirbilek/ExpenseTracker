import { FlatList } from "react-native-gesture-handler";

import ExpensesSummary from "./ExpensesSummary";
import ExpenseItem from "./ExpenseItem";


function renderExpenseItem(itemData) {
return <ExpenseItem {...itemData.item}/>

}

function ExpensesList({expenses}) {
  
  return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id } />
}

export default ExpensesList;