(function ($) {
  $.fn.colorup = function(options) {
    return this.each(function() {
      var bw, color, img, logo, url;
      logo = $(this);
      color = $("<div class='.color-ver'></div>").appendTo(logo);
      bw = $("<div class='.bw-ver'></div>").appendTo(logo);
      if (options.url != null) {
        url = options.url;
      } else {
        url = logo.attr("src");
      }
      img = new Image();
      img.src = url;
      return img.onload = function() {
        var doc, height, target, targetHeight, targetTop, width, win;
        width = img.width;
        height = img.height / 2;
        logo.css({
          width: width,
          height: height,
          position: "relative"
        });
        bw.css({
          width: width,
          height: "100%",
          background: "url(" + url + ")",
          position: "absolute",
          top: 0
        });
        color.css({
          width: width,
          height: height,
          background: "url(" + url + ")",
          backgroundPosition: "0 -74px"
        });
        doc = $(document);
        win = $(window);
        if (options != null ? options.target : void 0) {
          target = options.target;
          targetTop = target.offset().top;
        } else {
          target = $(document);
          targetTop = 0;
        }
        targetHeight = target.height();
        return doc.scroll(function() {
          var level, numerator, scrollTop, winHeight;
          scrollTop = doc.scrollTop();
          winHeight = win.height();
          numerator = target ? scrollTop - targetTop > 0 ? scrollTop - targetTop : 0 : doc.scrollTop();
          level = 100 - 100 * numerator / (targetHeight - winHeight);
          return bw.height("" + level + "%");
        });
      };
    });
  };
})(jQuery);