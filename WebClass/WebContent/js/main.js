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
  			$.post("http://httpbin.org/post",
  					{id: id, pwd: pwd},
  					function(data) {
  						//alert(data.form.id+'님 로그인되었습니다.');
  						var myModal = $('#myModal');
  						myModal.modal();
  						myModal.find('.modal-body').text(data.form.id + '님 로그인 되었습니다.');
  					});
  		});
  	});

function menu_over(e){
		e.setAttribute("class", "nav-item active");
	}
	function menu_out(e){
		e.setAttribute("class", "nav-item");
	}