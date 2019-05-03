import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader.vue";

describe("AppHeader.vue", () => {
  it("renders props.assessmentMsg when passed", () => {
    const assessmentMsg = "some message";
    const wrapper = shallowMount(AppHeader, {
      propsData: { assessmentMsg }
    });
    expect(wrapper.text()).to.include(assessmentMsg);
  });
});
