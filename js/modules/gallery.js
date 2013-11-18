/**
 * Created with IntelliJ IDEA.
 * User: VShnyrenkova
 * Date: 15.11.13
 * Time: 11:42
 * To change this template use File | Settings | File Templates.
 */
function SimpleGallery(options){
    var view=this,

    settings={
        wrap:options.wrap ? options.wrap : $('.gallery')
    },
        _previewBuilding= function(){
            var wrap = settings.wrap;
            var elemHeight = wrap.children('.current-photo').height();
            wrap.children('.list-photo').height(elemHeight);
        },
		//for modal window
        _createModalWindow = function(){
            $('body').append('<div class="modal-overlay"></div>').append('<div class="view-region"> <img src="" alt="pic"/></div>');
            $('.view-region').append('<a class="close-btn" href="#">Закрыть</a>');
        },
        _destroyModalWindow = function(){
				$('.modal-overlay, .view-region').remove();
				$('body').css('overflow', 'scroll');
        },

        _showModalWindow = function(current){
            $('.show-modal').click(function(){
                _createModalWindow();
                var url= current.children().attr('src');
                var preview = $('.view-region img');
                preview.attr('src',url);
                $('.modal-overlay, .view-region').fadeIn(200);
				$('body').css('overflow', 'hidden');
			    _hideModalWindow();
            });
        },
       _hideModalWindow = function(){
            $('.close-btn').click(function(){
                $('.modal-overlay, .view-region').fadeOut(200);
                _destroyModalWindow();

            });
//           if ($('.modal-overlay'))>0
//           $(document).click(function() {
//               $('.modal-overlay, .view-region').fadeOut(200);
//               _destroyModalWindow();
//           });
        },
       _renderModal= function(){
           var target =  settings.wrap.children('.current-photo');
           target.append("<a class='show-modal' href='#'>Увеличить</a>");
           _showModalWindow(target);

       },
	   // /end
        _render = function(){
            var wrap = settings.wrap;
            var child = wrap.children().length;
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
            settings.wrap.find('li').bind('click', function(event){
                _activeItem($(event.currentTarget));
            });
        },
        _activeItem = function(el){
            var wrap = settings.wrap;
            var active = wrap.find('li.active');
            var result = wrap.find('.current-photo');

            if(el != active){
                active.removeClass('active');
                $(el).addClass('active');
                var url = el.children().attr('src');
                result.children().attr('src', url);
            }
        };

        view.init = function(){
            _previewBuilding();
            $(window).resize(function(){
                _previewBuilding();
            });
            _render();
		    _renderModal();
        };

    view.init();
}
