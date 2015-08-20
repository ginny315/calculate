define(['FFF','zepto','result'],function(FFF,$,Result){
   
    var F = FFF.FFF;
    var Result = Result.Result;
    function Cal(){
        Result.apply(this,arguments);
    }

    //增加Box的类属性
    Cal.ATTRS = {
        boundingBox:{
            value:$('<div></div>'),
        },
//=-*/分别为10,11,12,13       
        selfValue:{
            value:0,
        },
    }

    //Box继承自Widget
    F.extend(Cal,Result,{
        //初始化
        initialize:function(){
        },
        //渲染
        renderUI:function(){
            var that = this;
            var MyBox = that.getBoundingBox();
            MyBox.html('<div class="button button_orange"></div>'); 
            var temp = that.getSelfValue();
            var button = that.getBoundingBox().find('.button');
            if(temp >= 20 && temp <23){
                button.css({
                    'background-color': '#C8C9CB',
                    'color':'#000'
                });
            }
            var temp_string = '';
            switch(temp){
                case(14):temp_string = '=';
                    break;
                case(23):temp_string = '÷';
                    break;
                case(12):temp_string = '*';
                    break;
                case(11):temp_string = '-';
                    break;
                case(10):temp_string = '+';
                    break;
                case(20):temp_string = 'C';
                    break;
                case(21):temp_string = '±';
                    break;
                case(22):temp_string = '%';
                    break;
                default:console.log('cal error');
                    break;
            }
            button.text(temp_string);       
        },
        //绑定事件
        bindUI:function(){ 
            var that = this;
            var button = that.getBoundingBox().find('.button');
            button.on('click',function(){
                F.trigger('click_cal',{'t':that.getSelfValue()});
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
            Cal:Cal
    };
});