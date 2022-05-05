import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import MediumWidget from '@/components/MediumWidget.vue';

describe('MediumWidget.vue', () => {
  it('renders props.msg when passed', () => {
    const doi = '10.7272/q6g15xs4';
    const wrapper = shallowMount(MediumWidget, {
      propsData: { doi },
    });

    wrapper.setData({
      views: 30,
      downloads: 30,
      citations: 30,
    });


    // eslint-disable-next-line
    console.log(wrapper.html());
    expect(wrapper.classes()).to.include('metrics');
    expect(wrapper.find('.usage-downloads').text()).to.include('30 Downloads');
  });


  it('renders different doi data', () => {
  });

  it('renders input data', () => {
  });

  it('does not renders mepty values', () => {
  });
});
