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

public var radius: float = 5.0F;
public var power: float = 10.0F;
function Start() {
	var explosionPos: Vector3 = transform.position;
	var colliders: Collider[] = Physics.OverlapSphere(explosionPos, radius);
	for (var hit: Collider in colliders) {
		var rb: Rigidbody = hit.GetComponent.<Rigidbody>();
		if (rb != null)
			rb.AddExplosionForce(power, explosionPos, radius, 3.0F);
	}
}
