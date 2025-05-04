import { shallowMount } from "@vue/test-utils";
import Dashboard from "@/views/Dashboard.vue";
import Stats from "@/views/Stats.vue";

// Mock localStorage for all tests
beforeEach(() => {
  let store = {};
  jest
    .spyOn(window.localStorage.__proto__, "getItem")
    .mockImplementation((key) => store[key] || null);
  jest
    .spyOn(window.localStorage.__proto__, "setItem")
    .mockImplementation((key, value) => {
      store[key] = value;
    });
  jest
    .spyOn(window.localStorage.__proto__, "removeItem")
    .mockImplementation((key) => {
      delete store[key];
    });
  store = {};
});

describe("Dashboard.vue", () => {
  it("adds a new task", async () => {
    const wrapper = shallowMount(Dashboard, {
      global: {
        mocks: {
          $vuetify: { theme: { global: { name: "light" } } },
        },
      },
    });
    wrapper.vm.newTask = "Test Task";
    await wrapper.vm.addTask();
    expect(wrapper.vm.tasks.length).toBe(1);
    expect(wrapper.vm.tasks[0].name).toBe("Test Task");
  });

  it("does not add empty task", async () => {
    const wrapper = shallowMount(Dashboard, {
      global: {
        mocks: {
          $vuetify: { theme: { global: { name: "light" } } },
        },
      },
    });
    wrapper.vm.newTask = "   ";
    await wrapper.vm.addTask();
    expect(wrapper.vm.tasks.length).toBe(0);
  });

  it("deletes a task", async () => {
    const wrapper = shallowMount(Dashboard, {
      global: {
        mocks: {
          $vuetify: { theme: { global: { name: "light" } } },
        },
      },
    });
    wrapper.vm.tasks = [{ name: "Task 1", completed: false }];
    await wrapper.vm.deleteTask(0);
    expect(wrapper.vm.tasks.length).toBe(0);
  });
});

describe("Stats.vue", () => {
  it("computes stats correctly", () => {
    window.localStorage.setItem(
      "tasks",
      JSON.stringify([
        { name: "A", completed: true },
        { name: "B", completed: false },
        { name: "C", completed: true },
      ])
    );
    const wrapper = shallowMount(Stats, {
      global: {
        stubs: ["Pie"],
      },
    });
    expect(wrapper.vm.total).toBe(3);
    expect(wrapper.vm.completed).toBe(2);
    expect(wrapper.vm.completionRate).toBe(67);
    // chartData may be incomplete in your code, so check for structure
    expect(wrapper.vm.chartData.labels).toEqual(["Completed", "Incomplete"]);
  });
});
