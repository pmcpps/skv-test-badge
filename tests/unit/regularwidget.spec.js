import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import RegularWidget from '@/components/RegularWidget.vue';

describe('RegularWidget.vue', () => {
  it('renders views, citations, downloads with blue icons', () => {
    const doi = '10.7272/q6g15xs4';
    const wrapper = mount(RegularWidget, {
      propsData: { doi },
    });

    wrapper.setData({
      views: 30,
      downloads: 30,
      citations: 30,
    });


    // eslint-disable-next-line
    // console.log(wrapper.html());
    expect(wrapper.html()).to.include('icon-metrics');
    expect(wrapper.find('.v-badge__badge').text()).to.include('30');
  });


  it('renders with 1000s of counts', () => {
    const doi = '10.7272/q6g15xs4';
    const wrapper = mount(RegularWidget, {
      propsData: { doi },
    });

    wrapper.setData({
      views: 600000,
      downloads: 50000,
      citations: 400000,
    });


    // eslint-disable-next-line
    // console.log(wrapper.html());
    expect(wrapper.html()).to.include('icon-metrics');
    expect(wrapper.find('.v-badge__badge').text()).to.include('400K');
  });

  it('renders input data', () => {
  });

  describe('After call behavior', () => {
    const doi = '10.7272/q6g15xs4';
    const wrapper = mount(RegularWidget, {
      propsData: { doi },
    });

    wrapper.setData({
      views: 30,
      downloads: 0,
      citations: 0,
    });

    it('renders empty values with gray icons', (done) => {
      wrapper.vm.$nextTick(() => {
        // eslint-disable-next-line
        // console.log(wrapper.findAll('.primary').length);
        expect(wrapper.html()).to.include('icon-metrics');
        expect(wrapper.html()).to.include('icon-metrics-empty');
        expect(wrapper.findAll('.primary').length).to.eql(1);
        done();
      });
    });
  });
});
