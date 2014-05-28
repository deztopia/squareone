// Main JS Startup File

(function() {
	
	// Create the namespace
	if (typeof Myapp == 'undefined') {
		window["Myapp"] = {};	// global Object container to create namespace
	}
	
	
	// ********* Cookie Handling **********
	/**
	 *	Cookie Handling
	 */
	function setCookie(c_name, value, exdays) {
	    var exdate = new Date();
	    exdate.setDate(exdate.getDate() + exdays);
	    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
	    document.cookie = c_name + "=" + c_value  + '; path=/;';
	    
	}
	
	function getCookie(c_name) {
	    var i, x, y, ARRcookies = document.cookie.split(";");
	    for (i = 0; i < ARRcookies.length; i++) {
	        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
	        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
	        x = x.replace(/^\s+|\s+$/g, "");
	        if (x == c_name) {
	            return unescape(y);
	        }
	    }
	}
	
	
	// ********* JQueryMobile Page Manager **********
	/**
	 * MsPageManager
	 * Object to dynamically load JS and CSS files at run-time (i.e. after Ajax calls)
	 */
	function MsPageManager() {
		this.filesAdded = '' // list of files already added. Tracked so we avoid adding duplicate files to the DOM
	}
	
	MsPageManager.prototype.addCss = function(filepath) {
		if (this.filesAdded.indexOf("[" + filepath + "]") == -1) { // file not added yet
//			console.log('Adding CSS File: ' + filepath);
			var fileref = document.createElement('link');
			fileref.setAttribute("rel", "stylesheet");
			fileref.setAttribute("type", "text/css");
			fileref.setAttribute("href", filepath);
			
			// put in file added list
			this.filesAdded += "[" + filepath + "]";
			
			// add to DOM
			if (typeof fileref != "undefined")
				document.getElementsByTagName("head")[0].appendChild(fileref);
		}
	};
	MsPageManager.prototype.addJs = function(filepath) {
		if (this.filesAdded.indexOf("[" + filepath + "]") == -1) { // file not added yet
//			console.log('Adding JS File: ' + filepath);
			var fileref = document.createElement('script');
			fileref.setAttribute("type", "text/javascript");
			fileref.setAttribute("src", filepath);
			
			// put in file added list
			this.filesAdded += "[" + filepath + "]";
			
			// add to DOM
			if (typeof fileref != "undefined")
				document.getElementsByTagName("head")[0].appendChild(fileref);
		}
	};
	
	/**
	 * Tasks to run at every page change
	 * @param $("div") page
	 */
	MsPageManager.prototype.pageChange = function(page) {
		// Load any page-specific JS file
		if (typeof(page.attr("data-myapp-load-js")) != "undefined") Myapp.pageManager.addJs("/assets/js/" + page.attr("data-myapp-load-js"));

		// add other tasks below...
		
				
	};
	
	
	
	// ********* Hook Listeners to UI objects/events **********
	/**
	 * This function will run every time a page change occurs.
	 * 
	 */
	$(document).on( "pagecontainerhide", function( event, ui ) {
		Myapp.lastPage = ui.nextPage;	
		Myapp.pageManager.pageChange(ui.nextPage);
	});
	
	
	
	
	
	
	// ********* Startup **********
	/**
	 * Startup:
	 * The following will be run only for the initially loaded page.
	 * 
	 */
	$( document ).ready(function() {
		Myapp.startPage = $( document ).find("[data-role='page']");
		Myapp.lastPage = Myapp.startPage;
		
		Myapp.pageManager = new MsPageManager(); // single instance of this object, to be used by all pages		
		Myapp.pageManager.pageChange(Myapp.startPage); // run any pagechange tasks on the initial page	
	});
	
	
})();