import { expect } from 'chai';
import { shallowMount, mount } from '@vue/test-utils';
import SmallWidget from '@/components/SmallWidget.vue';

describe('SmallWidget.vue', () => {
  it('renders views, citations, downloads with blue icons', () => {
    const doi = '10.7272/q6g15xs4';
    const wrapper = mount(SmallWidget, {
      propsData: { doi },
    });

    wrapper.setData({
      views: 30,
      downloads: 30,
      citations: 30,
    });


    // eslint-disable-next-line
    // console.log(wrapper.html());
    expect(wrapper.html()).to.include('label');
    expect(wrapper.find('.counts').text()).to.include('30');
  });


  it('renders with 1000s of counts', () => {
    const doi = '10.7272/q6g15xs4';
    const wrapper = shallowMount(SmallWidget, {
      propsData: { doi },
    });

    wrapper.setData({
      views: 600000,
      downloads: 50000,
      citations: 400000,
    });


    // eslint-disable-next-line
    console.log(wrapper.html());
    expect(wrapper.html()).to.include('label');
    expect(wrapper.find('.counts').text()).to.include('400K');
  });
});
