var app = new Vue({
	el:"#app",
	data:{
		fir:'',
		cc:{s:'',f:'',m:''},
		time:'',
		jr:'',
		bookC:'',
		cnL:'',
		okc:'',
		hre:''
	},
	methods:{
		go(i){
			sessionStorage.setItem("id"+i,i)
		},
		Ok(){
			this.okc = localStorage.getItem("OK")
			if(this.okc==1){
				this.hre="filterinput.html"
			}else{
				this.hre="enter_up.html"
			}
		}
	},
	components:{
		bnr:{
			template:"#bnrTem",
			data(){
				return {
					bnrarr:[
						"../image/bnr1.jpg",
						"../image/bnr2.jpg",
						"../image/bnr3.jpg",
						"../image/bnr4.jpg",
						"../image/bnr5.jpg",
						"../image/bnr6.jpg"
					]
				}
			}
		}
	},
	mounted(){
		var that = this;
		axios.get("../date/classify.json").then(function(e){
			console.log(e.data)
			that.fir=e.data.zym.classify.bookify
			console.log(that.fir)
			that.jr=e.data.zym.secKill.fs
			console.log(that.jr)
			that.bookC=e.data.bookCity.Sper.Sperarr
			that.cnL=e.data.cnniLove.cnL
			console.log(that.cnL)
			fnjs()
			function fnjs(){
				var sj=new Date("2020-12-24 19:35:00")
				var xsj=new Date()
				that.timer=parseInt((sj-xsj)/1000)
				var XS=parseInt(that.timer/3600)
				var FZ=parseInt(that.timer%3600/60)
				var MM=parseInt(that.timer%60)
				XS=XS<10?"0"+XS:XS;
				FZ=FZ<10?"0"+FZ:FZ;
				MM=MM<10?"0"+MM:MM;
				var arr=[XS,FZ,MM]
				that.cc.s=XS
				that.cc.f=FZ
				that.cc.m=MM
			}
			var sj=setInterval(function(){
				fnjs()
				
				if(that.timer == 0){
					that.jr=''
					that.jr=e.data.zym.secKill.fs1
					clearInterval(sj)
					that.time="50000"
				}
			},1000)
			
		})
	}
})