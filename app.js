var items = [
    {
        name:'鉛筆',
        price:1000 ,
        quantity:1
    },
    {
        name:'ノート',
        price:400,
        quantity:0
    },
    {
        name:'消しゴム',
        price:500,
        quantity:0
    }
]

var vm = new Vue({
    el:'#app',
    data:{
        // dataプロパティl
        items:items
    },
    filters:{
    	numberWithDelimiter: function(value) {
    		if (!value) {
    			return '0'
    		}
    		
    		return value.toString().replace(/(\d)(?=(\d{3}))/g, '$1')
    	}
    },
    computed: { //算出プロパティ
    	totalPrice : function() {
    		return this.items.reduce( function (sum, item) {
    			return sum + (item.price * item.quantity)
    		}, 0 )
    	},
    	totalPriceWithTax: function() {
    		//算出プロパティに依存した算出プロパティも定義できる。
    		return Math.floor(this.totalPrice * 1.08)
        },
        canBuy: function() {
            return this.totalPrice >= 1000
        }
    }
})
window.vm = vm

