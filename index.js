$(document).ready( function(){
      

			var windowHeight = $(window).height();
			var navBarHeight = $(".navbar").height();
			var codeContainerHeight = windowHeight - navBarHeight;
			$(".codeContainer").height(codeContainerHeight - 20 +"px");
			$(".codeContainer").css("marginTop",navBarHeight+1);


            $(".navButton").click
			(
				function()
				{
					$(this).toggleClass("active");
					var activeDiv = $(this).html();
					$("."+activeDiv+"-box").toggle();
					var visibleDivs = $(".column").filter(function(){
							return($(this).css("display")!="none");
						}).length;	
                    var Width = 100/visibleDivs;
                
					$(".row").css("grid-template-columns", 'repeat'+'('+ visibleDivs + ', ' + '1fr');
				}
			);

			
			var res = $(".resultArea").contents().find("body");
			// res.css("margin","2px");
			 res.html('<div id="resHTML"></div><style id="resCSS"></style>');
		
		
			 $("#htmlcontainer").html('');
			 $("#csscontainer").html('');
			 res.find("#resHTML").html('');
			 res.find("#resCSS").html('');
		
		
			 
			 $("#HTMLtext").on('keyup',function(){
				  res.find("#resHTML").html($(this).val());
			 });
		
			 $("#CSStext").on('keyup',function(){
				  res.find("#resCSS").html($(this).val());
			 });
		
			 $("#JStext").on('change',function(){
			  res.find("#botjs").remove();
			  res.append('<script id="botjs">'+$(this).val()+'</script>');
			 });
		
			 $("#btnRun").on('click',function(){
			  res.find("#botjs").remove();
			  res.append('<script id="botjs">'+$("#JStext").val()+'</script>');
			 });
		


})