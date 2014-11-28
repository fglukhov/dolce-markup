var urlPath = "/feedback/send/";

$(window).resize(function() {
  $("body").css("width","");
  pupMakeup();
  
});

$(window).load(function() {
  $("body").css("width",$("body").width()-1).css("width",$("body").width()+1);
});

$(window).scroll(function() {

  if ($(window).scrollTop() > 46) {
    $(".main-menu-wrapper").addClass("menu-fixed");
    $(".header").css({
      marginTop: 46
    });
  } else {
    $(".main-menu-wrapper").removeClass("menu-fixed");
    $(".header").css({
      marginTop: 0
    });
  }

  if ($(".fixed-nav-placeholder").length) {
    if ($(".main-col-r").outerHeight(true) > $(".sidebar-l").outerHeight(true)) {
      if ($(window).scrollTop() > parseInt($(".fixed-nav-placeholder").offset().top - 40)) {
        $(".fixed-nav-wrapper").addClass("nav-fixed").css({
          position: "fixed",
          top: 40
        });
        if ($(".fixed-nav-wrapper").offset().top >= $(".footer").offset().top - $(".fixed-nav-wrapper").outerHeight(true) - 50) {
          $(".fixed-nav-wrapper").addClass("nav-abs").removeClass("nav-fixed").css({
            position: "absolute",
            top: $(".main-col-r").outerHeight(true) - $(".fixed-nav-wrapper").outerHeight(true)
          });
        } 

        if ($(".fixed-nav-wrapper").hasClass("nav-abs")) {
          
          if ($(window).scrollTop() < $(".nav-abs").offset().top - 40) {
            $(".fixed-nav-wrapper").removeClass("nav-abs").addClass("nav-fixed").css({
              position: "fixed",
              top: 40
            });
          }
        }
      } else {
        $(".fixed-nav-wrapper").removeClass("nav-fixed").css({
          position: "relative",
          top: "auto"
        });
      }
    } else {
      $(".fixed-nav-wrapper").removeClass("nav-fixed").css({
        position: "relative",
        top: "auto"
      });
    }
  }
});

$(document).ready(function () {

	// Запуск верхнего слайдера
	if ($(".top-slider").length) {
		$(".top-slider").topSlider();
	}

	// Наши преимущества, попапы

	$(".pros-item .descr, .pros-item .pic").click(function() {
		var tooltip = $(this).parents(".pros-item").find(".pros-tooltip");
  		if($(tooltip).find('.tooltip-content').text()=='') return true;
		$(".pros-item .pros-tooltip").hide();
		$(".pros-item-act").removeClass("pros-item-act");

		tooltip.fadeIn(200);

		$(this).parents(".pros-item").addClass("pros-item-act")

	});

	$(".pros-tooltip .close").click(function() {
		$(this).parents(".pros-tooltip").fadeOut(150);
		$(this).parents(".pros-item").removeClass("pros-item-act");
	});

	$(document).mouseup(function (e) {
    var container1 = $(".pros-tooltip");
    var container2 = $(".pros-item .descr, .pros-item .pic");

    if (!container1.is(e.target) && !container2.is(e.target) // if the target of the click isn't the container...
        && container1.has(e.target).length === 0 && container2.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container1.fadeOut(150);
				$(".pros-item-act").removeClass("pros-item-act");
    }
  });

	// Наши преимущества, попапы END

	// Наши услуги, попапы

	$(".services-item .descr, .services-item .pic").click(function() {
		var tooltip = $(this).parents(".services-item").find(".pros-tooltip");
  		if($(tooltip).find('.tooltip-content').text()=='') return true;
		$(".services-item .pros-tooltip").hide();
		$(".services-item-act").removeClass("services-item-act");

		tooltip.fadeIn(200);

		$(this).parents(".services-item").addClass("services-item-act")

	});

	$(".pros-tooltip .close").click(function() {
		$(this).parents(".pros-tooltip").fadeOut(150);
		$(this).parents(".services-item").removeClass("services-item-act");
	});

	$(document).mouseup(function (e) {
    var container1 = $(".pros-tooltip");
    var container2 = $(".services-item .descr, .services-item .pic");

    if (!container1.is(e.target) && !container2.is(e.target) // if the target of the click isn't the container...
        && container1.has(e.target).length === 0 && container2.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container1.fadeOut(150);
				$(".services-item-act").removeClass("services-item-act");
    }
  });

	// Наши услуги, попапы END

	// Бюджет, попапы

	$(".budget-item .descr, .budget-item .pic").click(function() {
		var tooltip = $(this).parents(".budget-item").find(".budget-tooltip");
  		if($(tooltip).find('.tooltip-content').text()=='') return true;
		$(".budget-item .budget-tooltip").hide();
		$(".budget-item-act").removeClass("budget-item-act");

		tooltip.fadeIn(200);

		$(this).parents(".budget-item").addClass("budget-item-act")

	});

	$(".budget-tooltip .close").click(function() {
		$(this).parents(".budget-tooltip").fadeOut(150);
		$(this).parents(".budget-item").removeClass("budget-item-act");
	});

	$(document).mouseup(function (e) {
    var container1 = $(".budget-tooltip");
    var container2 = $(".budget-item .descr, .budget-item .pic");

    if (!container1.is(e.target) && !container2.is(e.target) // if the target of the click isn't the container...
        && container1.has(e.target).length === 0 && container2.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container1.fadeOut(150);
				$(".budget-item-act").removeClass("budget-item-act");
    }
  });

	// Бюджет, попапы END
  $(".we-do-item img").hover(function() {
    $(this).parents(".we-do-item").find(".tooltip").fadeIn(150)
  },function() {
    $(this).parents(".we-do-item").find(".tooltip").hide()
  })

  $(".main-menu a").click(function() {
    
    $("html,body").animate({
      scrollTop: $("a[name='"+$(this).attr("href").replace("#","")+"']").offset().top - 20
    },1000);
    
    return false;
  });
	
	$(".anchor-link").click(function() {
    
    $("html,body").animate({
      scrollTop: $("a[name='"+$(this).attr("href").replace("#","")+"']").offset().top - 20
    },1000);
    
    return false;
  });

  if ($(".contacts-slider").length) {
    $(".contacts-slider").each(function() {
      $(this).children(".carousel-feature").each(function() {
        $(this).children("img").wrap("<div class='pic' />")
      });
      $(this).featureCarousel({
        largeFeatureWidth:544,
        largeFeatureHeight:444,
        smallFeatureWidth:436,
        smallFeatureHeight:326,
        smallFeatureOffset:28,
        sidePadding:0,
        autoPlay:0,
        leftButtonTag:".contacts-slider-wrapper .prev",
        rightButtonTag:".contacts-slider-wrapper .next",
        movedToCenter: function($feature) {
          $(".contacts-slider .carousel-feature").removeClass("act");
          $feature.addClass("act");
          $feature.find(".descr").fadeIn(250);
          $feature.find(".slider-contacts").show();
          $feature.find(".controlDiv").show();
        },
        leavingCenter: function($feature) {
          $feature.find(".descr").hide();
          $feature.find(".slider-contacts").hide();
          $feature.find(".v-cont").html("");
        }
      });
    });
  }


  mainAccordion();
  
  if ($(".partners-carousel .jcarousel").length) {
    $(".partners-carousel .jcarousel").jcarousel({
      scroll:4,
      wrap:'circular'
    });
  }

  if ($(".form-date").length) {
    $(".form-date").datepicker({
      dateFormat: "d M yy",
      onSelect: function() {
        //$(this).parents(".form-item").find(".placeholder").hide();
        $(this).focus().removeClass("error");
        $(this).blur();
      },
      firstDay: 1
    })
  }
  
  $('.order-form-2 .calendar-button').click(function () {
    $('.order-form-2 .form-date').datepicker("show");
  });

  if ($("input:checkbox").length) {
    $("input:checkbox").iCheck()
  }

  $(".common-form select").customSelect();

  $(".main-slider").mainSlider();

  $(".fancybox").fancybox({
    padding: 0,
    helpers: {
      overlay: {
        locked: false
      }
    }
  });

  $(".form-text").each(function() {
    if ($(this).val()) {
      $(this).prev(".placeholder").hide();
    }
  });

  $(".form-phone").mask("+7 (999) 999-99-99");

  validateForms();
  
	$("#orderForm1").submit(function() {
		if ($("#orderForm1").valid()) {
			//$(".loader").show();
			var form = $("#orderForm1");
			var data = $(form).serialize();
			$.ajax({
				type: "POST",
				url: urlPath,
				data: data
			}).done(function() {
				formSuccess(form,"successPopup1")
			});
			return false;
		}
	});
  
	$("#orderForm2").submit(function() {
		if ($("#orderForm2").valid()) {
			//$(".loader").show();
			var form = $("#orderForm2");
			var data = $(form).serialize();
			$.ajax({
				type: "POST",
				url: urlPath,
				data:data
			}).done(function() {
            	formSuccess(form,"successPopup1")
			});
			return false;
		}
	});
  
	$("#orderForm3").submit(function() {
		if ($("#orderForm3").valid()) {
			//$(".loader").show();
			var form = $("#orderForm3");
			var data = $(form).serialize();
			$.ajax({
				type: "POST",
				url: urlPath,
				data: data
			}).done(function() {
				formSuccess(form,"successPopup1")
			});
			return false;
		}
	});
  
	$("#callbackForm").submit(function() {
		if ($("#callbackForm").valid()) {
			//$(".loader").show();
			var form = $("#callbackForm");
			var data = $(form).serialize();
			$.ajax({
				type: "POST",
				url: urlPath,
				data: data
			}).done(function() {
				formSuccess(form,"successPopup2")
			});
			return false;
		}
	});

  makeup();
});

function makeup() {

  $("input.button").each(function () {
    if ($(this)[0].tagName == "INPUT" && !$(this).next("div.form-submit").length) {
      var divBtn = $("<div></div>");
      var submit = $(this);
      divBtn.attr("class",$(this).attr("class")).attr("id",$(this).attr("id")).html("<span>" + $(this).val() + "</span>");
      $(this).after(divBtn);
      $(this).hide();
      divBtn.on("click",function () {
        submit.click();
      });
    }
    
  });
  
  $("div.button,a.button").each(function() {
    $(this).html("<span class='btn-cont'><span class='b-l'><span class='b-r'>"+$(this).html()+"</span></span></span>");
  });
  
 $("input:text, input:password, textarea").each(function() {
    $(this).addClass("initial");
    
    if ($(this).prop("tagName") == "INPUT" || $(this).prop("tagName") == "TEXTAREA") {
      // if (!$(this).parents(".input-wrapper").length) $(this).wrap("<div class='input-wrapper'></div>");
      if ($(this).hasClass("form-phone") || $(this).hasClass("form-date")) {
        $(this).focus(function() {
          $(this).removeClass("initial");
          $(this).parents(".form-item").find(".placeholder").hide();
        });
      } else {
        $(this).focus(function() {
          $(this).parents(".form-item").find(".placeholder").addClass("placeholder-initial");
        });
        $(this).keydown(function() {
          $(this).removeClass("initial");
          $(this).parents(".form-item").find(".placeholder").hide();
        });
      }
      $(this).blur(function() {
        $(this).prev().prev(".placeholder").hide();
        $(this).parents(".form-item").find(".placeholder").removeClass("placeholder-initial");
        if (!$(this).val()) {
          $(this).addClass("initial");
          $(this).parents(".form-item").find(".placeholder").show();
        }
      });
    } else {
      $(this).focus(function() {
        $(this).removeClass("initial");
        $(this).parents(".form-item").find(".placeholder").hide();
      });
      $(this).blur(function() {
        if (!$(this).val()) {
          $(this).addClass("initial");
          $(this).parents(".form-item").find(".placeholder").show();
        }
      });
    }
      
    $(this).parents(".form-item").find(".placeholder").click(function() {
      $(this).focus();
    });
    
  });
  
  if ($(".page-text img").length) {
    $('.page-text img').filter(function() {
        var $th = $(this);
        return !$th.prev('img').length && !$(this).parents(".slider").length && ($th.parent().hasClass("page-text") || $th.parent("p").parent().hasClass("page-text") || $th.parent("div").parent().hasClass("page-text")) && $(this).next('img').length;
    }).each(function() {
        
      var $th = $(this);
      if (!$th.parents(".slider").length) {
        if ($th.parents("p").length || $th.parents("div").length) {
          $th.parent().find("img").wrapAll('<div class="slider">');
        }
        if (!$(this).prev().length) {
          $(this).before("<div />")
        }
        $th.prev().nextUntil(':not(img)').wrapAll('<div class="slider">');
        $th.parents(".slider").simpleSlider({
          width:530,
          showtitles: false
        });
      }
    });
    
    $('.page-text img').filter(function() {
        var $th = $(this);
        return !$th.prev('img').length && !$(this).parents(".slider").length && ($th.parent().hasClass("page-text") || $th.parent("p").parent().hasClass("page-text") || $th.parent("div").parent().hasClass("page-text")) && !$(this).next('img').length;
    }).each(function() {
      var $th = $(this);
      if (!$th.parents(".article-pic").length) {
        $th.wrap("<div class='article-pic' />");
        if ($th.attr("title")) $th.after("<div class='title'>"+$th.attr("title")+"</div>");
        $th.parents(".article-pic").css("width",$th.width());
      }
    });
    
  }
  
}

function validateForms() {
  
  $(".common-form form").each(function() {
    $(this).validate({
      focusInvalid: false,
      sendForm : false,
      errorPlacement: function(error, element) {
        // element.parents(".input-wrapper").addClass("input-wrapper-error");
        if (element.attr("errortext")) {
          error.html(element.attr("errortext"))
        }
        error.insertAfter(element).wrap("<div class='error-wrapper' />");
        element.prev(".placeholder").addClass("placeholder-error")
        if (element[0].tagName == "SELECT") {
          element.parents(".form-item").find(".param-selector").addClass("param-sel-error")
        }
        
        if (element.parents().hasClass("errors-bottom") || element.parents().hasClass("errors-top")) {
          element.parents(".form-item").find(".error-wrapper").css({
            left: - element.parents(".form-item").find(".error-wrapper").width()/2 + element.outerWidth()/2
          });
        }
      },
      unhighlight: function(element, errorClass, validClass) {
        // $(element).parents(".input-wrapper").removeClass("input-wrapper-error");
        $(element).removeClass(errorClass);
        $(element).next(".error-wrapper").remove();
        $(element).prev(".placeholder").removeClass("placeholder-error");
        if ($(element)[0].tagName == "SELECT") {
          $(element).parents(".form-item").find(".param-selector").removeClass("selector-error")
        }
      },
      invalidHandler: function(form, validatorcalc) {
          var errors = validatorcalc.numberOfInvalids();
          if (errors && validatorcalc.errorList[0].element.tagName == "INPUT") {                    
              validatorcalc.errorList[0].element.focus();
          }
      }
    });
    
    if ($(this).find(".form-email").length) {
      $(this).find(".form-email").rules('add', {
        email: true,
        messages: {
          required:  "Введите правильный адрес!"
        }
      });
    }
    
    if ($(this).find(".form-date").length) {
      $(this).find(".form-date").rules('add', {
        messages: {
          required:  "Выберите дату!"
        }
      });
    }
    
    if ($(this).find(".form-email").length && $(this).find(".form-phone").length) {
      var thisField = $(this).find(".form-phone");
      var relatedField = $(this).find(".form-email");
      thisField.rules('add', {
        required: function(element) {
          if (relatedField.val() == "") {
            return true;
          } else {
            return false;
          }
        }
      });
      var thisField2 = $(this).find(".form-email");
      var relatedField2 = $(this).find(".form-phone");
      thisField2.rules('add', {
        required: function(element) {
          if (relatedField2.val() == "") {
            return true;
          } else {
            return false;
          }
        }
      });
    }
    
    $(document).mouseup(function (e) {
      var container = $("form");

      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          $(".error-wrapper").remove();
      }
    });
    
  });  
    
}

function closePopup() {
  $(".tint").fadeTo(500,0,function() {
    $(this).remove();
  });
  $(".popup-act").removeClass("popup-act").fadeTo(300,0,function() {
    $(this).hide();
  });
}

function pupMakeup() {
  var popup = $(".popup-act");
  var pupTop = $(window).scrollTop() + ($(window).height() - popup.outerHeight(true))/2;
  if (pupTop < 20) pupTop = 20;
  $(".tint").css("height",$(window).height()).css("width",$("body").width());
  if (!popup.hasClass("price-popup")) {
    popup.css("top",pupTop).css("left",($(window).width()-popup.outerWidth(true))/2 - 20);
  } else {
    popup.css("margin-top",$(window).scrollTop() - popup.parent().offset().top - popup.parent().outerHeight(true) + ($(window).height()-popup.outerHeight(true))/2);
  }
  
}

function openPopup(pupId) {
  var popup = $("#"+pupId);
  $("body").append("<div class='tint' style='display:none;' />");
  popup.addClass("popup-act").fadeTo(500,1);
  
  $(".tint").fadeTo(300,1);
  pupMakeup();
  
  if (!popup.children(".popup-shadow").length) {
    popup.append("<div class='popup-shadow' />");
  } 
  
  jQuery(document).keydown(function(e){
    if (e == null) { // ie
      keycode = event.keyCode;
    } else { // mozilla
      keycode = e.which;
    }
    
    if(keycode == 27){ // escape, close box
      closePopup()
    }
    
  });
  
  $(".tint").on("click", function () {
    closePopup()
  });
  
  $(".popup .close, .popup .cancel").on("click", function () {
    closePopup()
  });
}

(function( jQuery ) {
  jQuery.fn.mainSlider = function() {
  
  
    var slider = $(this);
    var slides = slider.find(".slide");
    var sliderSize = slides.size();
    
    var lister = slider.find(".lister");
    
    lister.find(".item").eq(0).addClass("act");
    
    slides.hide();
    slides.eq(0).show().addClass("slide-act");
    
    var listerItems = lister.find(".item");
    
    lister.css("background-position",lister.find(".act").offset().left-2000+lister.find(".act").outerWidth()/2+"px"+" 0");
    
    //sliderMakeup();
    
    if (sliderSize > 1) {
    
      slider.find(".slides").after("<div class='next button-inact' />");
      slider.find(".slides").after("<div class='prev button-inact' />");
      slider.find(".slides").after("<div class='go-button' />");
      
      var prevBtn = slider.find(".prev");
      var nextBtn = slider.find(".next");
      var goBtn = slider.find(".go-button");
    
      listerItems.on("click",function () {
        if (!$(this).hasClass("act")) {
          if ($(this).prevAll().length > 0) {
            goBtn.fadeOut(150);
          } else {
            goBtn.fadeIn(150);
            prevBtn.addClass("button-inact")
            nextBtn.addClass("button-inact")
          }
          listerItems.removeClass("act");
          $(this).addClass("act");
          slides.fadeOut(500).removeClass("slide-act");
          slides.eq($(this).index()).fadeIn(500).addClass("slide-act");
          //sliderMakeup();
          lister.css("background-position",lister.find(".act").offset().left-2000+lister.find(".act").outerWidth()/2+"px"+" 0");
          
          sliderAnimate(slider.find(".slide-act").prevAll(".slide").length);
          
          if (!listerItems.filter(".act").next().length) {
            nextBtn.addClass("button-inact")
          } else {
            if ($(this).prevAll().length > 0) nextBtn.removeClass("button-inact")
          }
          
          if (!listerItems.filter(".act").prev().length) {
            prevBtn.addClass("button-inact")
          } else {
            prevBtn.removeClass("button-inact")
          }
          
        }
      });
      
      // listerItems.bind("mouseover",function () {
        // $(this).click();
      // });
      
      goBtn.on("click",function() {
        $(this).fadeOut(150);
        listerItems.eq(1).click();
      });
      
      slides.bind("click",function () {
        if (listerItems.filter(".act").next().length) {
          //listerItems.filter(".act").next().click();
        } else {
          //listerItems.eq(0).click();
        }
        
      });
      
      $(".go-button-alt").click(function() {
        listerItems.eq(1).click();
      })
      
      nextBtn.click(function() {
        curIndex = parseInt(slider.find(".slide-act").prevAll(".slide").length)
        if (curIndex < sliderSize-1) {
          curIndex++;
          lister.find(".item").eq(curIndex).click();
          //prevBtn.removeClass("button-inact")
        } else {
          //lister.find(".item").eq(0).click();
        }
        
      });
      
      prevBtn.click(function() {
        curIndex = parseInt(slider.find(".slide-act").prevAll(".slide").length)
        if (curIndex > 0) {
          curIndex--;
          lister.find(".item").eq(curIndex).click();
          //nextBtn.removeClass("button-inact")
        } else {
          //lister.find(".item").eq(slides.length-1).click();
        }
      });
      
    }
    
    //sliderAnimate(0);
    
  }
})( jQuery );


(function( $ ) {
  $.fn.customSelect = function() {
    var selects = $(this);
    selects.each(function () {
      var select = $(this);
      
      if (!$(this).next(".param-selector").length) {
        select.css("visibility","hidden").css("position","absolute").css("z-index","-1");
        select.after("<div class='param-selector' id='" + select.attr("id") + "-selector'>");
        var selector = select.next(".param-selector");
        
        if (select.is(":disabled")) {
          selector.addClass("selector-disabled")
        }
        
        
        selector.append("<div class='param-sel' />").append("<div class='dropdown' />");
        var dropdown = selector.find(".dropdown");
        // dropdown.append("<div class='top-border' />");
        var paramSel = selector.find(".param-sel");
        paramSel.addClass("initial");
        paramSel.append("<div class='arr' />");
        paramSel.append("<div class='sel-value' />");
        
        if (select.find("option[value=" + select.val() + "]").attr("flag")) {
          paramSel.find(".sel-value").html("<img src='" + select.find("option[value=" + select.val() + "]").attr("flag") + "' />" + select.find("option[value=" + select.val() + "]").html());
        } else {
          paramSel.find(".sel-value").html(select.find("option[value=" + select.val() + "]").html());
        }
        
        select.find("option").each(function () {
          if ($(this).attr("flag")) {
            var flag = "<img src=" + $(this).attr("flag") + " />";
          } else {
            flag = "";
          }
          if ($(this).val() != select.val()/* || select.attr("ttl")*/) {
            dropdown.append("<div val='" + $(this).attr("value") + "'>" + flag + $(this).html() + "</div>");
          } else {
            dropdown.append("<div style='display:none' val='" + $(this).attr("value") + "'>" + flag + $(this).html() + "</div>");
          }
        });
      
      
        paramSel.click(function() {
          if (!select.is(":disabled")) {
            if (dropdown.css("display") != "block") {
              $(".dropdown").fadeOut(150);
              $(".param-open").removeClass("param-open");
              dropdown.fadeIn(150);
              selector.addClass("param-open");
              var maxWidth = 0;
              
              // $(this).parents(".form-item").prevAll(".form-item").css("z-index","6000");
              // $(this).parents(".form-item").css("z-index","6001");
              // $(this).parents(".form-item").nextAll(".form-item").css("z-index","6000");
              
              dropdown.find("div").each(function () {
                if ($(this).width() >= maxWidth) {
                  maxWidth = $(this).width();
                }
                if (paramSel.width() >= maxWidth) {
                  maxWidth = paramSel.width() + 1;
                }
              });
              
              //paramSel.css("width", maxWidth + "px");
              // dropdown.find("div").css("width", maxWidth + "px");
              // dropdown.css("width", maxWidth);
              
              // ddOverflow = $("html").height() - (dropdown.offset().top + dropdown.height());
              // if (ddOverflow < 0) {
                // dropdown.css("margin-top", -30 - dropdown.height());
              // }
              
              //dropdown.css("top",paramSel.position().top + paramSel.height());
              
            } else {
              dropdown.fadeOut(150);
              selector.removeClass("param-open");
            }
          }
        });
        
        dropdown.find("div").click(function () {
          selector.removeClass("param-sel-error");
          paramSel.removeClass("initial");
          var div = $(this);
          paramSel.find(".sel-value").html($(this).html());
          if ($(this).attr("flag")) {
            paramSel.find(".sel-value").attr("flag",$(this).attr("flag"));
          }
          select.val($(this).attr("val")).change();
          if (select.hasClass("hide-ttl")) {
            //select.find("option[value='']").remove();
            dropdown.find("div[val='']").remove();
          }
          dropdown.fadeOut(150, function () {
            dropdown.find("div").show().removeClass("selected");
            div.addClass("selected");
            div.parents(".param-open").removeClass("param-open");
          });
          if ($(this).attr("val")) {
            selector.parents(".form-item").find(".error-wrapper").remove();
          }
        });
      
      }
    });
    
  };
})( jQuery );

jQuery.extend(jQuery.validator.messages, {
    required: "Заполните поле!",
    remote: "Please fix this field.",
    email: "Введите правильный e-mail",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

function mainAccordion() {
  $('.accordion > li').hover(
      function () {
          var $this = $(this);
          $this.addClass("act").stop().animate({'width':'613px'},500);
          $(".accordion-item").not(".act").stop().animate({'width':'118px'},500);
          $('.bgDescription',$this).stop(true,true).slideDown(500);
          $('.description',$this).stop(true,true).fadeIn();
          $(".mask",$this).stop(true,true).fadeOut();
      },
      function () {
          var $this = $(this);
          $this.removeClass("act").stop().animate({'width':'242px'},500);
          $(".accordion-item").not(".act").stop().animate({'width':'242px'},500);
          $('.description',$this).stop(true,true).fadeOut(500);
          $('.bgDescription',$this).stop(true,true).slideUp(700);
          $(".mask",$this).stop(true,true).fadeIn();
      }
  );
  
  $(".accordion").hover(function() {
    var $this = $(this);
    $('.heading',$this).stop(true,true).fadeOut();
  },function() {
    var $this = $(this);
    $('.heading',$this).stop(true,true).fadeIn();
  });
  
}

function formSuccess(obForm,successPopupId) {
  if(obForm.length){
	obForm.find("input[type=text]").each(function(){
		$(this).val("");
		$(this).siblings("label").show();
	});
  }
  $(".popup").hide();
  $(".tint").remove();
  openPopup(successPopupId);
  pupMakeup();
  
  var t = setTimeout(function() {
    closePopup(successPopupId);
  },5000)
  
  
}

(function( jQuery ) {
  jQuery.fn.topSlider = function() {
  
  
    var slider = $(this);
    var slides = slider.find(".slide");
    var sliderSize = slides.size();
    
    slides.hide();
    slides.eq(0).show().addClass("slide-act");
    
    slides.wrapAll("<div class='slides' />");
		
		var descr = slider.find(".slide-act .descr");
		
		descr.css({
			marginTop: -descr.height()/2 + 60
		})
    
    //sliderMakeup();
    
    if (sliderSize > 1) {
      
      slider.append("<div class='next' />");
      slider.append("<div class='prev' />");
      
      var prevBtn = slider.find(".prev");
      var nextBtn = slider.find(".next");
      
      nextBtn.click(function() {
        curIndex = parseInt(slider.find(".slide-act").prevAll(".slide").length)
        slides.fadeOut(500).removeClass("slide-act");
        if (curIndex < sliderSize-1) {
          curIndex++;
        } else {
          curIndex = 0;
        }
        slides.eq(curIndex).fadeIn(500).addClass("slide-act");
				var descr = slider.find(".slide-act .descr");
		
				descr.css({
					marginTop: -descr.height()/2 + 60
				})
      });
      
      prevBtn.click(function() {
        curIndex = parseInt(slider.find(".slide-act").prevAll(".slide").length)
        slides.fadeOut(500).removeClass("slide-act");
        if (curIndex > 0) {
          curIndex--;
        } else {
          curIndex = slides.length-1;
        }
        slides.eq(curIndex).fadeIn(500).addClass("slide-act");
				var descr = slider.find(".slide-act .descr");
		
				descr.css({
					marginTop: -descr.height()/2 + 60
				})
      });
			
			slides.bind("click",function () {
        nextBtn.click();
      });
			
			timer = setInterval( function() {
				nextBtn.click()
			}, 5000);
			
			slider.hover(function(ev){
				clearInterval(timer);
			}, function(ev){
				timer = setInterval( function() {
					nextBtn.click()
				}, 5000);
			});
			
    }
    
  }
})( jQuery );
