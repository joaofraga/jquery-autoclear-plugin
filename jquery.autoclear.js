/*
 * 	Auto Clear 0.1 - jQuery plugin
 *	written by João Fraga	
 *	http://www.ocortador.com.br
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */
 
jQuery.fn.autoClear = function(){
    
    $(this).each(function(){
        $(this).attr('title',$(this).val());
    })
    
    $(this).focus(function(){
        if($(this).val()==$(this).attr('title')){
            $(this).val('');
        }
    })
    $(this).blur(function(){
        if($(this).val()==''){
            $(this).val($(this).attr('title'));
        }
    })
    
    return this;

}
