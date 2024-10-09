sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/f/library"
], function (Controller, fioriLibrary) {
	"use strict";

	return Controller.extend("sap.ui.demo.fiori2.controller.Master", {


		onInit: function () {
			this.oRouter = this.getOwnerComponent().getRouter();
		},

		onListItemPress: function (oEvent) {

			// Set new layout
			var fcl = this.getView().getParent().getParent()
			fcl.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded)

			// Navigate to detail page and bind character data
			const characterPath = oEvent.getSource().getBindingContext().getPath().substr(1);

			this.oRouter.navTo("detail", {
				character: `getCharacterById(id='${characterPath.match(/\('(.*?)'\)/)[1]}')`
			});

		}
	});
});
