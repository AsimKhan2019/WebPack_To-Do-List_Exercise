export default function getTodoListData() {
  const ToDoListData = [
    {
      description: 'Complete the project',
      completed: false,
      index: 1,
    },
    {
      description: 'Apply checks and linters',
      completed: true,
      index: 2,
    },
    {
      description: 'Fix errors',
      completed: false,
      index: 3,
    },
    {
      description: 'Deploy code',
      completed: false,
      index: 4,
    },
  ];

  return ToDoListData;
}