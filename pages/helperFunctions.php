<?php

	function getRequiredFieldsNotFill($requiredFields){
		$arr = array();
		foreach($requiredFields as $key => $value) {
			if ($value == "") {
				array_push($arr, $key);
			}
		}
		return $arr;
	}