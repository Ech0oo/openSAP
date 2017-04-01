sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
    ], function (Controller, MessageToast) {
        "use strict";

        Controller.extend("myapp.controller.App", {
           onPressButton: function() {
                               var oBundle = this.getView().getModel("i18n").getResourceBundle();
                               var sWord = this.getView().getModel("helloPanel").getProperty("/recipient/name");
                               var sMsg = oBundle.getText("helloMsg", [sWord]);
                               MessageToast.show(sMsg);
                           }
        });
});
