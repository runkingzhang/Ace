
!function ($) {

  "use strict"; // jshint ;_;


  /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
   * ======================================================= */

  $(function () {

    $.support.transition = (function () {

      var transitionEnd = (function () {

        var el = document.createElement('bootstrap')
          , transEndEventNames = {
               'WebkitTransition' : 'webkitTransitionEnd'
            ,  'MozTransition'    : 'transitionend'
            ,  'OTransition'      : 'oTransitionEnd otransitionend'
            ,  'transition'       : 'transitionend'
            }
          , name

        for (name in transEndEventNames){
          if (el.style[name] !== undefined) {
            return transEndEventNames[name]
          }
        }

      }())

      return transitionEnd && {
        end: transitionEnd
      }

    })()

  })

}(window.jQuery);
/* =========================================================
 * bootstrap-modal.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


/*
 * modified by @sofish
 * overview:
 *  - 窗口高度没有弹出层内容高时，把弹层上边与窗口上对齐(type: bug)
 *  - 窗口太窄，弹层左边与窗口左边对齐
 *  - CSS Hack: IE6 min-height
 */
!function( $ ){

  "use strict"

  /* MODAL CLASS DEFINITION
   * ====================== */

  var Modal = function ( content, options ) {
    this.options = options
    this.$element = $(content)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
  }

  Modal.prototype = {

    constructor: Modal

    ,
    toggle: function (data) {
      return this[!this.isShown ? 'show' : 'hide'](data)
    }
    //
    // add by @sofish
    // calculate the element height
    ,
    setPos: function(el){
      var toTop = $(document).scrollTop(),
        winHeight = $(window).height(),
        winWidth = $(window).width(),
        height = el.height(),
        width = el.width();
      el.css({
        'margin-left': -(winWidth > width ? parseInt(width/2, 10) : 0) + 'px',
        'margin-top': -(winHeight > height ? parseInt(height/2) : 0) + 'px',
        'top': (winHeight > height ? parseInt(winHeight/2) + toTop : toTop)+ 'px',
        'left': (winWidth > width ? 50 : 0) + '%'
      });
    }

    ,
    show: function (data) {
      var that = this

      if (this.isShown) return

      $('body').addClass('modal-open').append(that.$element);

      // add by @sofish
      // set margin to adjust the window
      this.setPos(that.$element);
      $(window).bind('scroll resize', function(){
        that.setPos(that.$element);
      });

      if(data) data['setPos'] = this.setPos;

      this.isShown = true
      this.$element.trigger('show', data);

      escape.call(this)
      backdrop.call(this, function () {
        var transition = $.support.transition && that.$element.hasClass('fade')

        !that.$element.parent().length && that.$element.appendTo(document.body) //don't move modals dom position

        that.$element
          .show()

        if (transition) {
          that.$element[0].offsetWidth // force reflow
        }

        that.$element.addClass('in')

        transition ?
          that.$element.one($.support.transition.end, function () {
            that.$element.trigger('shown')
          }) :
          that.$element.trigger('shown', data)

      })
    },

    hide: function ( e ) {

      e && e.preventDefault && e.preventDefault()

      if (!this.isShown) return

      var that = this
      this.isShown = false

      $('body').removeClass('modal-open')

      escape.call(this)

      this.$element
        .trigger('hide')
        .removeClass('in')

      $.support.transition && this.$element.hasClass('fade') ?
        hideWithTransition.call(this) :
        hideModal.call(this)
    }

  }


  /* MODAL PRIVATE METHODS
   * ===================== */

  function hideWithTransition() {
    var that = this
      , timeout = setTimeout(function () {
        that.$element.off($.support.transition.end)
        hideModal.call(that)
      }, 500)

    this.$element.one($.support.transition.end, function () {
      clearTimeout(timeout)
      hideModal.call(that)
    })
  }

  function hideModal( that ) {
    this.$element
      .hide()
      .trigger('hidden')

    backdrop.call(this)
  }

  function backdrop( callback ) {
    var that = this
      , animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '"></div>')
        .appendTo(document.body);

      // add by @sofish
      // adjust backdrop height
      var htmlHeight = $(document).height(),
        winHeight = $(window).height(),
        backDrop = $('.modal-backdrop'),
        bdHeight = Math.max(htmlHeight, winHeight);

      backDrop.length && backDrop.height(bdHeight);

      if (this.options.backdrop != 'static') {
        this.$backdrop.click($.proxy(this.hide, this))
      }

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      doAnimate ?
        this.$backdrop.one($.support.transition.end, callback) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop.one($.support.transition.end, $.proxy(removeBackdrop, this)) :
        removeBackdrop.call(this)

    } else if (callback) {
      callback()
    }
  }

  function removeBackdrop() {
    this.$backdrop.remove()
    this.$backdrop = null
  }

  function escape() {
    var that = this
    if (this.isShown && this.options.keyboard) {
      $(document).on('keyup.dismiss.modal', function ( e ) {
        e.which == 27 && that.hide()
      })
    } else if (!this.isShown) {
      $(document).off('keyup.dismiss.modal')
    }
  }


  /* MODAL PLUGIN DEFINITION
   * ======================= */

  $.fn.modal = function ( option, extra_data ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](extra_data)
      else if (options.show) data.show(extra_data)
    })
  }

  $.fn.modal.defaults = {
    backdrop: true
    ,
    keyboard: true
    ,
    show: true
  }

  $.fn.modal.Constructor = Modal


  /* MODAL DATA-API
   * ============== */

  $(function () {
    $('body').on('click.modal.data-api', '[data-toggle="modal"]', function ( e ) {
      var $this = $(this), href
        , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        , option = $target.data('modal') ? 'toggle' : $.extend({}, $target.data())

      e.preventDefault()
      $target.modal(option, $this.data())
    })
  })

}( window.jQuery );

