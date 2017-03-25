sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
    ], function (Controller, MessageToast) {
        "use strict";

        Controller.extend("myapp.controller.App", {
           onPressButton: function() {
                               console.log("click");
                               MessageToast.show("Button click");
                           }
        });
});
