sap.ui.define([
	'sap/ui/core/UIComponent'
], function(UIComponent) {
	'use strict';

	return UIComponent.extend('sap.ui.demo.fiori2.Component', {

		init: function () {
			
			UIComponent.prototype.init.apply(this, arguments);

			// Router setup
			this.getRouter().initialize();
		}

	});
});