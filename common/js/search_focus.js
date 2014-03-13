// JavaScript Document
 $(function(){
			if($("input#query").val()!=""){
               $(this).addClass("nohint");
            }else{
               $($("input#query")).addClass("hint");
            }
            $("input#query").focus(function(){
                /* フォーカスが当たった時、何も入力されていなかったら背景画像を消す */
                if($(this).val()=="") $(this).removeClass("hint").addClass("nohint");
            }).blur(function(){
               /* フォーカスが外れた時、何も入力されていなかったら背景画像を表示 */
                if($(this).val()=="") $(this).removeClass("nohint").addClass("hint");
            });
         });