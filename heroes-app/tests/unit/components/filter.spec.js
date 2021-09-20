import { shallowMount } from "@vue/test-utils";
import Filter from "@/components/Filter";

describe("Filter Componet", () => {
  test("debe hacer match con el snapshot", () => {
    const wrapper = shallowMount(Filter);

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('h3 debe tener el valor por defecto "title"', () => {
    const wrapper = shallowMount(Filter);

    expect(wrapper.find("h3").exists()).toBe(true);

    const h3Value = wrapper.find("h3").text();

    expect(h3Value).toBe("Heroes App");
  });
});
