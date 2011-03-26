/*
 * 	Auto Clear 0.2 - jQuery plugin
 *	written by João Fraga	
 *	https://github.com/joaofraga/jquery-autoclear-plugin
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */
 
jQuery.fn.autoClear = function(){
    
    $(this).each(function(){
        $(this).attr('js-autoclear',$(this).val());
    })
    
    $(this).focus(function(){
        if($(this).val()==$(this).attr('js-autoclear')){
            $(this).val('');
        }
    })
    $(this).blur(function(){
        if($(this).val()==''){
            $(this).val($(this).attr('js-autoclear'));
        }
    })
    
    return this;

}
