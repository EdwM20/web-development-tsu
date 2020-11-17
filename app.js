$(function() {
	


function main()
{
	let a = 5;
	let b = 6;

	
	console.log(a + b);

	//let body = document.getElementByTegName("body");

	let button = document.createElement("button");
	button.innerHTML = "кнопка"

	document.body.appendChild(button);	

	$("button").on('click', function(){
		alert('Hello, it is jQuery')	
	});



	$.ajax({
		url: "echo.php",
		async: true,
		metod: "POST",
		data: ({number: 5}),
		dataType: "html"
		// поменял на html потому что number 
		}).done(function(respons) {
			console.log ('success');
			console.log ('respons');
		});
	

}

main();

});
