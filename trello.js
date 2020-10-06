// // const day=['monday','tuesday','wednesday','thursday','friday']
// // for(let index=0;index<day.length;index++)
// // {
// //     console.log(day[index])
// // }

// const mytodo =[]
// mytodo.push('apple')
// mytodo.push('mangoes')
// mytodo.push('grapes')
// mytodo.forEach(function(todo,i)
// {
//     console.log(`your task number ${i+1} is ${todo}`);
// })

const days =['monday','tuesday','wednesday','thursday','friday','saturday']

console.log(days[0]);

// let sayhello=function()
// {
//    console.log("greeting message to the user");
// }
// days.forEach(sayhello)

// days.forEach(function(tiger)
// {
//   console.log(tiger)  
// })

days.forEach(function(tiger,i)
{
    console.log(`starts with index ${i+1} --${tiger}`)
})
