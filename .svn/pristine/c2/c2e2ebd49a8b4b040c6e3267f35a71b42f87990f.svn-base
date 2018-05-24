import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common_view.css'
import jQuery from 'jquery'
import { store } from './store/store.js'
import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'
Vue.prototype.$http = axios
Vue.prototype.$axios = axios
axios.defaults.baseURL = "http://192.168.30.42:9001"

Vue.config.productionTip = false
Vue.use(vueEventCalendar, {locale: 'en'}) 
Vue.use(ElementUI)
window.eventBus = new Vue();
//money格式化
Vue.filter('formateCurrency', function (value) {
    var isNumber,decimal;
    if(isNaN(value)){
        value = '0'
    }
    isNumber = (value == (value = Math.abs(value)));
    value = Math.floor(value*100+0.50000000001);  
    decimal = value%100;
    value = Math.floor(value/100).toString();  
    if(decimal < 10){
        decimal = "0" + decimal
    }
    for (var i = 0; i < Math.floor((value.length-(1+i))/3); i++){
        value = value.substring(0,value.length-(4*i+3))+','+ value.substring(value.length-(4*i+3));  
    }
    return (((isNumber)?'':'-') + value + '.' + decimal);  
})
//moeny转成中文
Vue.filter('toChinese',function(num) {
	var digit = '零壹贰叁肆伍陆柒捌玖',
		unit = '万仟佰拾亿仟佰拾万仟佰拾元角分',
		disNum,
		strNum,
		moneyChinese = '',
		i,
		j,
		chGigit,
		chUnit,
		nZero = 0;
	num = Math.abs(num).toFixed(2);
	strNum = (num * 100).toFixed(0).toString();
	j = strNum.length;
	if (j > 15){return '溢出';} 
	unit = unit.substr(15-j);
	for(i=0;i<j;i++){ 
		disNum = strNum.substr(i,1);
		if (i != (j-3) && i != (j-7) && i != (j-11) && i != (j-15)){
			if (disNum == '0'){ 
				chGigit = ''; 
				chUnit = ''; 
				nZero = nZero + 1; 
			}else{ 
				if(disNum != '0' && nZero != 0){ 
					chGigit = '零' + digit.substr(disNum*1,1); 
					chUnit = unit.substr(i,1); 
					nZero = 0; 
				}else{ 
					chGigit = digit.substr(disNum*1,1); 
					chUnit = unit.substr(i,1); 
					nZero = 0; 
				} 
			} 
		}else{
			if (disNum != '0' && nZero != 0){ 
				chGigit = "零" + digit.substr(disNum*1,1); 
				chUnit = unit.substr(i,1); 
				nZero = 0; 
			}else{ 
				if(disNum != '0' && nZero == 0){ 
					chGigit = digit.substr(disNum*1,1); 
					chUnit = unit.substr(i,1); 
					nZero = 0; 
				}else{ 
					if (disNum == '0' && nZero >= 3){ 
						chGigit = ''; 
						chUnit = ''; 
						nZero = nZero + 1; 
					} 
					else{ 
						if (j >= 11){ 
							chGigit = ''; 
							nZero = nZero + 1; 
						} 
						else{ 
							chGigit = ''; 
							chUnit = unit.substr(i,1); 
							nZero = nZero + 1; 
						} 
					} 
				} 
			} 
		} 
		if (i == (j-11) || i == (j-3)){
			chUnit = unit.substr(i,1); 
		} 
		moneyChinese = moneyChinese + chGigit + chUnit;
		if (i == j-1 && disNum == '0' ){
			moneyChinese = moneyChinese + '整'; 
		} 
	} 
	if (num == 0){ 
		moneyChinese = '零元整'; 
	} 
	return moneyChinese; 
});


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

