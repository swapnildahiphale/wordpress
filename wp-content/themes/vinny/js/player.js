jQuery(document).ready(function(){var e;var t=jQuery(".navbar .nav");if(jQuery(window).width()<768){jQuery("header").addClass("innerHeader");jQuery(".philanthropistWrapper header").addClass("fnInnerHeader");var n=t.outerHeight()+70}else{jQuery("header").removeClass("innerHeader");jQuery(".philanthropistWrapper header").removeClass("fnInnerHeader");var n=t.outerHeight()-16}menuItems=t.find("a").not(".donateLink,.vinnyOrgLink");scrollItems=menuItems.map(function(){var e=jQuery(jQuery(this).attr("href"));if(e.length){return e}});menuItems.click(function(e){var t=jQuery(this).attr("href"),r=t==="#"?0:jQuery(t).offset().top-n+1;jQuery("html, body").stop().animate({scrollTop:r},500);e.preventDefault()});jQuery(window).scroll(function(){var t=jQuery(this).scrollTop()+n;var r=scrollItems.map(function(){if(jQuery(this).offset().top<t)return this});r=r[r.length-1];var i=r&&r.length?r[0].id:"";if(e!==i){e=i;menuItems.parent().removeClass("active").end().filter("[href=#"+i+"]").parent().addClass("active")}if(jQuery("#playerNavbar .nav .active").length!=0){jQuery("header").addClass("innerHeader");jQuery(".topBarWrapper").slideUp();jQuery("#playerFaceToggle, .ipadLeftVinny").fadeIn()}else if(jQuery("#playerNavbar .nav .active").length==0){jQuery(".topBarWrapper").slideDown();jQuery("header").removeClass("innerHeader");jQuery("#playerFaceToggle, .ipadLeftVinny").fadeOut()}if(jQuery("#philanthropistNavbar .nav .active").length!=0){jQuery("header").addClass("fnInnerHeader");jQuery("#foundationFaceToggle, .ipadRightVinny").fadeIn()}else if(jQuery("#philanthropistNavbar .nav .active").length==0){jQuery("header").removeClass("fnInnerHeader");jQuery("#foundationFaceToggle, .ipadRightVinny").fadeOut()}})})