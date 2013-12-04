/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 04.12.13
 * Time: 12:17
 * To change this template use File | Settings | File Templates.
 */

RD.TabsController = function(m){
    var view = {},

        config = {

        },

        _handlers = function(){
          var holder = $('.static-tabs').children('ul').find('li');

            holder.bind('click', function(event){
               _activeTabs(event, holder);
            })

        },

        _activeTabs = function(e, list){
            var id = $(e.currentTarget).attr('id-tab');

            list.removeClass('active');
            $(e.currentTarget).addClass('active');

            $('#'+id).css('display', 'block');
            $('#'+id).siblings('div').css('display', 'none');

        };

    view.init = function(){
        _handlers();
    };

    return view;
}(RD);

RD.TabsController.init();