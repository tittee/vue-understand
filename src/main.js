import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'

Vue.config.productionTip = false
Vue.component('app-servers', Home);
export const eventBus = new Vue({
	methods: {
		changeAge(age){
			this.$emit('ageWasEdited', age);
		}
	}
});
new Vue({
  render: h => h(App),
}).$mount('#app')


