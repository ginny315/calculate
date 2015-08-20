define(['FFF','zepto'],function(FFF,$){
   
    var F = FFF.FFF;
    var Widget = F.Widget;
    function Result(){
        Widget.apply(this,arguments);
    }

    //增加Box的类属性
    Result.ATTRS = {
        boundingBox:{
            value:$('<div class="result"></div>'),
        },
        
        selfValue:{
            value:0,
        },

    /*1执行，0清零*/
        showResult:{
            value:0,
            changeFn:function(obj){
                var that = this;
                var MyBox = that.getBoundingBox();
                if(obj.value == 0){
                    console.log( MyBox.children());
                    MyBox.children().remove();
                    console.log('after'+MyBox.children());
                }
            }
        }
    }

    //Box继承自Widget
    F.extend(Result,Widget,{
        //初始化
        initialize:function(){
        },
        //渲染
        renderUI:function(){ 
            var that = this;
                
        },
        //绑定事件
        bindUI:function(){       
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
            Result:Result
    };
});