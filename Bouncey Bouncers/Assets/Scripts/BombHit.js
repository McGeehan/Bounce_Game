#pragma strict

function OnCollisionEnter2D (other : Collision2D) //When collisions occur, the bomb dissappears
{
	if (other.gameObject.CompareTag("Ground"))
	{
		GameData.numMissed++; //also show shortcut NumMissed++;
		GameData.DisplayScore();
		Destroy(gameObject);

	}
}

