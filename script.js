function openInsta($handle){
  window.open("https://www.instagram.com/" + $handle, "_blank");
}


$(document).ready(function(){
  
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
      $(".navbar").css("background" , "#E8E8E8");   
	  }

	  else{
      $(".navbar").css("background" , "linear-gradient(180deg, #E8E8E8 0%, rgba(255,255,255,0) 100%)"); 
    }
  })
});

//watch now hover
function Start() {

  $('.watch-now-container').on({
  
  mouseenter: function () { $('.spray').prop('src', 'images/spray-paint-animation.gif') },
  
    });
  }
  
  $(Start);
//footer icons
function staticDisplay($id)
{
  $('.'+$id+'-static').show();
  $('.'+$id+'-onhover').hide();
}

function hoverDisplay($id)
{
  $('.'+$id+'-static').hide();
  $('.'+$id+'-onhover').show();
  
}


//Start Youtube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var youtubeReady = false;

//Variable for the dynamically created youtube players
var players= new Array();
var isPlaying = false;
function onYouTubeIframeAPIReady(){
  //The id of the iframe and is the same as the videoId	
  jQuery(".youtube-video").each(function(i, obj)  {
     players[obj.id] = new YT.Player(obj.id, {         
			  videoId: obj.id,
			    playerVars: {
			    controls: 2,
		      rel:0,
		      autohide:1,
		      showinfo: 0 ,
		      modestbranding: 1,
		      wmode: "transparent",
		      html5: 1
       	},    
        events: {
          'onStateChange': onPlayerStateChange
        }
       });
     });
     youtubeReady = true;
  }


function onPlayerStateChange(event) {
  var target_control =  jQuery(event.target.getIframe()).parent().parent().parent().find(".controls");
  
  var target_caption = jQuery(event.target.getIframe()).parent().find(".carousel-caption");
  switch(event.data){
    case -1:
      jQuery(target_control).fadeIn(500);
      jQuery(target_control).children().unbind('click');
      break
     case 0:
      jQuery(target_control).fadeIn(500);
      jQuery(target_control).children().unbind('click');
      break;
     case 1:
      jQuery(target_control).children().click(function () {return false;});
      jQuery(target_caption).fadeOut(500);
      jQuery(target_control).fadeOut(500);
       break;
      case 2:
        jQuery(target_control).fadeIn(500);
        jQuery(target_control).children().unbind('click'); 
        break;
        case 3:
           jQuery(target_control).children().click(function () {return false;});
           jQuery(target_caption).fadeOut(500);
           jQuery(target_control).fadeOut(500);
           break;
          case 5:
            jQuery(target_control).children().click(function () {return false;});
            jQuery(target_caption).fadeOut(500);
            jQuery(target_control).fadeOut(500);
            break;
          default:
            break;
    }
};

jQuery(window).bind('load', function(){
  jQuery(".carousel-caption").fadeIn(500);
  jQuery(".controls").fadeIn(500);
 });

jQuery('.carousel').bind('slid.bs.carousel', function (event) {
   jQuery(".controls").fadeIn(500);
});