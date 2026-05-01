---
sidebar_position: 7
---

# The Walking Simulator

මුලින්ම project එකේ අනවශ්‍ය ටික අයින් කරමු.  
කැමතිනම් ඔයාට පුලුවන් අලුත්ම project එකකින් පටන්ගන්න.  

මම ඊළගට කරන්න යන දේවල් වලට අදාල නැති node ටික විතරක් delete කරන්නම්.  
**DirectionalLight3D සහ WorldEnvironment කියන nodes 2 delete කරන්න එපා.**  
(වැරදිලාවත් ඒක delete කරා නම්, කලින් lesson එකේ විදියට ආයෙ add කරගන්න.)  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(1).png)

## Playerව හදමු
**CharacterBody3D** node එකක් add කරන්න.  
(දැන් ඉදන් මම ආයෙ ආයෙ කියන්නෙ නෑ node create කරන විදිය. node එකේ නම කියලා ඒක add කරගන්න කිව්වම ඔයාට ඒක add කරගන්න පුලුවන් වෙන්න ඕන. අමතක නම් පොඩි උදව්වක්: *Ctrl + A ඔබන්න*)  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(2).png)

:::info හොද පුරුදු 🔥   
ඔයාට කලින් කරපු මොනවහරි දෙයක් අමතක නම්, ආයෙ ආපස්සට ගිහින් බලන්න.  
ඒක ගොඩක්ම සාමාන්‍ය දෙයක්. කිසිම අවුලක් හිතන්න එපා.  

ඔයාට දේවල් හොදටම මතක නම්, ඒක සුපිරියි!  
ඒත් දේවල් clear කරලා තියාගන්න මුල ඉදලම. ඔයාගෙන්ම ප්‍රශ්න අහන්න, අලුත් දේවල් try කරන්න!  
:::

CharacterBody3D node එකේ නම **“Player”** කියලා වෙනස් කරන්න.  

ඊළගට මෙන්න මේ node ටික **Player** යටතේ add කරන්න. (Playerගෙ childrenලා විදියට):  
* MeshInstance3D  
* CollisionShape3D  
* Camera3D  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(3).png)  

MeshInstance3D එකේ, **Mesh** property එකට **CapsuleMesh** එකක් set කරන්න.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(4).png)  

CollisionShape3D එකේ, **Shape** property එකට **CapsuleShape3D** එකක් set කරන්න.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(5).png)  

Camera එකේ position එක **Y අක්ෂය** ඔස්සේ **0.5**ක් කරන්න.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(6).png)  

දැන් **Player** node එක select කරලා script එකක් attach කරන්න.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(7).png)  

👆 මෙන්න මේ window එක open වේවි. බලන්න ඒකෙ file path එක -  
මෙතනම create එබුවොත් අපේ script එක හැදෙන්නෙ **scenes** folder එක ඇතුලෙ.  
ඒත් අපිට ඕන ඒක **scripts** folder එක ඇතුලෙ හදන්න.  

folder icon එක click කරන්න.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(7.5).png)  

arrow button එක පාවිච්චි කරලා project root එකට යන්න,  
ඊළගට හරි **scripts** folder එක ඇතුලට යන්න.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(8).png)  

file name එක ඒකම තියාගෙන **Open** click කරන්න.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(9).png)  

දැන් path එක හරි.  
බලන්න template එක විදියට **CharacterBody3D: Basic Movement** කියන එක select වෙලාද තියෙන්නෙ කියලා.  
**Create** click කරන්න.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(10).png)  

ඊළගට ඔයාට මේ පේන්නෙ basic movement template code එක.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(11).png)  

අපේ වැඩේට ඕන කරනවා පොඩ්ඩක් වෙනස් කරපු script එකක්.  
(මම මේ code එක ඔයාට දෙනවා. මොකද මේ tutorial එකෙන් අපි coding ගැන බලන්නෙ නැති නිසා.  
Coding ගැන පියවරෙන් පියවර ඉස්සරහට එන tutorial එකකින් බලමු.)  

ඔයාගෙ script එකේ ඔක්කොම අයින් කරලා, මෙන්න මේක දාගන්න:

```
extends CharacterBody3D

@export var SPEED = 3.0
@export var JUMP_VELOCITY = 4.5
@export var SENSITIVITY = 0.003

@onready var camera_3d: Camera3D = $Camera3D

func _ready():
	Input.set_mouse_mode(Input.MOUSE_MODE_CAPTURED)

# Handle mouse look and quit input
func _unhandled_input(event):
	if event is InputEventMouseMotion:
		rotate_y(-event.relative.x * SENSITIVITY)
		camera_3d.rotate_x(-event.relative.y * SENSITIVITY)
		camera_3d.rotation.x = clamp(camera_3d.rotation.x, deg_to_rad(-40), deg_to_rad(60))
	
	# Quit game when Esc is pressed
	if Input.is_action_just_pressed("esc"):
		get_tree().quit()
		
func _physics_process(delta: float) -> void:
	# Add the gravity.
	if not is_on_floor():
		velocity += get_gravity() * delta

	# Handle jump.
	if Input.is_action_just_pressed("jump") and is_on_floor():
		velocity.y = JUMP_VELOCITY

	# Get the input direction and handle the movement
	var input_dir := Input.get_vector("move_left", "move_right", "move_forward", "move_backward")
	var direction := (transform.basis * Vector3(input_dir.x, 0, input_dir.y)).normalized()
	if direction:
		velocity.x = direction.x * SPEED
		velocity.z = direction.z * SPEED
	else:
		velocity.x = move_toward(velocity.x, 0, SPEED)
		velocity.z = move_toward(velocity.z, 0, SPEED)

	move_and_slide()

```

ආයෙත් 3D view එකට එන්න. **Ctrl + S** ඔබලා save කරගන්න.  

## Playerව Scene එකක් කරමු

දැන් අපිට පුලුවන් Playerව scene එකක් විදියට save කරන්න. මතක ඇති අපි කලින් මේක කරා **"TheBox"** එකට.

* **Player** උඩ Right click කරන්න.
* **Save Branch as Scene** click කරන්න.
* හරියට path එක බලලා, **scenes** folder එකේ save කරන්න.  

මේ විදියට තමයි අන්තිමට පේන්නෙ:  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20\(12\).png)

## The Island Map
වැඩේ ලේසි වෙන්න, මම පොඩි 3D island map එකක් හැදුවා.  
ඒක මෙන්න මෙතනින් Download කරගන්න: **[Rocky Island House](https://skfb.ly/pBVZ6)**  
![The Walking Simulator](img/The%20Walking%20Simulator/download-model.png)  

මුලින්ම ඔයාගෙ **assets** folder එක open කරලා තියාගන්න.  
ඔයාට **FileSystem** tab එකෙන් folders ලේසියෙන්ම open කරන්න පුලුවන්.
**assets** folder එක උඩ right click කරලා **Open in File Manager** click කරන්න.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20\(14\).png)

ඔයාගෙ assets folder එක open වේවි.  

ඊළගට, download කරපු zip file එක extract කරන්න. ඒක ඇතුලෙ **"Map"** කියලා folder එකක් ඇති.    
extract කරපු **Map** folder එක ඔයාගෙ project එකේ **assets** folder එකට copy කරගන්න.

ඊළගට පෙනේවි මේ විදියට:  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20\(15\).png)

ආයෙත් Godot එකට එන්න.  
ඔයාට පෙනේවි files automatically import වෙනවා.  
FileSystem එක ඇතුලෙ **Map** folder එක තියෙනවා බලාගන්න පුලුවන්.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(16).png)  

දැන් 3D model file එක හොයාගන්න ඕන.  
මේ search box එකේ type කරන්න **"map"** කියලා.  
**Map.gltf** කියලා file එකක් ඒවි.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(17).png)  

ඒක උඩ right-click කරලා **Instanciate** select කරන්න.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(18).png)  

මෙන්න මේ ලස්සන map එක viewport එකේ බලාගන්න පුලුවන්.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(19).png)  

දැන් map එකට playerව hide වෙලා ඇත්තෙ.  
playerව පේන ගානට පොඩ්ඩක් උඩට ගන්න.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(20).png)  

ඔයා දැන් project එක run කරන්න බැලුවොත්, මේ විදියට errors ගොඩක් බලාගන්න පුලුවන් වෙයි:  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(21).png)  

මෙහෙම වෙන්නෙ අපි තාම **input actions** දාලා නැති නිසා.

## Input Actions දාමු

**Project → Project Settings** වලට යන්න.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(22).png)  

Project Settings window එකේ, **Input Map** tab එකට මාරු වෙන්න.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(23).png)  

**Add New Action** box එකේ, `move_forward` කියලා type කරලා, **Add** press කරන්න.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(24).png)  

මෙන්න මේ actions ටිකත් ඒ විදියට එකතු කරගන්න:  
`move_forward`  
`move_backward`  
`move_right`  
`move_left`  
`jump`  
`esc`  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(25).png) 

මේ actions වල නම් **හරියටම** ඒකම වෙන්න ඕන, මොකද script එක ඒ නමින් තියෙන actions තමයි move වෙන්න පාවිච්චි කරන්නෙ.  

ඊළගට `move_forward` action එක ඉස්සරහින් තියෙන මෙන්න මේ පුංචි **+ icon** එක click කරන්න.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(26).png) 

පොඩි window එකක් ඇවිත් ඔයා input කරන කල් බලන් ඉන්නවා.  
keyboard එකේ **W** key එක press කරන්න.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(27).png) 

ඊළගට **OK** කරන්න.  

දැන් මේ විදියට තමයි පේනව ඇත්තෙ:  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(28).png) 

මම **Up Arrow** එකත් add කරා ඒකටම.  
ඒ කියන්නෙ දැන් `move_forward` action එක විදි දෙකකට කරන්න පුලුවන්. **W** එකෙනුයි **Up Arrow** එකෙනුයි.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(29).png) 

මේ actions හැම එකටම ඒ විදියට කරන්න:

| Action          | Keys             |
|-----------------|------------------|
| `move_forward`    | W / Up Arrow     |
| `move_backward`   | S / Down Arrow   |
| `move_right`      | D / Right Arrow  |
| `move_left`       | A / Left Arrow   |
| `jump`            | Spacebar         |
| `esc`             | Esc key          |

ඔක්කොම හරියට assign කරාට පස්සේ, මෙන්න මේ විදියට පෙනේවි:  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(30).png) 

දැන් window එක close කරන්න.

Project එක run කරන වෙලාව!  
ඇවිදලා බලන්න පුලුවන් **W A S D** වලින්, වටපිට බලන්න පුලුවන් mouse එකෙන්,  
**Esc** එකෙන් exit වෙන්න පුලුවන්.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(31).png) 

:::info Errors තියෙද? 👾  
Project එක run කරද්දි මොනවහරි errors එනව නම්, input action වල නම් හරියට දැම්මද කියල ආයෙත් බලන්න.  
(`move_forward`, `move_backward`, `move_right`, `move_left`, `jump`, `esc`)
:::


මේ වෙනකල් හරියට කරා නම්, ඔයාටත් ඔයාගෙම කියල **walking simulator** එකක් ඇති.  
ඉවර නෑ තව තියෙනවා...  
