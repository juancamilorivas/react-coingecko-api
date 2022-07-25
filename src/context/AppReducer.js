export default function appReducer(state, { type, payload }) {
  switch (type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, payload],
      };

    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task) => task.id !== payload),
      };

    case "UPDATE_TASK":
      console.log(payload);
      const updatedTask = payload;

      const updatedTasks = state.tasks.map((task) => {
        if (task.id === updatedTask.id) {
          task.title = updatedTask.title;
          task.description = updatedTask.description;
        }
        return task;
      });
      return {
        tasks: updatedTasks,
      };

    case "TOGGLE_TASK_DONE":
      return {
        tasks: state.tasks.map((task) =>
          task.id === payload ? { ...task, done: !task.done } : task
        ),
      };

    default:
      return state;
  }
}
