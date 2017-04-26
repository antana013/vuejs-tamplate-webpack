import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Home from '@/components/Home'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    const vm = new Constructor().$mount(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    expect(vm.$el.querySelector('.home h1').textContent)
      .to.equal('Welcome to Your Vue.js App'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
