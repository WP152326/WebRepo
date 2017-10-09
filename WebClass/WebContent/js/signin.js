/**
 * 
 */
$(document).ready(function (){
  		$('#SigninForm').submit(function (event) {
  			event.preventDefault();
  			
  			var id = $('#id').val();
  			
  			$.post("http://httpbin.org/post",
  					{id: id},
  					function(data) {
  						var myModal = $('#myModal');
  						myModal.modal();
  						myModal.find('.modal-body').text(data.form.id + '님 회원가입 되었습니다.');
  					});
  		});
  	});
