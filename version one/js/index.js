require.config({
    paths: {
    	FFF:'FFF',
        zepto:'zepto',
        result: 'result',
        num:'num',
        cal:'cal',
    }
});

require(['FFF', 'zepto', 'result','num','cal'], function(FFF, $, Result,Num,Cal) {
    var F = FFF.FFF;
    
    var result = new Result.Result();
    result.render({
    	container:$('.container'),
    	type:'append'
    });

    var buttonNumList = [];
    var calculList = [];
    var calcul = null;

    for(var i = 20;i <= 23;i++){
    	calculList[i] = new Cal.Cal();
    	calculList[i].setSelfValue(i);
    	calculList[i].render({
	    	container:$('.container'),
	    	type:'append'
    	});
	}

    for(var i = 7;i <= 9;i++){
    	buttonNumList[i] = new Num.Num();
    	buttonNumList[i].setSelfValue(i);
    	buttonNumList[i].render({
	    	container:$('.container'),
	    	type:'append'
    	});
	}

    var calcul_cheng = new Cal.Cal();
	calcul_cheng.setSelfValue(12);
	calcul_cheng.render({
	    	container:$('.container'),
	    	type:'append'
    }); 

    for(var i = 4;i <= 6;i++){
    	buttonNumList[i] = new Num.Num();
    	buttonNumList[i].setSelfValue(i);
    	buttonNumList[i].render({
	    	container:$('.container'),
	    	type:'append'
    	});
	}

	var calcul_jian = new Cal.Cal();
	calcul_jian.setSelfValue(11);
	calcul_jian.render({
	    	container:$('.container'),
	    	type:'append'
    });

    for(var i = 1;i <= 3;i++){
    	buttonNumList[i] = new Num.Num();
    	buttonNumList[i].setSelfValue(i);
    	buttonNumList[i].render({
	    	container:$('.container'),
	    	type:'append'
    	});
	}

	var calcul_jia = new Cal.Cal();
	calcul_jia.setSelfValue(10);
	calcul_jia.render({
	    	container:$('.container'),
	    	type:'append'
    });

    buttonNumList[0] = new Num.Num();
    	buttonNumList[0].setSelfValue(0);
    	buttonNumList[0].render({
	    	container:$('.container'),
	    	type:'append'
    });

    buttonNumList[10] = new Num.Num();
    	buttonNumList[10].setSelfValue(10);
    	buttonNumList[10].render({
	    	container:$('.container'),
	    	type:'append'
    });

    var calcul_deng = new Cal.Cal();
	calcul_deng.setSelfValue(14);
	calcul_deng.render({
	    	container:$('.container'),
	    	type:'append'
    });

	F.on('click_num',function(obj){
		result.setShowResult(1);
		$('<span>'+obj.t+'</span>').appendTo($('.result'));
	});

var equal_flag = 0;//没有出现过==
var eval_after = 0;
	F.on('click_cal',function(obj){
		console.log('cal start'); 
		var cal = obj.t;
		var temp_string;
		var res = $('.result');
		var temp;
		equal_flag == 1?res.html(''): console.log('continue');
		if(cal == 20){//AC
			result.setShowResult(0);
		}else{
			result.setShowResult(1);
		}

		if(equal_flag){
			res.html('<span>'+eval_after+'</span>');
		}
		switch(cal){
                case(14):temp_string = '=';equal_flag = 1;
                    break;
                case(23):temp_string = '/';
                    break;
                case(12):temp_string = '*';
                    break;
                case(11):temp_string = '-';
                    break;
                case(10):temp_string = '+';
                    break;
                case(20):temp_string = '';
                    break;
                case(21):temp_string = '-';
                    break;
                case(22):temp_string = '%';
                    break;
                default:console.log('cal error');
                    break;
            }
            if(cal != 14 && cal != 21){
            	$('<span>'+temp_string+'</span>').appendTo(res);
            }else if(cal == 14){//=
            	console.log("remove html "+removeHTMLTag(res.html()));
				temp = eval(removeHTMLTag(res.html()));
				console.log(temp);
				eval_after = temp;
				$('<span>'+temp_string+'</span>').appendTo(res);
				$('<span>'+temp+'</span>').appendTo($('.result'));
			}else if(cal == 21){
				$('<span>'+temp_string+'</span>').prependTo(res);
			}   	
	});
	
	function removeHTMLTag(str) {
            str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
            str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
            //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
            str=str.replace(/&nbsp;/ig,'');//去掉&nbsp;
            return str;
    }
});

