/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 03.12.13
 * Time: 15:15
 * To change this template use File | Settings | File Templates.
 */


RD.MenuController = function(m){
    var view = {},

        config = {

        },

        _handlers = function(){
            var link = $('.menu-btn');
                link.bind('click', function(event){
                  _mainMenuActive(event.currentTarget);
                });
            var subLink = $('.menu').find('a');
                subLink.bind('click', function(event){
                   _subMenuActive(event.currentTarget);
                });

        },

        _mainMenuActive = function(elem){
            var popup = $(elem).next();
            popup.slideToggle();
            $(elem).toggleClass('active-main-menu');
        },

        _subMenuActive = function(elem){
           if($(elem).next().hasClass('submenu')){
               $(elem).next().slideToggle(400);
               var parent = $(elem).parent('li');
                   parent.toggleClass('active');

           }
        };

    view.init = function(){
      _handlers();
    };

    return view;
}(RD);

RD.MenuController.init();