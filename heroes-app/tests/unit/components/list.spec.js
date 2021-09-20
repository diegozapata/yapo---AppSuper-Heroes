import { shallowMount } from "@vue/test-utils";
import List from "@/components/List";

describe("List Componet", () => {
  test("debe hacer match con el snapshot", () => {
    const wrapper = shallowMount(List);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
