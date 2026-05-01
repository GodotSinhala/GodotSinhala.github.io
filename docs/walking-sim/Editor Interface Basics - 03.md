---
sidebar_position: 6
---

# Editor Interface Basics - 03

අපි පොඩ්ඩක් වැඩේ පිළිවෙලට කරමු.

## Reusable Scenes
අපි හදපු දේවල් ආයෙ ආයෙත් පාවිච්චි කරන්න පුලුවන්. මේකෙන් වෙලාව ඉතුරු වෙනවා වගේම game එකේ කාර්යක්ෂමතාවත් (performance) වැඩිවෙනවා.  
අපි **TheBox** node එක වෙනම scene එකක් විදියට save කරමු.

ඒක කරන්න, node එක උඩ right-click කරලා එන dropdown එකේ,  
**Save Branch as Scene** click කරන්න.  
![save branch as scene](img/Editor%20Interface%20Basics%2003/savebranch.png)

ඊළගට ඔයාට මේ window එක පෙනේවි. මේකෙත් නම වෙනස් කරන්න පුලුවන්, ඒත් දැනට මේ suggest කරපු නම තියාගෙන **Save** කරන්න.  
![save branch as scene](img/Editor%20Interface%20Basics%2003/savebranch2.png)

ඒක තනි node එකක් විදියට ඇකිලෙනවා ඔයාට බලාගන්න පුලුවන්.  
අපිට දැන් ඒක ලේසියෙන්ම duplicate කරන්න පුලුවන්.  

Right-click කරලා **Duplicate** තෝරන්න,  
එහෙම නැත්නම් select කරලා ඊළගට **Ctrl + D** ඔබන්න.  
![duplicate node](img/Editor%20Interface%20Basics%2003/duplicatenode.png)

මෙහෙම කරාම එක උඩ එක වැටුණු boxes දෙකක් හැදේවි,  
ඊතලෙන් අල්ලලා ඇදලා එකක් පොඩ්ඩක් එහාට කරන්න.  
![move cubes](img/Editor%20Interface%20Basics%2003/movecubes.png)

Duplicate කරන්නෙ නැතුව මේක තව විදියකට කරන්න පුලුවන්.  
අපි ඒක scene එකක් කරපු නිසා, **FileSystem** panel එකෙත් මේක බලාගන්න පුලුවන්.  
අන්න ඒක viewport එකට drag and drop කරා නම් ඒත් වැඩේ හරි.  
![drag cube](img/Editor%20Interface%20Basics%2003/dragcube.png)

මම දැන් ඒවගෙ positions සහ rotations වෙනස් කරනවා.  
![change positions and rotations](img/Editor%20Interface%20Basics%2003/changeposrot.png)

ඊළගට **Inspector** එකේ preview එක දිහා බලාගෙන, camera එක move කරනවා.   
![move camera](img/Editor%20Interface%20Basics%2003/movecamera.png)


## පිළිවෙලට තියමු

පොඩ්ඩක් ඔයාගෙ **Scene** panel එක දිහා බලන්න.  
![unorganized scene panel](img/Editor%20Interface%20Basics%2003/unorganizedscenepanel.png)  
අපිළිවෙලයි නේ? ඒක පොඩ්ඩක් හදමු.  

අලුතින් **Node3D** node එකක් add කරලා, **“Boxes”** කියලා ඒකෙ නම වෙනස් කරන්න.  
![rename it to "Boxes"](img/Editor%20Interface%20Basics%2003/boxes.png)

ඊළගට අපේ **TheBox** node ටික, **Boxes** node එකේ childrenලා කරමු. ඒක කරන්නෙ මෙහෙමයි:  
**Ctrl** key එක ඔබාගෙන **TheBox** node ටික උඩ click කරන්න. (ඔක්කොම select වේවි, දැන් ctrl key එක අතාරින්න පුලුවන්)  
ඊළගට ඒ ටික **Boxes** node එක උඩට ඇදගෙන ඇවිත් අතාරින්න. (drag and drop)  
![drag boxes to boxes](img/Editor%20Interface%20Basics%2003/drag%20boxes%20to%20boxes.png)

දැන් මේ විදියට පේනවා ඇති:  
![Boxes parent](img/Editor%20Interface%20Basics%2003/reparent.png)  
අපි කලින් කතාකළා වගේ, දැන් **Boxes** කියන්නෙ **TheBox** node වල parent node එක.  

:::info Reparenting 💡  
මේ වැඩේට කියන්නෙ *reparenting* කියලා.  
ඒකම තව විදියකට කරන්නත් පුලුවන්:  
අදාළ node ටික select කරලා, right-click කරන්න, ඊළගට තෝරන්න **Reparent to New Node.**  
ඊළගට එන window එකෙන් ඔයාට ඕන parent node type එක select කරන්න තියෙන්නෙ.  
:::

:::info එකම වැඩේට ක්‍රම ගොඩයි 💡  
Godot වලදි, එකම වැඩේ කරගන්න ක්‍රම සෑහෙන්න තියෙනවා - හරියට දැන් අපි reparenting කරා වගේ.  
ඔයා engine එකත් එක්ක කාලයක් ඉදිද්දි, ඉබේම ඔයා කැමති ක්‍රමේට හුරුවෙයි.  
ඉස්සරත් කිව්වා වගේ ඔක්කොම මතක තියාගන්න try කරන්න එපා. වැදගත්ම දේ *practice එක!*  
:::

මේකනම් කලින් දකින්නත් ඇති;  
මෙන්න මේ පුංචි ඊතල වලින් පුලුවන් nodes හකුලන්න, දිගාරින්න (expand & collapse).  
![expand collaps](img/Editor%20Interface%20Basics%2003/expandcollaps.png)

ඒක පොඩි වැඩක් වගේ පෙනුනට, ඔයාගෙ project එකට ගොඩක් nodes එකතු වෙද්දි, වැඩේ පිළිවෙලකට තියාගන්න මේවා උදව් වේවි.  

ඒ වගේම, මෙහෙම group කරන එකෙන්  
boxes තුනම එකපාර move, rotate, scale කරන්න පුලුවන්. **parent node** එක පාවිච්චි කරලා.  
![change things using parent](img/Editor%20Interface%20Basics%2003/parentmover.png)

මෙන්න මේ **eye icon** එකෙන්, nodes show/hide කරන්න පුලුවන්.  
![toggle visibility](img/Editor%20Interface%20Basics%2003/togglevisibility.png)


## FileSystem එක පිළිවෙලක් කරමු  

ඔයාගෙ **FileSystem** එක දිහා බලන්න. ඒකත් පිළිවෙලක් කරන්න පුලුවන්!  
![filesystem unorganized](img/Editor%20Interface%20Basics%2003/filesystemunorganized.png)

**res://** folder එක උඩ right-click කරලා, **Create New → Folder** select කරන්න.  
![create new folder](img/Editor%20Interface%20Basics%2003/createnewfolder.png)

ඒක **scenes** කියල නම් කරන්න.  
![folder name scene](img/Editor%20Interface%20Basics%2003/foldernamescene.png)

**assets** සහ **scripts** කියලත් folders 2ක් හදන්න.  
![assets scripts folders](img/Editor%20Interface%20Basics%2003/assetsscripts.png)

ඊළගට, **demo.tscn** සහ **the_box.tscn** දෙකම select කරලා (**Ctrl** ඔබාගෙන පුලුවන්)  
**scenes** folder එකට drag & drop කරන්න.  
![drag and drop them to scnes folder](img/Editor%20Interface%20Basics%2003/scenesdrag.png)

අන්තිමට, **.gd** file, **scripts** folder එකට move කරන්න.  
![scripts folder](img/Editor%20Interface%20Basics%2003/scriptsfolder.png)


## මූලික ටික ඉවරයි!  
දැන් ඔයා walking simulator එක හදන්න ලෑස්තියි.  
ඒකටත් අපි මේ project එකම තමයි පාවිච්චි කරන්නෙ.  
![End of basics](img/Editor%20Interface%20Basics%2003/endofbasics.png)

:::info අලුත් දේවල් අත්හදා බලන්න 💡  
ඔයා ඔයාගෙ dream game එක හදනව නෙවෙයි මේ, ඒ නිසා එක එක පිස්සු ideas try කරල බලන්න!  
මොකක්හරි කැඩුනොත්, ඒක delete කරලා අලුත් project එකක් හදන්න.  
දේවල් try කරලා බලන එක තමයි දෙයක් ඉගෙන ගන්න තියෙන ආතල්ම ක්‍රමය.  
:::

එහෙනම් basics ඉවරයි!  
walking simulator එකේදි හම්බුවෙමු!  
