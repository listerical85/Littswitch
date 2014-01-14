/**
 * Created by Listerical on 14-01-14.
 * Version 0.1
 */
(function() {
    var $, Littswitch, LittswitchOptions;

    $ = jQuery;

    LittswitchOptions = (function() {
        function LittswitchOptions() {

        }
        return LittswitchOptions;
    })();
    Littswitch = (function() {
        function Littswitch(options) {
            this.options = options;
            this.init();
        }
        Littswitch.prototype.init = function() {
            this.prepare();
            this.addUIListeners();
        };
        Littswitch.prototype.prepare = function(){
            var self = this;
            $('[data-littswitch=true]').each(function(){
                self.$littswitch = $('<div class="littswitch"><div class="littswitch-switch"></div></div>');
                self.$littswitchCheckbox = $(this);
                self.$littswitchValue = self.$littswitchCheckbox.clone();
                self.$littswitchCheckbox.attr('name','littswitch-'+self.$littswitchCheckbox.attr('name'));
                self.$littswitchCheckbox.after(self.$littswitch);
                self.$littswitchCheckbox.after(self.$littswitchValue);
                self.$littswitchValue.data('false');
                self.$littswitchCheckbox.hide();
                self.$littswitchValue.attr('type','hidden');
                if(self.$littswitchCheckbox.attr('checked')){
                    self.$littswitch.addClass('littswitch-on');
                    self.$littswitchValue.val(self.$littswitchCheckbox.data("littswitch-on"));
                }
                else {
                    self.$littswitch.addClass('littswitch-off');
                    self.$littswitchValue.val(self.$littswitchCheckbox.data("littswitch-off"));
                }
            });
        };
        Littswitch.prototype.addUIListeners = function(){
            var self = this;
            $('.littswitch').click(function(){
                if(!$(this).hasClass('littswitch-on')){
                    $(this).switchClass('littswitch-off','littswitch-on');
                    self.$littswitchValue.val(self.$littswitchCheckbox.data("littswitch-on"));
                }else{
                    $(this).switchClass('littswitch-on','littswitch-off');
                    self.$littswitchValue.val(self.$littswitchCheckbox.data("littswitch-off"));
                }
            });
        };

        return Littswitch;

    })();

    $(function() {
        var littswitch, options;
        options = new LittswitchOptions();
        return littswitch = new Littswitch(options);
    });

}).call(this);