import { mount } from "@vue/test-utils";
import App from "./../../src/App.vue";

describe("Mounted App", () => {

  it('renders correctly', () => {
  const wrapper = mount(App, {
    addTodo(title) {
      let todo = { title: title, completed: false };
      todos.value.push(todo);
      localStorage.setItem("todos", JSON.stringify(todos.value));
    }
  })
  expect(wrapper.element).toMatchSnapshot()
  })
})








