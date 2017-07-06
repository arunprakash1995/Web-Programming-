$(document).ready(function() {

	$("#username").focus(function(){
		$(this).removeClass("blu");
		$(this).addClass("foc");
		 $( '.uok' ).remove();
		 $( '.uerror' ).remove();
	 	 $('#username').after( "<span class='uinfo'><span class='info'>Username should contain alphanumeric characters only</span></span>" );							
	});
	
	$("#username").blur(function(){
		$(this).removeClass("foc");
		$(this).addClass("blu");
		$( '.uinfo' ).remove();
		var str = $("#username").val();
		if(str != "")
 		{
		var code, i, len;
		var flag = 1;
		for (i = 0, len = str.length; i < len; i++) {
    		
			code = str.charCodeAt(i);
    			if (!(code > 47 && code < 58) && 
        		    !(code > 64 && code < 91) &&
        		    !(code > 96 && code < 123)) {
				flag = 0;
			}
		}
		if(flag == 0){
			$('#username').after( "<span class='uerror'><span class='error'>ERROR</span></span>" );
		}
		else{
			$('#username').after( "<span class='uok'><span class='ok'>OK</span></span>" );
		}
		}
	});

	$("#password").focus(function(){
		$(this).removeClass("blu");
		$(this).addClass("foc");
		 $( '.pok' ).remove();
		 $( '.perror' ).remove();
	 	 $('#password').after( "<span class='pinfo'><span class='info'>Password should be atleaast 8 characters long</span></span>" );							
	});

	$("#password").blur(function(){
		$(this).removeClass("foc");
		$(this).addClass("blu");
		$( '.pinfo' ).remove();
		var str = $("#password").val();
		if(str.length >0)
 		{
			if(str.length >7)
			{
				$('#password').after( "<span class='pok'><span class='ok'>OK</span></span>" );
			}
			else
			{
				$('#password').after( "<span class='perror'><span class='error'>ERROR</span></span>" );
			}

		}
	});	

	$("#email").focus(function(){
		$(this).removeClass("blu");
		$(this).addClass("foc");
		$('.emok').remove();
		$('.emerror').remove();
		$('#email').after("<span class='eminfo'><span class='info'>Password should be atleaast 8 characters long</span></span>" );
	});

	$("#email").blur(function(){
		$(this).removeClass("foc");
		$(this).addClass("blu");	
		$( '.eminfo' ).remove();
		var emailvalue= $("#email").val();
		if(emailvalue.length>0)
		{
			var emailval= /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    			if(emailvalue.match(emailval))
			{
				$('#email').after( "<span class='emok'><span class='ok'>OK</span></span>" );	
			}
			else
			{
				$('#email').after( "<span class='emerror'><span class='error'>ERROR</span></span>" );
			}

		}
	});
	
});
