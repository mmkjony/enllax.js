/**
  * jQuery.enllax.js v1.1.0
  * https://github.com/mmkjony/enllax.js
  * demo: http://mmkjony.github.io/enllax.js/
  *
  * Copyright 2015, MMK Jony
  * This content is released under the MIT license
 **/

(function($){
    'use strict';

    $.fn.enllax = function(opt){

        var elem = $('[data-enllax-ratio]');
        elem.each(function(){
            var $this = $(this);
            $this.css({
                'position': 'absolute',
                'left': '0',
                'right': '0'
            });
        });

        var winHeight = $(window).height();

        var options = $.extend({
            ratio: 0,
            type: 'background', //foreground
            direction: 'vertical', //horizontal
            offset: 0
        }, opt);

        elem.each(function(){
            var ratio;
            var type;
            var dir;
            var offset;
            var $this = $(this);
            var docHeight = $(document).height();
            var offsettop = $this.offset().top;
            var height = $this.outerHeight();
            var dataRat = $this.data('enllax-ratio');
            var dataType = $this.data('enllax-type');
            var dataDir = $this.data('enllax-direction');
            var dataOffset = $this.data('enllax-offset');

            if(dataRat) {
                ratio = dataRat;
            }
            else { ratio = options.ratio; }

            if(dataType) {
                type = dataType;
            }
            else { type = options.type; }

            if(dataDir) {
                dir = dataDir;
            }
            else { dir = options.direction; }

            if(dataOffset) {
                offset = dataOffset;
            }
            else { offset = options.offset; }

            var bgY = Math.round(offsettop * ratio);
            var transform = Math.round( ( offsettop - ( winHeight / 2 ) ) * ratio - offset );

            if(type == 'background') {
                if(dir == 'vertical') {
                    $this.css({
                        'background-position': 'center ' + -bgY + 'px'
                    });
                }
                else if(dir == 'horizontal') {
                    $this.css({
                        'background-position': -bgY + 'px' + ' center'
                    });
                }
            }
            else if(type == 'foreground') {
                if(dir == 'vertical') {
                    $this.css({
                        '-webkit-transform': 'translateY(' + transform + 'px)',
                        '-moz-transform': 'translateY(' + transform + 'px)',
                        'transform': 'translateY(' + transform + 'px)',
                        'position': 'absolute',
                        'left': '0',
                        'right': '0'
                    });
                }
                else if(dir == 'horizontal') {
                    $this.css({
                        '-webkit-transform': 'translateX(' + transform + 'px)',
                        '-moz-transform': 'translateX(' + transform + 'px)',
                        'transform': 'translateX(' + transform + 'px)'
                    });
                }
            }

            $(window).on('scroll', function(){
                var docHeight = $(document).height();
                var offsettop = $this.offset().top;
                var height = $this.outerHeight();
                var scrolling = $(this).scrollTop();

                bgY = Math.round((offsettop - scrolling) * ratio);
                transform = Math.round( ( ( offsettop - ( winHeight / 2 ) ) - scrolling ) * ratio - offset );

                if(type == 'background') {
                    if(dir == 'vertical') {
                        $this.css({
                            'background-position': 'center ' + -bgY + 'px'
                        });
                    }
                    else if(dir == 'horizontal') {
                        $this.css({
                            'background-position': -bgY + 'px' + ' center'
                        });
                    }
                }
                else if((type == 'foreground') && (scrolling < docHeight)) {
                    if(dir == 'vertical') {
                        $this.css({
                            '-webkit-transform': 'translateY(' + transform + 'px)',
                            '-moz-transform': 'translateY(' + transform + 'px)',
                            'transform': 'translateY(' + transform + 'px)',
                            'position': 'absolute',
                            'left': '0',
                            'right': '0'
                        });
                    }
                    else if(dir == 'horizontal') {
                        $this.css({
                            '-webkit-transform': 'translateX(' + transform + 'px)',
                            '-moz-transform': 'translateX(' + transform + 'px)',
                            'transform': 'translateX(' + transform + 'px)'
                        });
                    }
                }
            });
        });

    };

})(jQuery);
