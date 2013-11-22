<?php

/**
 * Default Controller.
 *
 *
 */
class DefaultController extends MsController {
	
	
	/**
	 * Default Action.
	 * 
	 * Called when no action is defined.
	 *
	 * @param MsView $viewObject
	 * @return void
	 */
	 public function defaultAction(&$viewObject) {
		// Place your controller logic here
		
		// Store view values as follows:
		$viewObject->setValue('testval', 'Sweet, we\'re up and running!');
		
	 }
	
	 
}