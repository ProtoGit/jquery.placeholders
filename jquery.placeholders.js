/**
 * https://github.com/ProtoGit/jquery.placeholders
 */
(function($) {
    $.fn.placeholders = function() {

        var nativeSupport = (function() {
            var input = document.createElement('input');
            return ('placeholder' in input);
        })();

        this.each(function() {

            var form = $(this);

            form.find('input[title], textarea[title]').each(function() {
                var field = $(this);
                var title = field.attr('title');
                if (nativeSupport) {
                    field.attr('placeholder', title).removeAttr('title');
                } else {
                    if (field.val().length === 0) {
                        field.addClass('placeholder').val(title);
                    }
                    field.on('focus', function() {
                        if (field.val() === title) {
                            field.val('');
                            field.removeClass('placeholder');
                        }
                    });
                    field.on('blur', function() {
                        if (field.val() === '') {
                            field.val(title);
                            field.addClass('placeholder');
                        }
                    });
                }
            });

            if (!nativeSupport) {
                form.on('submit', function() {
                    form.find('.placeholder').val('');
                });

                $(document).ajaxComplete(function() {
                    form.find('input[title], textarea[title]').each(function() {
                        var field = $(this);
                        var title = field.attr('title');
                        if (field.val().length === 0) {
                            field.addClass('placeholder').val(title);
                        }
                    });
                });
            }

        });

    };
})(jQuery);
