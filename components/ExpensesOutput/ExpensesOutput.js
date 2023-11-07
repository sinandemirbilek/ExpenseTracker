import { View,StyleSheet,Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';



function ExpensesOutput({ expenses, expensesPeriod,fallbackText}) {
let content = <Text style={style.infoText}>{fallbackText}</Text>

if(expenses.length >0) {
  content = <ExpensesList expenses={expenses}/>
}
 
  return (
    <View style={style.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
      {content}
    </View>
  );
}

export default ExpensesOutput;


const style = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:24,
    paddingTop:24,
    padding:24,
    backgroundColor:GlobalStyles.colors.primary700,
  },
  infoText: {
    
    color:'white',
    fontSize:16,
    textAlign:'center',
    marginTop:32,
    justifyContent:'center',
    textAlign:'center',
    alignItems:'center',
  },
  
});