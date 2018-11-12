let VM = new Vue({
    el:'#login',
    data:{
        uname:"",
        pass:"",
    },
    methods:{
        login:function(){
            if(this.uname=="admin"&& this.pass=="admin"){
                alert ("Success");
            }
            else{
                alert("Failed");
            }
        }
    }
    
})

