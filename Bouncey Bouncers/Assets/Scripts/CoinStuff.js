#pragma strict 

public var points : int = 5; 
public var pickedUpBy : String = "Player";  
														
function OnTriggerEnter2D(other : Collider2D) //in this function our parameter is other and it is of type Collider2D
{
	if ( other.CompareTag(pickedUpBy) )
	{
		Debug.Log("WOW! Worth " + points + " points!");

		Destroy(gameObject);

	}

}