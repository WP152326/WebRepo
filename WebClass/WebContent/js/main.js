/**
 * 
 */
$(document).ready(function (){
  		$('#LoginForm').submit(function (event) {
  			// 자동 submit되는 기능을 막음
  			event.preventDefault();
  			
  			//id, pwd값 가져오기
  			//document.getElementById("id").value
  			var id = $('#id').val();
  			var pwd = $('#pwd').val();
  			
  			// 서버로 post 방식으로 전송
  			$.post("/WebClass/bloglogin",
  					{id: id, pwd: pwd},
  					function(data) {
  						//alert(data.form.id+'님 로그인되었습니다.');
  						if(data.msg=="error"){
  							var myModal = $('#myModal');
  	  						myModal.modal();
  	  						myModal.find('.modal-body').text('로그인에 실패 했습니다.');
  	  						$('#pwd').val('');
  						}
  						else{
  							location.reload();
  						}
  						});
  		});
  	});

function menu_over(e){
		e.setAttribute("class", "nav-item active");
	}
	function menu_out(e){
		e.setAttribute("class", "nav-item");
	}