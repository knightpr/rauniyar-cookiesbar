#jQuery Cookies bar plugin
@author Pramod Rauniyar 
##Description 
This is simple jquery plugin to show the cookies bar on the top of the page.
###Dependecy
It depends on the JQUERY plug in, so before using this, make sure you have jquery libarary is loaded. 

###usages
> $.cookiesBar();

###default settings

    {
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
       text: 'Cookies help us deliver our services. By using our services, you agree to our use of cookies.'
     }
  		
##customize your cookies bar
	 $.cookiesBar({
					 background:'blue',
					 fontColor:'#eee'
				 });
