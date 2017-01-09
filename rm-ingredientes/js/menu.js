$(document).ready(function(){
	// seccion de conocenos
	$("#conocenos").hover(function(){
		$("#hr-conocenos").removeClass("menutext");
		$("#hr-conocenos").addClass("menutext2");
	}, function(){
		$("#hr-conocenos").addClass("menutext");
		$("#hr-conocenos").removeClass("menutext2");
	});
	// seccion de productos
	$("#productos").hover(function(){
		$("#hr-productos").removeClass("menutext");
		$("#hr-productos").addClass("menutext2");
	}, function(){
		$("#hr-productos").addClass("menutext");
		$("#hr-productos").removeClass("menutext2");
	});
	// seccion de demostraciones
	$("#demostraciones").hover(function(){
		$("#hr-demostraciones").removeClass("menutext");
		$("#hr-demostraciones").addClass("menutext2");
	}, function(){
		$("#hr-demostraciones").addClass("menutext");
		$("#hr-demostraciones").removeClass("menutext2");
	});
	// seccion de contacto
	$("#contacto").hover(function(){
		$("#hr-contacto").removeClass("menutext");
		$("#hr-contacto").addClass("menutext2");
	}, function(){
		$("#hr-contacto").addClass("menutext");
		$("#hr-contacto").removeClass("menutext2");
	});




		// seccion de hovers de productos 
		// maiz
	$("#maiz").hover(function(){
		$("#texto-maiz").removeClass("texto-productos");
		$("#texto-maiz").addClass("texto-productos-hover");
	}, function(){
		$("#texto-maiz").addClass("texto-productos");
		$("#texto-maiz").removeClass("texto-productos-hover");
	});
	// harina
	$("#harina").hover(function(){
		$("#texto-harina").removeClass("texto-productos");
		$("#texto-harina").addClass("texto-productos-hover");
	}, function(){
		$("#texto-harina").addClass("texto-productos");
		$("#texto-harina").removeClass("texto-productos-hover");
	});
	// panificadoras
	$("#panificadoras").hover(function(){
		$("#texto-panificadoras").removeClass("texto-productos");
		$("#texto-panificadoras").addClass("texto-productos-hover");
	}, function(){
		$("#texto-panificadoras").addClass("texto-productos");
		$("#texto-panificadoras").removeClass("texto-productos-hover");
	});
	// especial
	$("#especial").hover(function(){
		$("#texto-especial").removeClass("texto-productos");
		$("#texto-especial").addClass("texto-productos-hover");
	}, function(){
		$("#texto-especial").addClass("texto-productos");
		$("#texto-especial").removeClass("texto-productos-hover");
	});




	// funcionalidad de videos
	$("#video1").click(function(){
		$(".video").html("<iframe style='border-radius: 2%' width='70%' height='400' src='https://www.youtube.com/embed/P-Kq9edwyDs?rel=0&amp;controls=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>");
		$("#titulo-video").text("Tortillas de Maíz");
		$("#descripcion-video").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
	});

	$("#video2").click(function(){
		$(".video").html("<iframe style='border-radius: 2%' width='70%' height='400' src='https://www.youtube.com/embed/Yw-FSUEc8Pc' frameborder='0' allowfullscreen></iframe>");
		$("#titulo-video").text("Titulo del video 2");
		$("#descripcion-video").text("Titulo del video 2");
	});


});

