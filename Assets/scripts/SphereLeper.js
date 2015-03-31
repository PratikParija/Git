#pragma strict

function Start () {
	
}

function Update () {
	if(Input.anyKeyDown){
		MoveOver;
	}
}

function MoveOver(){
	var t:float = 0;
	var startPoint = Vector3(-5, 0, 0);
	var endPointt = Vector3(5, 0, 0);
	
	while(t<1){
		transform.position = startPoint*(1 - Mathf.Pow(t, 2))+endPoint*Mathf;
		t += 0.1 * Time.deltaTime;
		yield;
	}
}