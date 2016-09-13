#pragma strict 

public var points : int = 5; 
public var pickedUpBy : String = "Player";  

 
					
function OnTriggerEnter2D(other : Collider2D)
{
	if ( other.CompareTag(pickedUpBy) )
	{
		Debug.Log("WOW! Worth " + points + " points!");

		Destroy(gameObject);

	}

}