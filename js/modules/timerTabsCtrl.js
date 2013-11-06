/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 06.11.13
 * Time: 11:49
 * To change this template use File | Settings | File Templates.
 */

function TimerTabsCtrl(options){

    var view = this,

        config = {
           wrap:options.wrap ? options.wrap : $('.timer-tabs')
        },

        _render = function(){
             var wrapper = config.wrap;
             var child = wrapper.children().length;
            if(child == 0){
                _paintHTML();
            }else{

            }
            _handlers();
        },

        _paintHTML = function(){
            console.log('here will create html if wrapper is empty');
        },

        _handlers = function(){
            config.wrap.find('li').bind('click', function(event){
                _activeContent($(event.currentTarget));
            });

            setInterval(_timer, 4000);
        },

        _timer = function(){
            var wrap = config.wrap;
            var list = wrap.find('li');

            var next;
            list.each(function(index, elem){
               if($(elem).hasClass('active')){
                   if(index != list.length-1){
                           next = $(elem).next();
                   }else{
                           next = list.eq(0);
                   }
               }
            });

            _activeContent(next);

        },

        _activeContent = function(elem){
           var wrap = config.wrap;
           var active = wrap.find('li.active');
           var result = wrap.find('.current-item');

            if(elem != active){
               active.removeClass('active');
               elem.addClass('active');
                var url = elem.attr('data-image');
                result.children().attr('src', url);
            }


        };

    view.init = function(){
        _render();
    }

    view.init();
}