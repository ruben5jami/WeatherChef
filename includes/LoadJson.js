$(document).ready(function() {
    $("#menuPage").hide();
    $("#saved").hide();
    $("#categorie").hide();
    $("#blackList").hide();
    $("#firstRecipe").hide();
    var menuLogo = "images/MenuLogo.png";
    var dots = "images/dots.png";
    var name = "";
    var ingredients = "";
    var howTo = "";
    var bgImg = "";
    var likes = "";
    var tempName = "";
    var categorie = "";
    var tempCategorie = "";
    var img = "";
    var i = 0;
    var firstSection = false;

    var max_artcile = 0;

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Ramat%20Gan&mode=json&units=metric", function(data) {
	var temperature = parseInt(data.main.temp);
	$.getJSON("includes/Data.json", function(data) {

	    $.each(data, function(key, val) {
		$.each(val, function(key, val) {
		    if (val.tempCategorie >= temperature - 7 && val.tempCategorie <= temperature + 7) {
			categorie = val.categorie;
			name = val.name;
			howTo = val.howTo;
			bgImg = val.bgImg;
			img = val.img;
			tempCategorie = val.tempCategorie;
			ingredients = val.ingredients;
			tempName = val.tempName;
			var id_article = i;


			$("#options").append(
				"<article style='background-image: url(" + bgImg + ");' id='" + id_article + "' class='articlejs" + id_article + "'>" + "<img id='categorieLogo' src='" +
				img + "'><h1>" + tempCategorie + "</h1> <h3>" + tempName + "</h3>" +
				"<img id='MenuLogo' class='MenuLogo_click' src='" + menuLogo + "'>" + "<img id='dots' src='" +
				dots + "'>" +
				"<p id='recepieName'>" +
				name + "</p>" + "</article>"
				);
			if (id_article > 0) {
			    $(".articlejs" + id_article).hide();
			}
			i++;
		    }
		});

	    });
	    $("#options").on("swipeleft", function(event) {
		var next = (parseInt($(event.target)[0].id) + 1);
		if (next != i) {
		    $(event.target).hide();
		    $(".articlejs" + next).show();
		}
	    });
	    $("#options").on("swiperight", function(event) {
		var next = (parseInt($(event.target)[0].id) - 1);
		//alert($(event.target)[0].id + " = "+next);
		if (parseInt($(event.target)[0].id) > 0) {
		    $(event.target).hide();
		    $(".articlejs" + next).show();
		}
	    });

	    $(".MenuLogo_click").on('click', function(event) {
		var article_visible = 0;
		$(".options article:visible").each(function() {
		    article_visible = $(this).attr("id");
		});
		$(".articlejs" + article_visible).hide();
		$("#menuPage").show();
	    });

	    $("#menuCategories3").on('click', function(event) {
		$("#menuPage").hide();
		$("#categorie").show();
	    });

	    $("#menuSaved3").on('click', function(event) {
		$("#menuPage").hide();
		$("#saved").show();
	    });

	    $("#menuBlack3").on('click', function(event) {
		$("#menuPage").hide();
		$("#blackList").show();
	    });

	    $("#back3").on('click', function(event) {
		$("#menuPage").hide();
		$(".articlejs0").show();
	    });
	    $("#back2").on('click', function(event) {
		$("#saved").hide();
		$("#menuPage").show();
	    });
	    $("#back").on('click', function(event) {
		$("#blackList").hide();
		$("#menuPage").show();
	    });
	    $("#recepieName").on('click', function(event) {
		$(".articlejs0").hide();
		$("#firstRecipe").show();
	    });

	    $("#like_it").on('click', function(event) {
		if ($(this).attr('src') == "images/like_it.png") {
		    $("#like_it").attr("src", "images/like_it2.png");
		} else {
		    $("#like_it").attr("src", "images/like_it.png");
		}
	    });
	    $("#save_it").on('click', function(event) {
		if ($(this).attr('src') == "images/save_it.png") {
		    $("#save_it").attr("src", "images/save_it2.png");
		} else {
		    $("#save_it").attr("src", "images/save_it.png");
		}
	    });
	    $("#back5").on('click', function(event) {
		$("#firstRecipe").hide();
		$(".articlejs0").show();
		;
	    });
	});
    });
    //alert(max_artcile);
    $(".appetizer2").on('click', function(event) {

	$("#options").html('&nbsp;');
	$("#categorie").hide();
	catego($(this).attr('id'));
    });

    $(".desert2").on('click', function(event) {

	$("#options").html('&nbsp;');
	$("#categorie").hide();
	catego($(this).attr('id'));
    });

    $(".mainCourse2").on('click', function(event) {

	$("#options").html('&nbsp;');
	$("#categorie").hide();
	catego($(this).attr('id'));
    });

    $(".coldDrinks2").on('click', function(event) {

	$("#options").html('&nbsp;');
	$("#categorie").hide();
	catego($(this).attr('id'));
    });

    function catego(id_cat) {
	$.getJSON("includes/Data.json", function(data) {
	    var i = 0;
	    $.each(data, function(key, val) {
		$.each(val, function(key, val) {
		    if (id_cat == val.categorie) {
			categorie = val.categorie;
			name = val.name;
			howTo = val.howTo;
			bgImg = val.bgImg;
			img = val.img;
			tempCategorie = val.tempCategorie;
			ingredients = val.ingredients;
			tempName = val.tempName;
			var id_article = i;


			$("#options").append(
				"<article style='background-image: url(" + bgImg + ");' id='" + id_article + "' class='articlejs" + id_article + "'>" + "<img id='categorieLogo' src='" +
				img + "'><h1>" + tempCategorie + "</h1> <h3>" + tempName + "</h3>" +
				"<img id='MenuLogo' class='MenuLogo_click' src='" + menuLogo + "'>" + "<img id='dots' src='" +
				dots + "'>" +
				"<p id='recepieName'>" +
				name + "</p>" + "</article>"
				);
			if (id_article > 0) {
			    $(".articlejs" + id_article).hide();
			}
			i++;
		    }
		});

	    });
	    $("#options").on("swipeleft", function(event) {
		var next = (parseInt($(event.target)[0].id) + 1);

		if (next != i) {
		    $(event.target).hide();
		    $(".articlejs" + next).show();
		}
	    });
	    $("#options").on("swiperight", function(event) {
		var next = (parseInt($(event.target)[0].id) - 1);
		if (parseInt($(event.target)[0].id) > 0) {
		    $(event.target).hide();
		    $(".articlejs" + next).show();
		}
	    });

	    $(".MenuLogo_click").on('click', function(event) {
		$("#firstRecipe").hide();
		var article_visible = 0;
		$(".options article:visible").each(function() {
		    article_visible = $(this).attr("id");
		});
		$(".articlejs" + article_visible).hide();
		$("#menuPage").show();

	    });

	    $("#menuCategories3").on('click', function(event) {
		$("#menuPage").hide();
		$("#categorie").show();
	    });

	    $("#menuSaved3").on('click', function(event) {
		$("#menuPage").hide();
		$("#saved").show();
	    });

	    $("#menuBlack3").on('click', function(event) {
		$("#menuPage").hide();
		$("#blackList").show();
	    });

	    $("#back3").on('click', function(event) {
		$("#menuPage").hide();
		$(".articlejs0").show();
	    });
	    $("#back2").on('click', function(event) {
		$("#saved").hide();
		$("#menuPage").show();
	    });
	    $("#back").on('click', function(event) {
		$("#blackList").hide();
		$("#menuPage").show();
	    });
	    $("#recepieName").on('click', function(event) {
		$(".articlejs0").hide();
		$("#firstRecipe").show();
	    });

	    $("#like_it").on('click', function(event) {
		if ($(this).attr('src') == "images/like_it.png") {
		    $("#like_it").attr("src", "images/like_it2.png");
		} else {
		    $("#like_it").attr("src", "images/like_it.png");
		}
	    });
	    $("#save_it").on('click', function(event) {
		if ($(this).attr('src') == "images/save_it.png") {
		    $("#save_it").attr("src", "images/save_it2.png");
		} else {
		    $("#save_it").attr("src", "images/save_it.png");
		}
	    });
	    $("#back5").on('click', function(event) {
		$("#firstRecipe").hide();
		$(".articlejs0").show();
	    });


	});
    }


});