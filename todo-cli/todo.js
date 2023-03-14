const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    // Write the date check condition here and return the array
    // of overdue items accordingly.
    var i;
      var overdue_lst = [];
      for (i in all) {
        if (all[i].dueDate < today) {
          overdue_lst.push(all[i]);
        }
      }
      return overdue_lst;
    }
  

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
    var i;
      var dueToday_lst = [];
      for (i in all) {
        if (all[i].dueDate === today) {
          dueToday_lst.push(all[i]);
        }
      }
      return dueToday_lst;
    }
  

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
    var i;
    var dueLater_lst = [];
    for (i in all) {
      if (all[i].dueDate > today) {
        dueLater_lst.push(all[i]);
      }
    }
    return dueLater_lst;
  }

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
    var i;
    var displayList = []
    for (i=0;i<list.length;i++) {
      if (list[i].completed === false) {
        //`[ ] ${i.title} ${i.dueDate}`
        if (list[i].dueDate===today) {
          displayList.push(`[ ] ${list[i].title}`)
        }
        else {
          displayList.push(`[ ] ${list[i].title} ${list[i].dueDate}`)
        }
      }
      else {
        // `[x] ${i.title} ${i.dueDate}`
        if (list[i].dueDate===today) {
          displayList.push(`[x] ${list[i].title}`)
        }
        else {
          displayList.push(`[x] ${list[i].title} ${list[i].dueDate}`)
        }          
      }
    }
    
    return displayList.join("\n");
  }
  

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

module.exports=todoList;
