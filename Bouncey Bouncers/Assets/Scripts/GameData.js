#pragma strict

	static var numMissed : int = 0;//These always stay here.. "static"
	static var numGrabbed : int = 0;//however, they can be referenced elsewhere

	static function DisplayScore () { 

	Debug.Log("Grabbed: " + numGrabbed + " Missed: " + numMissed);

	}


 
 	function OnGUI()

 {
 	 GUI.contentColor = Color.black;
   GUI.Label(Rect(200,200, 200, 100), "Grabbed: " + numGrabbed + " Missed: " + numMissed);
 }
 