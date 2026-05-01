---
sidebar_position: 8
---

# තණකොළ - වතුර - අහස  

දැන් අපේ walking sim එක ගොඩක් දුරට ඉවරයි, ඒත් අපිට ඒක තවත් ලස්සන කරන්න පුලුවන්.  

ඒ වගේම Godot වල තවත් වැදගත් දේවල් ටිකක් ගැනත් කියන්න තියෙනවා. addons, shaders වගේ දේවල්.  
තණකොළ, වතුර, අහස හදන ගමන් මම ඒවා පැහැදිලි කරන්නම්.  

:::info renderer එක 'Forward+' කරන්න ⚠
![Grass](<img/Grass, Water, and Sky/f+.png>)
තණකොළ, වතුර දාන්න කලින්, renderer එක නම් 'Forward+' කරන්න වෙනවා. එහෙම නැත්නම් shaders හරියට වැඩ කරන එකක් නෑ.  
කලින් ඉදන්ම 'Forward+' නෙවෙයි නම් තිබුණෙ, 'Forward+' select කරන්න. ඊළගට 'Restart Project' click කරන්න.  
:::

## තණකොළ

අපි දැන් මේ හිස් පොළව තණකොළ වලින් පුරවමු. දැන් ඔයාගෙ scene එක පේනවා ඇත්තේ මේ විදියට:  
![Grass](<img/Grass, Water, and Sky/grass (1).png>)

තණකොළ දාන්න, අපිට ඕන වෙනවා **addon** එකක්.  

**AssetLib** tab එකට මරු වුනාම මේ විදියට තමයි පේන්නෙ.  
(මේ වැඩේට internet ඕන)  
![Grass](<img/Grass, Water, and Sky/grass (2).png>)

“grass” කියලා search කරාම මෙන්න මේ addon එක පෙන්නාවි.  
![Grass](<img/Grass, Water, and Sky/grass (3).png>)

ඒ addon එක උඩ click කරලා, Download click කරන්න.  
![Grass](<img/Grass, Water, and Sky/grass (4).png>)

download වෙන්න වැඩි වෙලාවක් යන එකක් නෑ.  
![Grass](<img/Grass, Water, and Sky/grass (5).png>)

ඊළගට **Install** click කරන්න. වෙන මුකුත් settings වෙනස් කරන්න එපා.  
![Grass](<img/Grass, Water, and Sky/grass (6).png>)

installation එකට පස්සෙ, message එකක් ඒවි හරියට install වුණා කියලා.  
FileSystem panel එකේ **addons** කියලා අලුත් folder එකක් හැදිලා තියෙනවා බලාගන්න පුලුවන්.  

Ok click කරල ආයෙ 3D view එකට යන්න.  
![Grass](<img/Grass, Water, and Sky/grass (7).png>)

මේකට යන්න: **Project → Project Settings → Plugins**.  
අපි install කරපු plugin එක එතන ඇති, ඒත් තාම enabled කරලා නෑ.  
![Grass](<img/Grass, Water, and Sky/grass (8).png>)

Plugin එක enable කරලා window එක close කරන්න.  
![Grass](<img/Grass, Water, and Sky/grass (9).png>)

**Demo** node එක select කරලා Ctrl + A ඔබන්න.  
**grass** කියලා search කරන්න, **SimpleGrassTextured** node එක හම්බුවේවි.  
Create click කරන්න.
![Grass](<img/Grass, Water, and Sky/grass (10).png>)

Viewport එකේ brush එකක් බලාගන්න පුලුවන්. මේකෙන් ඇදලා තණකොළ paint කරන්න පුලුවන්.  
![Grass](<img/Grass, Water, and Sky/grass (11).png>)

Bracket keys [] වලින් brush radius එක අඩු වැඩි කරන්න පුලුවන්.  
![Grass](<img/Grass, Water, and Sky/grass (12).png>)

+ - keys වලින් density එක (තණකොළ වල ඝනත්වය) අඩු වැඩි කරන්න පුලුවන්.  
![Grass](<img/Grass, Water, and Sky/grass (13).png>)

Radius එකයි density එකයි ගැලපෙන විදියට වෙනස් කරගෙන, ඔයාට පුලුවන් පොළවට තණකොළ paint කරන්න.  
WASD keys වලින් viewport එකේ move වෙන්න පුලුවන්.  
Viewport movement practice වෙන්නත් එක්ක මේක හොද task එකක්.  
![Grass](<img/Grass, Water, and Sky/grass (14).png>)

Erase tool එකෙන් තණකොළ අයින් කරන්න පුලුවන්. Shortcut එක X.  
![Grass](<img/Grass, Water, and Sky/grass (15).png>)

D key එක ඔබලා පුලුවන් airbrush mode එකට ආයෙත් එන්න.  
ගැලපෙන brush size පාවිච්චි කරලා වැඩේ ඉක්මනට කරගන්න.  
![Grass](<img/Grass, Water, and Sky/grass (16).png>)

Erase tool එකෙන් තණකොළ අයින් කරලා පුලුවන් පොඩි පාරවල් වගේ ඒවා හදාගන්න.  
![Grass](<img/Grass, Water, and Sky/grass (17).png>)

වෙන node එකක් උඩ click කරලා grass painting mode එකෙන් අයින් වෙන්න පුලුවන්.  
![Grass](<img/Grass, Water, and Sky/grass (18).png>)

දැන් ඔයාට තියෙනවා පොඩි wind animation එකක් එක්ක ලස්සන තණකොළ ටිකක්.  
තණකොළ දාන වැඩෙන් ඔයා ඉගෙන ගත්තා කොහොමද addon එකක් පාවිච්චි කරලා ඔයාගෙ වැඩ ලේසියෙන් කරගන්නෙ කියලා. මොකද අපි තණකොළ ගහෙන් ගහ හිටෙව්වේ නෑ, addon එක තමයි වැඩේ ලේසි කරේ.  
![Grass](<img/Grass, Water, and Sky/grass (19).png>)

:::info Shortcuts 🌾  
**Brush size**: [ ]  
**Density**: + -  
**Paint mode**: D  
**Erase mode**: X  

**Viewport movement**: Right-click + W A S D  
**Fast movement**: move වෙන ගමන් Shift ඔබාගෙන ඉන්න   
:::

:::info Addon එකක් කියන්නෙ මොකක්ද? 🧩
Godot වල තියෙන හැකියාවන් වැඩිදියුණු කරන්න හදපු අමතර tools වර්ගයක් තමයි මේ addon කියන්නෙ. හැම දෙයක්ම 0 ඉදන් හදන්නෙ නැතුව, මේවා පාවිච්චි කරලා අපිට පුලුවන් අපේ වැඩ ඉක්මනට, ලේසියෙන් කරගන්න.  
:::

## වතුර

වතුර හදන්න කලින්; player, map එක, තණකොළ ටික hide කරලා ඉන්න.  
![Water](<img/Grass, Water, and Sky/grass (20).png>)

**MeshInstance3D** node එකක් create කරලා ඒකට **QuadMesh** එකක් assign කරන්න.  
![Water](<img/Grass, Water, and Sky/grass (21).png>)

මේ විදියෙ එකක් ඒවි. ඒක **Water** කියලා rename කරන්න.  
![Water](<img/Grass, Water, and Sky/grass (22).png>)

**QuadMesh** උඩ click කරලා ඒකෙ sub-properties open කරගන්න.  
![Water](<img/Grass, Water, and Sky/grass (23).png>)

Orientation එක face **Y** කියලා වෙනස් කරන්න.  
![Water](<img/Grass, Water, and Sky/grass (24).png>)

Size එක **500 x 500** වලට ලොකු කරගන්න.  
![Water](<img/Grass, Water, and Sky/grass (25).png>)

ඊළගට, ඒකෙ **Material** property එකට **ShaderMaterial** එකක් add කරන්න.  
![Water](<img/Grass, Water, and Sky/grass (26).png>)  

ආයෙත් **ShaderMaterial** එක උඩ click කරලා ඒකෙ sub-properties open කරගන්න.  
![Water](<img/Grass, Water, and Sky/grass (27).png>)  

Create a **new shader** click කරන්න.  
![Water](<img/Grass, Water, and Sky/grass (28).png>)  

 හැම දෙයක්ම තියෙන විදියටම තියාගෙන, **folder icon** එක click කරන්න.  
![Water](<img/Grass, Water, and Sky/grass (29).png>)  

**Scripts** folder එක තෝරලා ඒකෙ නම **water** විදියට වෙනස් කරන්න. Open ඔබන්න.  
![Water](<img/Grass, Water, and Sky/grass (30).png>)  

**Create** ඔබන්න.  
![Water](<img/Grass, Water, and Sky/grass (31).png>)  

ඊළගට, **water.gdshader** එක උඩ click කරන්න. Shader editor එක යටින් open වෙනවා බලාගන්න පුලුවන් වෙයි.  
![Water](<img/Grass, Water, and Sky/grass (32).png>)  

දැනට තියෙන code එක අයින් කරලා, මෙන්න මේ පහළ තියෙන එක දාගන්න.  
**Code credits:** [Toon Water Shader](https://godotshaders.com/shader/toon-water/)

```
shader_type spatial;

render_mode unshaded;

uniform float slide_speed = 0.3;
uniform float wobble_speed = 1.0;
uniform float wobble_intensity = 0.4;
uniform float texture_scale = 0.2;
uniform sampler2D water : repeat_enable;
uniform sampler2D depth_texture : source_color, hint_depth_texture;

varying vec2 sample_choord;

void vertex() {

	VERTEX.y += sin(TIME * wobble_speed + (VERTEX.x + VERTEX.z) * 0.3) * 0.2;

	sample_choord = VERTEX.xz;
}

void fragment() {

	vec3 color1 = vec3(1,1,1);
	vec3 color2 = texture(
		water,
		vec2(
			(sample_choord.x + sin(TIME * wobble_speed) * wobble_intensity + TIME * slide_speed) * texture_scale,
			(sample_choord.y + cos(TIME * wobble_speed * 0.5) * wobble_intensity) * texture_scale
		)
	).rgb;

	float depth = texture(depth_texture, SCREEN_UV).x;
	vec3 ndc = vec3(SCREEN_UV * 2.0 - 1.0, depth);
	vec4 view = INV_PROJECTION_MATRIX * vec4(ndc, 1.0);
	view.xyz /= view.w;
	float linear_depth = -view.z;

	float object_depth = FRAGCOORD.z;
	vec3 object_ndc = vec3(SCREEN_UV * 2.0 - 1.0, object_depth);
	vec4 object_view = INV_PROJECTION_MATRIX * vec4(object_ndc, 1.0);
	object_view.xyz /= object_view.w;
	float linear_object_depth = -object_view.z;

	ALBEDO = mix(color1, color2, smoothstep(0.0, 4.0, linear_depth - linear_object_depth)) * 0.5; // Darken by 20%
}
```

Paste කරාට පස්සෙ, ඔයාට පේනවා ඇති පොඩි animation එකක්.  
![Water](<img/Grass, Water, and Sky/grass (33).png>)

**Shader Parameters** යටතේ, water texture එකක් assign කරන්න ඕන.  
![Water](<img/Grass, Water, and Sky/grass (34).png>)

මම මේකට පාවිච්චි කරන්නෙ මෙන්න මේ water texture එක: <img src="https://opengameart.org/sites/default/files/y2k_water_texture.png" width="128px" height="128px" />  
Download link: [Y2K Water Texture](https://opengameart.org/content/y2k-water-texture)

Texture එක download කරලා, ඔයාගෙ **assets** folder එකට දාගන්න.  
![Water](<img/Grass, Water, and Sky/grass (35).png>)

Water shader slot එකට ඒක drag & drop කරන්න. දැන් පේනවා ඇති stylish water mesh එකක්.  
![Water](<img/Grass, Water, and Sky/grass (36).png>)

Hide කරපු player, map එක, තණකොළ ආයෙත් visible කරන්න. වතුර වල Y position value එක **2.5**ට වෙනස් කරන්න. දැන් වතුර තියෙනවා!  
![Water](<img/Grass, Water, and Sky/grass (37).png>)

:::info Shader එකක් කියන්නෙ මොකක්ද? 🎨
Shader එකක් කියන්නෙ object එකක පෙනුම මොන විදියද කියලා පාලනය කරන පොඩි program එකක්. ඒකෙන් පුලුවන් object එකක පාට, textures, lighting වල වෙනස්කම් කරන්න. ඒ වගේම වතුර, ගින්දර වගේ visual effects හදන්න.  
:::

## අහස

ඊළගට තියෙන්නෙ අහසෙ වැඩ.  
**WorldEnvironment** node එක උඩ click කරන්න. ඊළගට Inspector එකේ, **Environment** කියන property එක click කරන්න, ඊළගට **Sky** click කරන්න.  
![Sky](<img/Grass, Water, and Sky/grass (38).png>)

දැනට ඒකෙ තියෙන්නෙ procedural sky එකක්.  
අපි ඒකට දාන්න යන්නෙ **Panorama Sky** එකක්. **Panorama Sky** select කරන්න.  
![Sky](<img/Grass, Water, and Sky/grass (39).png>)

ඊළගට මෙන්න මේ වගේ කලුවර වෙයි:  
![Sky](<img/Grass, Water, and Sky/grass (40).png>)

Panorama Sky material එක උඩ click කරන්න. ඒකට panorama image එකක් ඉල්ලනවා.  
![Sky](<img/Grass, Water, and Sky/grass (41).png>)

අපිට sky image එකක් ඕන.  
මෙන්න මේකෙන් download කරගන්න: [Sky Clouds 09 – 2K Resolution](https://freestylized.com/skybox/sky_clouds_09/)
![Sky](<img/Grass, Water, and Sky/download2k.png>)

Download කරපු zip file එක extract කරලා,  
sky image එක ඔයාගෙ project එකේ **assets** folder එකට දාගන්න.  
![Sky](<img/Grass, Water, and Sky/grass (42).png>)

ඊළගට ඒක Panorama slot එකට drag and drop කරන්න.  
![Sky](<img/Grass, Water, and Sky/grass (43).png>)

දැන් ඔයාට vibrant, stylish අහසක් බලාගන්න පුලුවන්.  
![Sky](<img/Grass, Water, and Sky/grass (44).png>)

අහසෙ වැඩෙත් හරි!  