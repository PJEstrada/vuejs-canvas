import { mount } from '@vue/test-utils'
import BoxAssignment from '../../src/components/BoxAssignment';
import jsdom from 'jsdom';
import 'jest-canvas-mock';

describe('BoxAssignment', () => {
  it('BoxAssignment is a Vue instance', () => {
    const wrapper = mount(BoxAssignment);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it('Renders correct HTML', () => {
    const wrapper = mount(BoxAssignment);
    expect(wrapper.html()).toContain('<div id="app">\n  <h1> CHALLENGE: Pablo Estrada </h1> <canvas id="canvas"></canvas>\n</div>');
  });

  it('Matches canvas snapshot when calling draw()', () => {
    const wrapper = mount(BoxAssignment);
    let canvas = document.createElement("CANVAS");
    let ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    wrapper.vm.draw(ctx, ()=>console.log('done'));
    const type = "image/svg+xml";
    canvas.toDataURL(type, 1, (err, base64) => {
      expect(base64).toMatchSnapshot();
      done();
    });
  });

})
