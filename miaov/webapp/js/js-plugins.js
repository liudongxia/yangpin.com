/**
 * Created by Administrator on 2017/2/7.
 */

var Tool={

    tip:function (selector, options) {
        $(selector).tipsy({fade:options.fade,
            gravity:options.position,
            trigger:options.trigger
        });
    },

    dialog:function (selector,options) {
        $(selector).iziModal({title:options.title,
            subtitle:options.subtitle,
            iconClass:options.iconClass,
            overlayColor:options.overlayColor,
            headerColor:options.headerColor,
            iconColor:options.iconColor,
            width:options.width,
            padding:options.padding,
            onOpened: options.onOpened
        });
        $(selector).iziModal('open');
    }
};