	const app = new Vue({
			el:"#app",
			data:{
				fir:'',
				firn:'',
				op:0,
				zindex:0,
				Ok:"",
				hre:''
			},
			methods:{
				fnx(i){
					this.op=i;
				},
				jies(i){
					this.zindex=i;
				},
				klo(){
					this.Ok = localStorage.getItem("OK");
					if(this.Ok==1){
						this.hre="filterinput.html"
					}else{
						this.hre="enter_up.html"
					}
				},
				jaru(){
					console.log(123)
					localStorage.setItem("number"+this.firn.id,this.zindex)
					localStorage.setItem("id"+this.firn.id,this.firn.id)
					this.firn.num=this.zindex
				}
			},
			components:{
				bnnr:{
					template:"#firBnr",
					props:["arb"]
				},
				sec:{
					template:"#gh",
					data(){
						return {
							index:1
						}
					},
					methods:{
						js(i){
							if(i=="jia"){
								this.index++;
							}else{
								this.index--;
								if(this.index<1){
									this.index=1
								}
							}
						},
						fss(i){
							console.log(i)
							this.$emit("fashe",i)
						}
					}
				}
			},
			mounted(){
				var that = this;
				axios.get("../date/classify.json").then(function(e){
					console.log(e)
					that.fir=e.data.cnniLove.cnL
					that.fir.filter(n=>{
					
						if(n.id==sessionStorage.getItem("id"+n.id)){
							// console.log(n)
							that.firn=n
							console.log(that.firn)
						}
					})
					console.log(that.fir)
					// var cx=sessionStorage.get("id"+)
				})
				window.onpopstate=function(){
					sessionStorage.clear()
				}
				window.history.pushState('forward', null, '#');
				window.history.forward(0);
			}
		})