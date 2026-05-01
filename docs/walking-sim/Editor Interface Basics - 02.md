---
sidebar_position: 5
---

# Editor Interface Basics - 02

එහෙනම් ඉස්සරහට යමු!

## Scripts
ඔයාගෙ පළවෙනි script එක ලියන්න වෙලාව හරි.  
අපි **TheBox** එකට තමයි script එක ලියන්නෙ. ඒකට මෙන්න මෙහෙම කරන්න:
* **TheBox** node එක Select කරන්න.  
* **Attach Script** icon එක උඩ click කරන්න. (හොයාගන්න බෑ නම් image එක බලන්න)  
* අනිත් දේවල් default විදියටම තියාගෙන, **Create** button එක click කරන්න.  

![Attach script](img/Editor%20Interface%20Basics%2002/attach%20script.png)

එකපාරටම ඔයාව code editor එකට මාරු කරාවි. මේ Godot වල තියෙන built-in code editor එක.  
![Script editor](img/Editor%20Interface%20Basics%2002/script%20editor.png)  
* උඩ tabs වලින්, ඔයාට ආයෙමත් 3D view එකට යන්න පුලුවන්.  
* ඔයාට පේනව ඇති TheBox node එක ඉස්සරහින් පොඩි icon එකක් තියෙනවා - ඒකෙන් කියවෙන්නෙ ඒකට script එකක් attache වෙලා කියලා.  
* ඔයාට ඕනම වෙලාවක script එක open කරන්න පුලුවන් ඒ icon එක උඩ click කරලා.  

:::info .GD File Format එක ගැන 🗒️  
**FileSystem** එක දිහා පොඩ්ඩක් බලන්න. ඔයාට පේනව ඇති අලුත් file එකක් හැදිලා තියෙනවා **the_box.gd** කියලා.  
![gd](img/Editor%20Interface%20Basics%2002/gd.png)  
`.gd` කියන extension එකෙන් කියවෙන්නෙ ඒක **GDScript** file ැකක් කියලා - **GDScript** තමයි Godot වල ප්‍රධාන scripting language එක, syntax සහ කියවීමේ පහසුව ගත්තම මේක සමාන කරන්න පුලුවන් Python වලට.  
:::

අපි code එක පැත්තට හැරෙමු.  
කලින් කිව්වත් වගේ, මම මේකෙදි code එකේ ගැඹුරට යන්නෙ නෑ. පොඩ්ඩක් ඉක්මනට පැහැදිලි කරගෙන යනවා විතරයි.  
![code](img/Editor%20Interface%20Basics%2002/code.png)  
`_ready()` function එක යටින් තියෙන `pass` කියන එක අයින් කරලා, මෙන්න මේක දාන්න:  

```
print("Hi, I'm TheBox")
```


ඊළගට **Ctrl + S** ඔබලා, ඔයාගෙ progress එක save කරන්න.

ඊළගට උඩ bar එකේ තියෙන **3D** button එක ඔබලා 3D viewport එකට මාරු වෙන්න.
![Top Bar](img/Editor%20Interface%20Basics%2002/topbar.png)

## Project එක Run කරමු

මේ project එක run කරන වෙලාවයි!
උඩ දකුණු පැත්තෙ කොනේ තියෙන **Play** icon එක ඔබන්න. (පින්තූරෙ බලන්න)
![Run Project](img/Editor%20Interface%20Basics%2002/runproject.png)

ඔයා මුලින්ම project එක run කරද්දි, මෙන්න මේ dialog එක පෙනේවි:  
![First Run](img/Editor%20Interface%20Basics%2002/firstrun.png)  
ඒකෙ **Select Current** කියන එක තෝරන්න. ඒකෙන් demo scene එක අපේ **main scene** එක කරාවි.
මේක එකපාරයි අහන්නෙ, first run එකේදි විතරයි.

:::info Main Scene එක වෙනස් කරන්න ඕන වුනොත්? ⚙️
(මේ project එකේදි, අපි demo එක main scene එක විදියට තියාගන්නවා. ඒ නිසා ඒක වෙනස් කරන්න ඕන නෑ මෙතෙන්දි.)
Main Scene එක වෙනස් කරන්න ඕන වුනොත් මෙන්න මේ step ටික කරන්න:

* **Project → Project Settings** වලට යන්න.
* **General → Application → Run** section එකට යන්න.
* “Main Scene” එකට ඉස්සරහින් තියෙන folder icon එක click කරලා අලුත් main scene එක තෝරගන්න.
  ![Change main scene](img/Editor%20Interface%20Basics%2002/change%20main%20scene.png)  
  මේක ඕන වෙන්නෙ ඔයාගෙ game එකේ scene ගොඩක් තිබිලා, ඒ අතරින් මොන එකද export කරපු game එකේ මුලින්ම පෙන්නන්න ඕන කියලා තීරණය කරද්දි.
  :::

Project එක run කලාට පස්සේ, ඔයාට පේන්නෙ මේ වගේ එකක්:
![Empty game](img/Editor%20Interface%20Basics%2002/run1.png)  
ඔව් ඔයා හරි - මේකෙ මුකුත් නෑ. මොකද අපි තාම camera එකක් දැම්මෙ නෑ!

ඒත් බලන්න console output එක දිහා, ඔයාට පේනවා ඇති:

```
Hi, I'm TheBox
```

ඒ කියන්නෙ ඔයාගෙ script එක වැඩකරලා! එහෙනම් පළවෙනි console output එකත් හරි!

ඔයාට game preview එකෙන් අයින් වෙන්න පුලුවන් **Close** button එක ඔබලා, එහෙම නැත්නම් Run button එක එහා පැත්තෙ තියෙන**Stop** button එක ඔබලා.

:::info Run කරන එක සම්බන්ධ Shortcuts ⌨️

* **F5** – project එක Run කරන්න
* **F8** – දැන් open එකේ තියෙන scene එක (current scene එක) Run කරන්න
* **F6** – current scene එක debug කරන්න 
  :::

## Camera එකක් දාමු

මේකට, root node එක (**Demo**) select කරන්න. ඊළගට **Ctrl + A** press කරලා “Create New Node” window එක open කරගන්න.
**Camera3D** කියලා Search කරලා **Create** ඔබන්න.
![Adding camera](img/Editor%20Interface%20Basics%2002/adding%20camera.png)

පේනවා ඇති මේ විදියට camera node එකක් එනවා:
![camera node](img/Editor%20Interface%20Basics%2002/camera%20node.png)

**Inspector** panel එකේ, ඔයාට පේනවා ඇති පොඩියට camera preview එකක්.  
දෑනට camera එක තියෙන්නෙ world origin එකේ, ඒ නිසා preview එකේ පේන්නෙ horizon එක (ක්ෂිතිජය) විතරයි.

Box එක බලාගන්න, අපිට camera එක පොඩ්ඩක් move කරන්න වෙනවා.
![move camera](img/Editor%20Interface%20Basics%2002/move%20camera.png)
**නිල් පාට ඊතලේ (Z අක්ෂෙ)** උඩ click කරගෙන drag කරන්න. ඒකෙන් පුලුවන් camera එක පස්සට ගෙනියන්න.
move කරද්දි preview එක update වෙනවා බලාගන්න පුලුවන්.

ඔයාට camera එක තියෙන තැන හරියටම වෙනස් කරන්න පුලුවන් Inspector එකේ තියෙන **Transform** properties වලින්.  
හරි මිනුමකට දෙයක් කරනවා නම් ඒක තමයි හොදම විදිය. හරියට මීටර් 2ක් උඩට උස්සනවා, අංශක 15ක් කරකවනවා, 3x විශාල කරනවා වගේ වැඩක් කරද්දි. (camer එකේදි විශාල කරන එක අදාල නෑ)  

අපි camera එක හරියටම **මීටර් 1.5ක්** Z අක්ෂය දිගේ උස්සමු.  
Inspector එකේ **Transform** කියන තැනට scroll කරන්න. ඊළගට **Z Position** එක `1.5` කරන්න.  
![move camera 1.5 on Z](img/Editor%20Interface%20Basics%2002/moveexact.png)

දැන් ආයෙත් project එක run කරලා බලන්න.  
![second run](img/Editor%20Interface%20Basics%2002/run2.png)
ඔයාට box එක පේනවා ඇති. ඒත් මොනවහරි අඩුයි වගේ නේද?  

ඔව්නෙ, ලයිට් නෑ!  
editor එකේදි, ඔයා දකින්නෙ default තියෙන lights. ඒත් ඇත්තම game එකට ඒවා දාලා නෑ.  
අපිට ඒක අපේ වෙනම කරන්න වෙනවා.  

Preview එක close කරලා ඊළගට ඒක හදමු.  

## Environment Settings

Lights සහ Environment එක හදාගන්න, viewport එකේ උඩ දකුණු කොණේ තියෙන, **dot තුනක් තියෙන icon එක** click කරන්න.  
![environment settings](img/Editor%20Interface%20Basics%2002/envsettings.png)

මේ තියෙනේ **Default Environment** එක සහ **Default Sun** - කලින් කිව්වා වගේ මේවා editor එකේ විතරයි, game එකේදි නෑ.  
![environment settings 2](img/Editor%20Interface%20Basics%2002/envsettings2.png)

මේවා game එකේ කොටසක් කරගන්න, මෙන්න මේ button 2ම click කරන්න:  
**“Add Sun to Scene”** සහ **“Add Environment to Scene.”**  

දැන් ඔයාට පේනවා ඇති අලුත් node 2ක් scene panel එකට ඇවිත් තියෙනවා.  
![scene panel](img/Editor%20Interface%20Basics%2002/scenepanel.png)  

:::info DirectionalLight3D ☀️
මේ Light node එක හරියට වැඩ කරන්නෙ ඇත්ත ලෝකෙ තියෙන ඉර වගේ.  
මේක කරකවලා ඔයාට පුලුවන් සෙවනැලි වැටෙන පැත්ත වෙනස් කරන්න.  
:::

:::info WorldEnvironment 🌍
මේ node එකෙන් ඔයාගෙ game world එක පේන්නෙ, දැනෙන්නෙ කොහොමද කියලා වෙනස් කරනවා - අහස, background color එක, ambient light, reflections, වගේ ගොඩක් දේවල් මේකෙන් පාලනය කරනවා.  
Inspector එකේ මේ node එකට අදාල settings වෙනස් කරලා ඔයාට lighting වල mood එක වෙනස් කරන්න, මීදුම වගේ effects දාන්න පුලුවන්.  
:::

තව එක පාරක් run කරලා බලමු!  
![run 3](img/Editor%20Interface%20Basics%2002/run3.png)
හැමදේම ලස්සනට වැඩ දැන්නම්!

**Congratulations - ඔයා ඔයාගෙ පළවෙනි 3D scene එක run කළා!**
