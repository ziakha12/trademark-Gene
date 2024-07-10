$(document).ready(function() {
    
       
   //setTimeout(function(){
   //     $('#popup_box').fancybox().trigger('click');       
   //},1000);
   
    
    $('.tfaq-section4 .panel.panel-default h4.panel-title a').click(function(){
        $(this).parents(".tfaq-section4 .panel.panel-default").toggleClass("mopen");
    }); 

   
 if ($.cookie('popup_load') != '1') {

       count = 0; limit = 1;

var refreshId = setInterval( function() {
    if(count < limit) {
jQuery("#ouibounce-modal").css('display', 'block');
           count++;
    }
    else {
        clearInterval(refreshId);
    }
    }, 20000);


    $.cookie('popup_load', '1', { expires: 60});
     }


    
var key = '5XpThOAEkfgOvEJ';
      var currentIP = $("meta[name=ip2loc]").attr('content');

      $.ajax({
      method: 'get',
      url: 'https://pro.ip-api.com/json/' + currentIP,
      data: {key: key},
      success: function (data) {
      if (data) {
      $('input[name=ip2loc_ip]').val(data.query);
      $('input[name=ip2loc_isp]').val(data.isp);
      $('input[name=ip2loc_org]').val(data.org);
      $('input[name=ip2loc_country]').val(data.country);
      $('input[name=ip2loc_region]').val(data.regionName);
      $('input[name=ip2loc_city]').val(data.city);
      }
      }
      });


$(".data-pkg").click(function() {
    $(this).addClass("pkg-selected");
	var dataterm = $(this).attr("data-term");
	var datapkg = $(this).attr("data-pkg");
	var dataprice = $(this).attr("data-price");
	
	$(".pkg-selected-actv").css("visibility","visible");
	
	
	$(".pkg-selected-actv span").text(datapkg + " $" + dataprice);
	
	
	$(".data_pkg_title").val(datapkg);
    $(".data_pkg_price").val(dataprice);

	$(".data_term").val(dataterm);
	$('form.step5_validate').submit();

});



$(".choose_pkg_dash").click(function() {
	var dataterm = $(this).attr("data-term");
	var datapkg_name = $(this).attr("data-pkg");
	var dataprice = $(this).attr("data-price");
	
	
	
	$(".choose_pkg_name_dahs").text(datapkg_name);
	



	$(".choose_pkg_prices_dahs").text(" $" + dataprice);
	
	
});




$(".uspto_data").click(function() {
	
	var uspto_data = $(this).attr("data-uspto");
	//alert(datapkg);
	$(".uspto_fee").val(uspto_data);

});




$(".uspto_data2").click(function() {
	
	var uspto_data_price = $(this).attr("data-uspto");
	var uspto_data_name = $(this).val();
 
	$(".uspto_fee_price").text(uspto_data_price);
	$(".uspto_fee_data_name").text(uspto_data_name);
	
});


$("#llp-tab1").click(function() {
    $("#company-faqs2").hide();
    $("#company-faqs3").hide();
    $("#company-faqs4").hide();
    $("#company-faqs1").fadeIn(200);
});

$("#llp-tab2").click(function() {
    $("#company-faqs1").hide();
    $("#company-faqs3").hide();
    $("#company-faqs4").hide();
    $("#company-faqs2").fadeIn(200);
});

$("#llp-tab3").click(function() {
    $("#company-faqs1").hide();
    $("#company-faqs2").hide();
    $("#company-faqs4").hide();
    $("#company-faqs3").fadeIn(200);
});

$("#llp-tab4").click(function() {
    $("#company-faqs1").hide();
    $("#company-faqs2").hide();
    $("#company-faqs3").hide();
    $("#company-faqs4").fadeIn(200);
});




 $('.hrs-24 input[type="checkbox"]').click(function(){
	
            if($(".hrs-24 input[type='checkbox']").prop("checked") == true){
	           
                var hrs_24 = $(this).attr("data-hrs");
                $(".hrs_24_amount").val(hrs_24);
            }
            else if($(".hrs-24 input[type='checkbox']").prop("checked") == false){
             var hrs_24_none = "";
                $(".hrs_24_amount").val(hrs_24_none);
               
            }
        });
        
        
        
        



    jQuery('.testimonial').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        margin:10,
        autoplay: true,
        autoPlaySpeed: 5000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:3
            },
            360:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
    jQuery('.company').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        margin:10,
        autoplay: true,
        autoPlaySpeed: 5000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:4
            },
            360:{
                items:1
            },
            1000:{
                items:4
            }
        }
    });
    //responsive menu
    $(".menu-bottom").on("click", function() {
        $("html").toggleClass("menu-open")
    });
    $('.various').click(function() {
        var leadprice = $(this).attr('name');
        
        $(".popupform .leadprice").val(leadprice);
		var zz = $(".popupform .pop_price").text("$" + leadprice);
        
        

    });
    $(window).on("load",function(){
    $(".content").mCustomScrollbar({
        autoHideScrollbar:true,
    });
});



	 
	 
	 
	    $(".scroll-dwn-cont").click(function() {
        $('html, body').animate({
            scrollTop: $("#pkg-cont").offset().top
        }, 1500);
    });
    
    
       $("#scroll-down, .scroll-down").click(function() {
        $('html, body').animate({
            scrollTop: $("#pack").offset().top
        }, 1500);
    });

// TRADEMARK

$('.tdname_check').click(function () {
    if ($(this).attr("value") == "tdname") {
        $(".tdname_fld").show();
        $(".tdlogo_fld").hide();
        $(".tdslogan_fld").hide();
                $(".variety_field").hide();
        $(".logo_name").hide();
        $(".vc_color").hide();
        $(".variety_field_label").hide();
    }  
});



$('.tdslogan_check').click(function () {
    if ($(this).attr("value") == "tdslogan") {
        $(".tdslogan_fld").show();
        $(".tdname_fld").hide();
        $(".tdlogo_fld").hide();
        $(".variety_field").hide();
        $(".logo_name").hide();
        $(".vc_color").hide();
        $(".variety_field_label").hide();
    }  
});
$('.v_color_yes').click(function () {
    if ($(this).attr("value") == "v_color_yes") {
        $(".logo_name").show();
        $(".variety_field").hide(); 
    }  
});

$('.v_color_no').click(function () {
    if ($(this).attr("value") == "v_color_no") {
        $(".logo_name").show();
        $(".variety_field").show(); 
    }  
});



$('.tdlogo_check').click(function () {
    if ($(this).attr("value") == "tdlogo") {
        $(".tdlogo_fld").show();
        // $(".variety_field").show();
        $(".logo_name").show();
        $(".vc_color").show();
        $(".tdslogan_fld").hide();
        $(".tdname_fld").hide();
        $(".variety_field_label").show();
    } 
});
$('.markyes').click(function () {
    if ($(this).attr("value") == "yes") {
        $(".name_mark").show(); 
        $(".markchecked_fld2").show(); 
        $(".markchecked_fld2_opt").show(); 
 
    } 
}); 
$('.markno').click(function () {
    if ($(this).attr("value") == "no") {
        $(".name_mark").hide(); 
        $(".markchecked_fld2").hide(); 
        $(".markchecked_fld2_opt").hide();  
         $(".markchecked_fld2_opt2").hide();
    } 
});
$('.markyes2').click(function () {
    if ($(this).attr("value") == "yes") {
        $(".markchecked_fld").show(); 
        $(".markchecked_fld2").hide();
        $(".markchecked_fld2_opt").hide();
         
    } 
});
$('.markyes4').click(function () {
    if ($(this).attr("value") == "yes") {
        $(".eng-translation").show();  
         
    } 
});
 
 $('.markno4').click(function () {
    if ($(this).attr("value") == "no") {
        $(".eng-translation").hide();  
        $(".eng-translation input").attr("required", false); 
         
    }else{
        $(".eng-translation").show();  
        $(".eng-translation input").attr("required", true); 
    } 
});
$('.markno2').click(function () {
    if ($(this).attr("value") == "no") {
        $(".markchecked_fld").hide();  
        // $(".name_mark").hide();  
        $(".markchecked_fld2_opt").show(); 
        $(".markchecked_fld2").show();
    } 
});

$('.markyes3').click(function () {
    if ($(this).attr("value") == "yes") {
        // $(".phide").show();  
        $(".markchecked_fld2_name_mark").show();  
    } 
});
$('.markyes5').click(function () {
    if ($(this).attr("value") == "yes") {
        $(".first_use_any").show();    
        $("#first_use_anywhere").show();    
        $("#first_use_anywhere2").show();    
        $(".first_use_com").show();   
                $(".phide2").hide();  

    } 
});

$('.markno3').click(function () {
    if ($(this).attr("value") == "no") {
        // $(".phide").hide();   
        $(".markchecked_fld2_name_mark").hide(); 
    } 
});


$('.markno4').click(function () {
    if ($(this).attr("value") == "no") {
        $(".eng-translation").hide();    
        $(".eng-translation input").attr("required", false); 
         
    }else{
        $(".eng-translation").show();  
        $(".eng-translation input").attr("required", true); 
    } 
});
$('.markno5').click(function () {
    if ($(this).attr("value") == "no") {
        $(".first_use_any").hide();    
        $("#first_use_anywhere").hide();    
        $("#first_use_anywhere2").hide();    
        $(".first_use_com").hide();    
        $(".phide2").show();    
    } 
});
$('.organization').click(function () {
    console.log("Org")
    if ($(this).attr("value") == "organization") {
        $(".ind_own_fld").hide();    
        $(".org_own_fld").show();    
        $(".org_own_fld input,.org_own_fld select").attr("required", true); 
        $(".ind_own_fld input,.ind_own_fld select").attr("required", false); 

    }
    var organizations = $('input[name="own_formation"]').val();
    if(organizations == 'non us based'){
        $('.st_formation').hide();
        $('.ct_formation').show();
        $(".ct_formation select").attr("required", true); 
        $(".st_formation select").attr("required", false); 
        
    }else if(organizations == 'us based'){
        $('.ct_formation').hide();
        $('.st_formation').show();
        $(".ct_formation select").attr("required", false); 
        $(".st_formation select").attr("required", true); 
    }
});
$('.organizationz').click(function () {
    console.log("Org")
    
    if($(this).attr("value") == 'non us based'){
        $('.st_formation').hide();
        $('.ct_formation').show();
        $(".ct_formation select").attr("required", true); 
        $(".st_formation select").attr("required", false); 
        
    }else if($(this).attr("value") == 'us based'){
        $('.ct_formation').hide();
        $(".ct_formation select").attr("required", false); 
        $(".st_formation select").attr("required", true); 
        $('.st_formation').show();
    }
});

jQuery(document).on('click','.btn-normal.data-pkg',function(){
    var price = jQuery(this).attr('data-price');
    var pkg = jQuery(this).attr('data-pkg');
    jQuery('input[name="data_pkg_title"]').val(pkg);
    jQuery('input[name="data_pkg_price"]').val(price);
    // setTimeout(function(){ 
    //     $('form.step5_validate').submit();
    // }, 400)
})

$(document).on('click','.PseudonymYes',function(){
    if($(this).attr("value") == 'Yes'){
        $('.Pseudonym_Name_fld').css('display','block');
        $(".Pseudonym_Name_fld input").attr("required", true); 
    }else{
        $('.Pseudonym_Name_fld').css('display','none');
        $(".Pseudonym_Name_fld input").attr("required", false); 
    }
})


$('.individual').click(function () {
    if ($(this).attr("value") == "individual") {
        $(".ind_own_fld").show();    
        $(".org_own_fld").hide();    
        $(".org_own_fld input,.org_own_fld select").attr("required", false); 
        $(".ind_own_fld input,.ind_own_fld select").attr("required", true); 

    } 
});


$('.form-chk-ind-org input').on('change', function() {
    console.log('checked');
    if (this.checked) {
        console.log($(this).val());
        let checkboxVal = $(this).val();

        // if (checkboxVal === 'yes') {
        //     $('.contact-answer-no').hide();
        //     $('.contact-answer-yes').fadeIn();
        // } else {
        //     $('.contact-answer-yes').hide();
        //     $('.contact-answer-no').fadeIn();
        // }
    }
    
    
});


$(document).on('click','.radio-good',function () {
    if ($(this).attr("value") == "goods") {
        // $(".phide").hide();   
        // $(".markchecked_fld2_name_mark").hide(); 
        
        var getClass= $(this).attr('rel');
        
        $(".goods-ser-text."+getClass).html('Goods');
        $(".isl-goods."+getClass).fadeIn(); 
        $(".isl-services."+getClass).hide(); 
    } 
});
$(document).on('click','.radio-services',function () {
    if ($(this).attr("value") == "services") {
        // $(".phide").hide();   
        // $(".markchecked_fld2_name_mark").hide(); 
        var getClass= $(this).attr('rel');
        
        $(".goods-ser-text."+getClass).html('Services');
        $(".isl-services."+getClass).fadeIn(); 
        $(".isl-goods."+getClass).hide(); 
    } 
});


// CSR

$('.csr_name').click(function () {
    if ($(this).attr("value") == "csr_name") {
        $(".csr_name_fld").show();
        $(".csr_slogan_fld").hide();
        $(".csr_logo_fld").hide();
    }  
});

$('.csr_slogan').click(function () {
    if ($(this).attr("value") == "csr_slogan") {
        $(".csr_name_fld").hide();
        $(".csr_slogan_fld").show();
        $(".csr_logo_fld").hide();
    }  
});


$('.csr_logo').click(function () {
    if ($(this).attr("value") == "csr_logo") {
        $(".csr_name_fld").hide();
        $(".csr_slogan_fld").hide();
        $(".csr_logo_fld").show();
    }  
});
$('.nopublish').click(function () {
    if ($(this).attr("value") == "nopublish") {
        $(".publication_month").hide();
        $(".publication_country").hide();
        $(".p_elec").hide();
        $(".p_check").hide(); 
    }  
});

$( ".nopublish" ).click(function() {
  $( "div.failure" ).fadeIn( 300 );

});

  $(".alert-box-close").click(function() {
		
	  $(".failure").fadeOut();
 }); 
	  
 $('.yespublish').click(function () {
    if ($(this).attr("value") == "yespublish") {
        $(".publication_month").show();
        $(".publication_country").show();
        $(".p_elec").show();
        $(".p_check").show(); 
    }  
});

$('.pub_large_no').click(function () {
    if ($(this).attr("value") == "pub_large_no") {
        $(".title_publication").hide();
        $(".large_pubclication").hide();
        $("#publication_larger_month").hide();
        $(".volume_publication").hide(); 
    }  
});


$('.pub_large_yes').click(function () {
    if ($(this).attr("value") == "pub_large_yes") {
        $(".title_publication").show();
        $(".large_pubclication").show();
        $("#publication_larger_month").show();
        $(".volume_publication").show(); 
    }  
});

$('.work_material_yes').click(function () {
    if ($(this).attr("value") == "work_material_yes") {
        $(".mat_fld").show();  
    }  
});
$('.work_material_no').click(function () {
    if ($(this).attr("value") == "work_material_no") {
        $(".mat_fld").hide();  
    }  
});



$('.reg_cop_yes').click(function () {
    if ($(this).attr("value") == "reg_cop_yes") {
        $(".reg_cop_fld_hide").show();
        $(".phide").show();
    }  
});
$('.reg_cop_no').click(function () {
    if ($(this).attr("value") == "reg_cop_no") {
        $(".reg_cop_fld_hide").hide();  
              $(".phide").hide();
    }  
});

$(document).on('click','.need_change_add',function () {
    var thisVal = $(this).attr("value");
    if (thisVal == "yes") {
        $(".need_change_add_yes").show();     
        $(".need_change_add_yes input,.need_change_add_yes select").attr("required", true); 
        
        $(".need_change_add_no").hide();     
        $(".need_change_add_no input,.need_change_add_no select").attr("required", false); 
    } else{
        $(".need_change_add_yes").hide();     
        $(".need_change_add_yes input,.need_change_add_yes select").attr("required", false); 
        
        $(".need_change_add_no").show();     
        $(".need_change_add_no input,.need_change_add_no select").attr("required", true); 
    }
});


$(document).on('click','.applied_for_mark',function () {
    var thisVal = $(this).attr("value");
    if (thisVal == "yes") {
        $(".applied_for_mark_yes").show();     
        $(".applied_for_mark_yes input,.applied_for_mark_yes select").attr("required", true); 
    } else{
        $(".applied_for_mark_yes").hide();     
        $(".applied_for_mark_yes input,.applied_for_mark_yes select").attr("required", false); 
    }
});





$(document).on('click','.submit_new_drawing',function () {
    var thisVal = $(this).attr("value");
    if (thisVal == "yes") {
        $(".submit_new_drawing_yes").show();     
    } else{
        $(".submit_new_drawing_yes").hide();     
    }
});
$(document).on('click','.need_to_change_name_owener',function () {
    var thisVal = $(this).attr("value");
    if (thisVal == "yes") {
        $(".need_to_change_name_owener_yes").show();     
        $(".need_to_change_name_owener_yes input,.need_to_change_name_owener_yes select").attr("required", true); 
    } else{
        $(".need_to_change_name_owener_yes").hide();     
        $(".need_to_change_name_owener_yes input,.need_to_change_name_owener_yes select").attr("required", false); 
    }
});

$(".popupform_cs").validate();
$("#popupform_td form").validate();
$(".popupform_td").validate();
$(".popupform_tr").validate();
$(".step1_valdate").validate();
$(".step2_valdate").validate();
$(".step3_valdate").validate();
$(".step4_valdate").validate();
$(".step5_valdate").validate();
$(".step6_valdate").validate();
$(".step7_valdate").validate();
$(".popup-bounce").validate();
$(".checkform").validate();
$(".validate-popupform").validate();
$(".popupform_llp").validate();
$(".popupform_md").validate();

 var $regexname=/^[a-z][a-z\s]*$/;
    $('.cn_pp').on('keypress keydown keyup',function(){
       
             if (!$(this).val().match($regexname)) {
                 $('.emsg').removeClass('hidden');
                 $('.emsg').show();
             }
           else{
                $('.emsg').addClass('hidden');
               }
         });


});


$('.colspArticle a.readBtn').click(function(){
        var ths = $(this);
        if(!ths.hasClass('trgr')){
            ths.closest('.colspArticle').find('.moreContnt').stop(0,0).slideToggle('slow'); 
            ths.addClass('trgr').text('Read Less');
        }else{
            ths.closest('.colspArticle').find('.moreContnt').stop(0,0).slideToggle('slow'); 
            ths.removeClass('trgr').text('Read More');
        }
    });

   //owlcarousel
    $('.owl-zgrapic-port').owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        autoplayHoverPause: true,
        autoplayTimeout:8000,
        autoplaySpeed: 800,
        navText : [""],
        responsive:{
            0:{
                items:3,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            },
            360:{
                items:3,
            }
        }
    });
    
     //owlcarousel
    $('.owl-zgrapic-vector').owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        autoplayHoverPause: true,
        autoplayTimeout:8000,
        autoplaySpeed: 800,
        navText : [""],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            },
            360:{
                items:1,
            }
        }
    });


