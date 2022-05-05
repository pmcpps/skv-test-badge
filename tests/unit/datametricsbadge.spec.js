// import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import DataMetricsBadge from '@/components/DataMetricsBadge.vue';

describe('DataMetricsBadge.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(DataMetricsBadge, {
      propsData: {
        doi: '10.7272/q6g15xs4',
        display: 'small',
      },
    });
    // eslint-disable-next-line
       console.log(wrapper.html());
    //  expect(wrapper.find(smallwidget)).toBe(true)
  });

  it('renders small', () => {
    // expect(wrapper.find('smallwidget-stub')).toBe(true)
  });

  it('renders medium', () => {
  });

  it('renders default', () => {
  });
});
