#pragma strict

public var gObj : GameObject; //Public variable that is accessible to everyone

function Start () { /// Code gets run one time
CreateRandom();
}

function CreateRandom() { /// Create a random number between two values

	var x : float;
	var y : float;

	x = Random.Range(-7.0, 7.0);

	y = 6;

	Instantiate( gObj, Vector3(x, y, 0), Quaternion.identity );// What object will we clone, where will it start, and do we want it to rotate????///
	 
}