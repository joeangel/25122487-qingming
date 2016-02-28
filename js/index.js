

$(function(){
	
	
});



//儲存
function goSave(){
	
	//#1 Check Columns
	
	if(!$('[name="name"]').val()){$('[name="name"]').focus(); return alert('請輸入姓名！');}
	
	if(!$('[name="email"]').val()){$('[name="email"]').focus(); return alert('請輸入E-mail！');}
	if (!isEmail($('[name="email"]').val())) { $('[name="email"]').focus(); return alert('Email格式錯誤！'); }
	
	if(!$('[name="title"]').val()){$('[name="title"]').focus();return alert('請輸入主旨！');}
	
	if(!$('[name="content"]').val()){$('[name="content"]').focus();return alert('請輸入內容！');}
	
	if(!$('[name="capt"]').val()){$('[name="capt"]').focus();return alert('請輸入驗證碼！');}
	
	//if(!$("#cbagree").prop("checked")){return alert('請確認已閱讀個資保護聲明並同意');}
	
	//#2 Save
	$('#data').submit();
	
}


//=========Common=====================
function isEmail(str){
    var regExp = /^[^@^\s]+@[^\.@^\s]+(\.[^\.@^\s]+)+$/;
    if ( str.match(regExp) )
        return true;
    else
        return false;
}


function isBirthY(str){
	if(str<=2014 && str>=1914){return true;}

	return false;
}
function isBirthM(str){
	if(str<=12 && str>=1){return true;}

	return false;
}
function isMobile(str){
    if(str.length!=10){return false;}

    if(($('[name="mobile"]').val()).substr(0,2)!='09'){return false;}

    var reg = /[^0-9]/;
    if ( reg.test(str) ){ return false; }else{ return true; }
}
function isPassword(str){
    if(str.length<8 || str.length>16){return false;}

    var reg1 = /[0-9]/;
    var reg2 = /[a-z]/i;
    if(reg1.test(str) && reg2.test(str)){
    	return true;
    }else{
    	return false;
    }
}

function getYmsD(){
	var i1 = $('[name="birth_y"]');
	var i2 = $('[name="birth_m"]');
	var i3 = $('[name="birth_d"]');

	$.get('member_profile.php?ym='+i1.val()+'|'+i2.val(),function(res){
		var i3oldVal = i3.val();
		var html = '';
		for(i=1;i<=res;i++){
			html += '<option value="'+i+'">'+i+'</option>';
		}
		if(i3oldVal>res){
			i3oldVal = res;
		}
		i3.html(html).val(i3oldVal);
	})
}



