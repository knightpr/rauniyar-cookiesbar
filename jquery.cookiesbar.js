/**
 * JQUERY plugin for cookiesbar
 * @author Pramod Rauniyar 
 * @descriptions
 		simple jquery plugin for showing cooking bar on the top of the page with simple configuratinal options

 */

(function($){
	'use strict'
	 $.cookiesBar = function(options){
		//initializing variables
		var $container = $('body'),
			$elementCookieBar = '',
			$elementAcceptBtn = '';

		//setting default variables
		var settings = $.extend({
            privacyURL: 'http://www.cookielaw.org/the-cookie-law/',
            background: '#444',
            fontColor : '#fff',
            textAlign:'center',
            borderRadius: '2px',
            fontSize: '15px',
            padding : '5px',
            btnBackground: '#7DAF3B',
            btnColor: '#222',
            btnText : 'Got it!',
            fadeOutTime: 1000,
            text: 'Cookies help us deliver our services. By using our services, you agree to our use of cookies.',
            position: 'relative',
           'zindex': 'initial',
            top:'0',
            onScrollAccept: false,
            linkcolor:'#444',
            linkMoreText:'Learn More'
 		}, options );

		//method to render the cookies bar on the top of the page
		var renderingCookiesBar = function(){
			var $template = '<div id="app_cookies_bar">'+settings.text+' <a href='+settings.privacyURL+' target="_blank" style="color:'+settings.linkcolor+'">'+settings.linkMoreText+'</a> <a href="#" id="btn_accept_cookies">'+settings.btnText+'</a></div>';
			$container.prepend($template);
			$elementCookieBar = $('#app_cookies_bar');
			$elementAcceptBtn = $('#btn_accept_cookies');

			//styling the cookies bar
			$elementCookieBar.css({
				   'font-size' : settings.fontSize,
				   'color' : settings.fontColor,
				   'background': settings.background,
				   'border-radius' : settings.borderRadius,
				   'padding': settings.padding,
				   'text-align' : settings.textAlign,
				   'position' : settings.position,
				   'z-index' : settings.zindex,
				   'top': settings.top,

			});
			//styling the acceopt button
			$elementAcceptBtn.css({
				'background': settings.btnBackground,
				 'padding': '2px',
				 'border-radius': '2px',
				 'text-decoration': 'none',
				 'color': settings.btnColor,
			});

		};
		//method to set cookies
		var setCookieAccept= function(cname, cvalue, exdays) {
		        var d = new Date();
			    d.setTime(d.getTime() + (exdays*24*60*60*1000));
			    var expires = "expires=" + d.toGMTString();
			    document.cookie = cname+"="+cvalue+"; "+expires;
			    return false;

        };
        //method to get cookies
        var getCookieStatus = function(cname) {
             var name = cname + "=";
		    var ca = document.cookie.split(';');
		    for(var i=0; i<ca.length; i++) {
		        var c = ca[i];
		        while (c.charAt(0)==' ') c = c.substring(1);
		        if (c.indexOf(name) === 0) {
		            return c.substring(name.length, c.length);
		        }
		    }
		    return "";
        };

        //binding the click events
		var bindEvents = function(){

			//accept click button 
			$elementAcceptBtn.click(function(event) {
		    	setCookieAccept('app-cookies-status','accepted',365);
		    	$elementCookieBar.fadeOut(settings.fadeOutTime);
		    	event.stopImmediatePropagation();
		    	return false;
			});
			//mouseover on the accept button 
			$elementAcceptBtn.mouseover(function(){

				$(this).css('background','#ccc');
			});
			//mouseleave the acceopt button
			$elementAcceptBtn.mouseleave(function(){

				$(this).css('background',settings.btnBackground);
			});

			$(window).scroll(function(){

				if(settings.onScrollAccept){
				 	var check_cookie =  getCookieStatus('app-cookies-status');
	            	if(check_cookie !== 'accepted'){
					    setCookieAccept('app-cookies-status','accepted',365);
				    	$elementCookieBar.fadeOut(settings.fadeOutTime);
				    	event.stopImmediatePropagation();
				    	return false;
					}
				}
			   
			});
		};
		//initalizing the cookiesBar
		var init = function(){
            var check_cookie =  getCookieStatus('app-cookies-status');
            if(check_cookie !== 'accepted'){
				renderingCookiesBar();
				bindEvents();
			}
		};
		init();

	};
}(jQuery));

