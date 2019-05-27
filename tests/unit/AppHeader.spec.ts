import { shallowMount } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader.vue";
describe("AppHeader.vue", () => {
  let wrapper: any;
  let assessmentMsg: string;

  beforeEach(() => {
    assessmentMsg = "some message";
    wrapper = shallowMount(AppHeader, {
      propsData: { assessmentMsg }
    });
  });

  it("renders props.assessmentMsg when passed", () => {
    expect(wrapper.text()).toMatch(assessmentMsg);
  });
  it("load ul elements when rendered", () => {
    expect(wrapper.contains('ul')).toBe(true);
  });
  it("load ul elements when rendered", () => {
    debugger;
    expect(wrapper.contains('li').length).toHaveLength(3);
  });
});
