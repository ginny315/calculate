define(['FFF','zepto','result'],function(FFF,$,Result){
   
    var F = FFF.FFF;
    var Result = Result.Result;
    function Num(){
        Result.apply(this,arguments);
    }

    //增加Box的类属性
    Num.ATTRS = {
        boundingBox:{
            value:$('<div></div>'),
        },
        
        selfValue:{
            value:0,
        },
    }

    //Box继承自Widget
    F.extend(Num,Result,{
        //初始化
        initialize:function(){
        },
        //渲染
        renderUI:function(){
            var that = this;
            var MyBox = that.getBoundingBox(); 
            MyBox.html('<div class="button button_num"></div>'); 
            var button = that.getBoundingBox().find('.button');
            button.text(that.getSelfValue());
            if(that.getSelfValue() == 0){
                button.css({'width': '202px'});
            }else if(that.getSelfValue() == 10){
                button.text(".");
            }  
        },
        //绑定事件
        bindUI:function(){
            var that = this;
            var button = that.getBoundingBox().find('.button');
            button.on('click',function(){
                //this.setShowResult(1);
                F.trigger('click_num',{'t':that.getSelfValue()});
            });
        },
        //同步事件
        syncUI:function(){

        },
        //销毁对象
        destructor:function(obj){
            console.log("I am destory!");
        },   
    });

    return{
            Num:Num
    };
});