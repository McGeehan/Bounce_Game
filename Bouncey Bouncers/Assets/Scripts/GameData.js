#pragma strict

	static var numMissed : int = 0;
	static var numGrabbed : int = 0;

	static function DisplayScore () {

	Debug.Log("Grabbed: " + numGrabbed + " Missed: " + numMissed);

	}