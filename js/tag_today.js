function tagToday(today){   //標示當日。

    document.getElementById(today.getDate()).style.color="#FFAA33";
    document.getElementById(today.getDate()).style.backgroundColor="#00DDDD";
    document.getElementById(today.getDate()).style.fontWeight="bold";
    document.getElementById(today.getDate()).style.fontSize="25px";

    $(document).ready(function(){ 

        //嘗試弄出今天便條紙。
        $('#'+today.getDate()).mouseenter(function(){
            $('#msg').toggle(function(){
                $(this).show();
            });
        });
        $('#'+today.getDate()).mouseleave(function(){
            $('#msg').toggle(function(){
                $(this).hide();
            });
        });

        //嘗試弄出點擊進入google搜尋此天的功能。
        $('td').click(function(){
            var theDate = $(this).attr("id");
            if(theDate != undefined){
                var Search= today.getFullYear()+"年"+(today.getMonth()+1)+"月"+theDate+"日";
                window.open('http://google.com/search?q='+Search);
            }
        });

        //嘗試改變整個日曆的風格。
        $('#Common_Era').click(function(){
            if( $('table').css("background-color") == "rgb(204, 255, 153)" ){
                $('table,th').css("background-color","#000000");
                $('tr,td').css("background-color","#444444");
                $('#'+today.getDate()).css("background-color","#696969");
                
                $('#mYear>p').css("color","#00FFCC");
                $('th').css("color","white");
                $('td').css("color","#33FFDD");
                $('.Saturday,.Sunday').css("color","#FF3333");
                $('#'+today.getDate()).css("color","gold");
                
            }else{
                $('table,th').css("background-color","#CCFF99");
                $('tr,td').css("background-color","white");
                $('#'+today.getDate()).css("background-color","#00DDDD");
                $('.Saturday,.Sunday').css("background-color","#FFB7DD");
                
                $('#mYear>p').css("color","#FFBB00");
                $('th').css("color","#006400");
                $('td').css("color","black");
                $('.Saturday,.Sunday').css("color","#800000");
                $('#'+today.getDate()).css("color","#FFAA33");
            }
        });

    });

}
