<?php
/** 
 * Config values for Mediasoft SquareOne Framework
 *
 * @copyright  Copyright (C) 2013 Mediasoft Technologies, Inc., All Rights Reserved.
 * @author     Jason Melendez.
 * @link       http://www.mediasofttechnologies.com.
 *
 */
 
 // variable settings array
 $ms_config = array(
	// Add cookies to the parameter array that gets passed to each controller
	'addCookiesToParams' => true,
	
 	// Default Branding
	'productName' => 'MyApp',
	'productLogo' => '/assets/images/front/wedshare_logo.png',
	'productLogoAlt' => 'My Application',
	
	// Database
	'dbHost' => '',
	'dbUser' => '',
	'dbPass' => '',
	'dbName' => '',
	
	// Hash Salt
	'hashSalt' => 'Some.Hash.Salt',
	
	// Display Variables
	'newline' => "\n\n",
	
	// Browser Cache Settings
	'cssCacheExpireSeconds' => 60 * 60 * 1,	// how long browser should cache dynamic CSS files (1 hour)
	
	// Auth Cookie Settings
	'loginCookieExpireSeconds' => 60*60*24*30, // how long browser should store login cookie (30 days)
	
	// Module URLs - We can separate functionality into modules based on URL (i.e. api.mysite.com, client.mysite.com, etc)
	'otherModuleUrl' => 'othermodule.mysite.com'
	
);
	 
// Error Reporting
ini_set('display_errors','On');