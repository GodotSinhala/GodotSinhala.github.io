---
sidebar_position: 4
---

# Editor Interface Basics - 01

අන්තිමට හැදෙන්නෙ මේ වගේ එකක්:  
![Editor Interface](img/Editor%20Interface%20Basics%2001/editor%20interface%20in%20completed%20project.png)

හැබැයි ඊට කළින් editor interface එක ගැන ටිකක් බලලා ඉමු.  
අපි දැනටමත් empty project එකක් හදලා තියෙන්නෙ. 

![Create a Scene](img/Editor%20Interface%20Basics%2001/editor_interface.png)

## Demo Scene එක

ඔයාගෙ **Scene Panel** එකේ, **3D Scene** කියන එක click කරන්න.  
![Create a Scene](img/Editor%20Interface%20Basics%2001/Create%20a%20Scene.png)

දැන් interface එක මේ වගේ පෙනේවි:  
![3D Scene](img/Editor%20Interface%20Basics%2001/3D%20Scene.png)

**Node3D** කියන එක **Demo** කියලා Rename කරන්න.  
ඒක කරන්න පුලුවන් **Node3D** කියන එක උඩ double-click කරලා,  
එහෙම නැත්නම් right-click කරලා **Rename** තෝරන්න.  
![Demo Scene](img/Editor%20Interface%20Basics%2001/Demo%20Scene.png)

ඊළගට අපි scene එක save කරන්න යන්නෙ.  
ඒකට **Ctrl + S** Press කරා නම් හරි.  
ඊට පස්සෙ එන මෙන්න මේ window එකේ "demo" වෙනුවට ඔයාට කැමති නමක් දෙන්න පුලුවන්, ඒත් දැනට ඒක තියෙන විදියටම තියලා **Save** button එක Press කරන්න.  
![Save Scene](img/Editor%20Interface%20Basics%2001/Save%20Scene.png)


:::info මොකක්ද මේ .tscn 🤔  
Godot වලදි scene save වෙන්නෙ `.tscn` file විදියට. ඒක හරියට අපේ nodes ටික දාපු මල්ලක් වගේ.
:::

:::info Ctrl + S කියන්නෙ හොද පුරුද්දක් 💾  
වැඩක් කරනගමන් පොඩි step එකෙන් පොඩි step එකට project එක save කරන්න. ඒකට යන්නෙ තප්පර ගානයි.  
වැරදිලාවත් crash වුනොත් එතකොට ගොඩක් දේවල් නැති වෙන්නෙ නෑ.  
:::

Save කරාට පස්සේ **demo.tscn** file එක, **FileSystem panel** එකේ බලගන්න පුලුවන්.   
![Demo scene in filesystem panel](img/Editor%20Interface%20Basics%2001/Demo%20scene%20in%20filesystem%20panel.png)



## Nodes

Godot වලදි, **nodes** කියන්නෙ හැමදේකම **building blocks** (තැනුම් ඒකක).

හැම node එකකටම තියෙනවා ඒකටම ආවේණික වැඩක් - හරියට 3D model එකක් පෙන්නනවා, sound එකක් play කරනවා, එහෙමත් නැත්නම් physics ගැන බලාගන්නවා වගේ දේවල්. අපි කරන්නෙ node පිළිවෙලකට එකතු කරලා game එක හදන එක.


:::info Nodes ගැන 🧩  
Node කියන්නෙ game එක හදන කෑලි විදියට හිතන්න. අන්න ඒ කෑලි එකට එකතු කරලා ඔයාට ඕන දේ කරගන්න පුලුවන්.  
උදාහරණයක් විදියට: light node එකකින් පුලුවන් scene එක එළිය කරන්න. camera node එකකට පුලුවන් game world එක පෙන්නන්න.  
:::

මේ scene එකේදි, **Demo** කියන්නෙ අපේ root node එක. අපිට ඒකට child nodes එකතු කරලා game එක හදාගන්න පුලුවන්.  

Node එක උඩ right-click, **Add Child Node** click කරන්න.  
![Add Child Node](img/Editor%20Interface%20Basics%2001/Add%20Child%20Node.png)

**Create New Node** window එක ඒවි.  
**StaticBody3D** කියලා Search කරන්න, ඊළගට **Create** click කරන්න.  
![Create New Node 2](img/Editor%20Interface%20Basics%2001/Create%20New%20Node%202.png)

:::info Quick Tip 💡  
ඔයාට මෙතනදි "StaticBody3D" කියලා මුළු වචනෙම type කරන්න ඕන නෑ. මුල් අකුරු ටික type කරා නම් ඇති. (“sta” type කරා නම් StaticBody3D ඒවි)
:::

අපි තවත් child node එකක් add කරමු - මේ පාර හැබැයි **StaticBody3D** node එක යටතේ.  
**StaticBody3D** උඩ right-click කරලා, **Add Child Node** තෝරන්න,  
![Add another child node](img/Editor%20Interface%20Basics%2001/add%20another%20child%20node.png)  

**MeshInstance3D** කියලා search කරලා,  **Create.** click කරන්න.
![Search for MeshInstance3D](img/Editor%20Interface%20Basics%2001/Search%20for%20MeshInstance3D.png)  

දැන් මේ වගේ පෙනේවි:  
![StaticBody3D + MeshInstance3D](img/Editor%20Interface%20Basics%2001/StaticBody3D%20+%20MeshInstance3D.png)

Scene panel එකේදි ඔයා **MeshInstance3D** select කරාම,  
පෙනේවි **Inspector** එකේ properties වෙනස් වෙලා කියලා.  
![Inspector MeshInstance3D](img/Editor%20Interface%20Basics%2001/Inspector%20MeshInstance3D.png)

එතන ඔයාට බලාගන්න පුලුවන් **Mesh** property එක.  
Default ඒකෙ මුකුත්ම නෑ - අන්න ඒකයි ඔයාට viewport එකේ මුකුත්ම පේන්නෙ නැත්තෙ.

ඒක ඉස්සරහින් තියෙන පොඩි arrow එක click කරලා එන menu එකෙන් **BoxMesh** කියන එක තෝරන්න.  
![BoxMesh](img/Editor%20Interface%20Basics%2001/boxmesh.png)

දැන් ඔයාට පේනවා ඇති Box එකක්. අන්න ඒකයි **mesh** එකකින් වෙන්නෙ!  
![Box in viewport](img/Editor%20Interface%20Basics%2001/Box%20in%20viewport.png)

:::info Meshes ගැන 🧱  
Mesh එකක් කියන්නෙ ත්‍රිමාන හැඩයක්. හරියට ඝනකය, ගෝලය, නැත්නම් custom model එකක් වගේ දෙයක් (කාර් එකක්, මනුස්සයෙක් වගේ හැඩයක්). Mesh එක නිසා තමයි අපිට object එක පේන්නෙ.  
:::



## Collision දාමු

**StaticBody3D** එකට තව child node එකක් එකතු කරමු.  
කලින් කරා වගේ ඒක උඩ right-click කරලා පුලුවන්,  
එගෙම නැත්නම් **Ctrl + A** කියන shortcut එකෙන් පුලුවන් “Create New Node” window එක ඉක්මනට open කරගන්න.  
![ctrl+A to add nodes](img/Editor%20Interface%20Basics%2001/ctrl+A%20to%20add%20nodes.png)

:::info Shortcut වලින් වැඩේ ලේසි කරගන්න ⚡  
Shortcut නිසා ගොඩක් වෙලාව ඉතුරු කරගන්න පුලුවන්. මේවා අමතක වුනාට බය වෙන්න දෙයක් නෑ, dropdown එකේ option එක ඉස්සරහින්ම ඒකට අදාළ shortcut එක දාලා තියෙන්නෙ.  
(කොළ වල ලියාගෙන පාඩම් කරන් මතක තියාගන්න එපා මේවා🙂)
:::

**CollisionShape3D** search කරලා, **Create** click කරන්න.    
![CollisionShape3D](img/Editor%20Interface%20Basics%2001/CollisionShape3D.png)

Inspector එකේ, **Shape** property එකට **BoxShape3D** කියන එක click කරන්න. 
![Collision shape assigned](img/Editor%20Interface%20Basics%2001/Collision%20shape%20assigned.png)

දැන් ඔයාට පේන ලා නිල් පාට box outline එක තමයි collision area එක.  
![Collision shape assigned 2](img/Editor%20Interface%20Basics%2001/Collision%20shape%20assigned%202.png)

**StaticBody3D** කියන එක **TheBox** කියලා Rename කරගන්න.  
ඔයාට right-click → **Rename** හරි, ඒක උඩ double-click කරලා හරි නම වෙනස් කරගන්න පුලුවන්.  
![Rename staticbody3d](img/Editor%20Interface%20Basics%2001/Rename%20staticbody3d.png)

:::info Node වලට නම් දැමීම 🏷️  
Node rename කරන එක project එක පිළිවෙලකට තියාගන්න මාරම වැදගත්.  
මෙහෙම නම් වෙනස් කරාට පස්සෙ, ඔයාට මේ node එක මොන වර්ගෙ එකක්ද කියලා බලාගන්න ඕන වුනොත්, ඒ node එක උඩට mouse එක hover කරන්න. එතකොට පහළ පින්තූරෙ වගේ පොඩි tool tip එකක් පෙනේවි. ඒකෙ node type එක තියෙනවා.   
![rename staticbody3d 2](img/Editor%20Interface%20Basics%2001/Rename%20staticbody3d%202.png)  
:::

ඒ වගේම right click menu එකෙන් nodes delete, copy, duplicate කරන්නත් පුලුවන්.

## Root, Parent, සහ Child

මේ වචන ටික පොඩ්ඩක් පැහැදිලි කරගමු.

Godot වලදි හැමදේම හැදෙන්නෙ අතු බෙදුණු ගහක් වගේ. මේකට කියනවා "tree structure" එකක් කියලා.  
මේ සැකැස්ම නිසා project එක පිළිවෙලට තියාගන්න ලේසියි.  

* **Root Node එක** මේක තමයි scene එකේ උඩින්ම ඉන්නෙ. Scene එකේ අනිත් හැම node එකක්ම මේකට සම්බන්ධ වෙලා තමයි තියෙන්නෙ.
* **Parent Node** එක ඕනම node එකක් වෙන්න පුලුවන්. මේක යටතේ එකක් හරි කීපයක් හරි child nodes තියෙන්න පුලුවන්.
* **Child Node** එකත් ඕනම node එකක් වෙන්න පුලුවන්. එයාගෙ parent යටතේ තමයි ඉන්නෙ.

මේ අකෘතිය නිසා Godot දන්නවා කොහොමද දේවල් සම්බන්ධ වෙලා තියෙන්නෙ කියලා. උදාහරණයක් විදියට, parent ව move කලොත්, එයාගෙ children ලත් ඒකත් එක්කම move වෙනවා.

![Root Parent Child](img/Editor%20Interface%20Basics%2001/Root%20Parent%20Child.png)

අපේ project එකේ, **Demo** කියන්නෙ **root node** එක.  
**TheBox** ට **child nodes** 2ක් තියෙනවා - MeshInstance3D සහ CollisionShape3D.  
ඒ දෙන්නට ඉන්නෙ එකම **parent**, ඒ තමයි **TheBox**.  
ඒ වගේම **TheBox**ටත් ඉන්නවා parent කෙනෙක්: **Demo**. ඒක තමයි root node එක වෙන්නෙත්.

## Viewport එක
මේකත් ගොඩක් වැදගත් area එකක්. මෙතනින් තමයි අපි අපේ game එකේ levels හදන්නෙ, ඒ වගේම game world එක බලාගන්නෙ.  

![Viewport](img/Editor%20Interface%20Basics%2001/Viewport.png)  
ඔයාට මෙන්න මේ tools ටික උඩින් බලාගන්න පුලුවන්: **Move (W)**, **Rotate (E)**, සහ **Scale (R)**.  
Mouse එක පාවිච්චි කරලා navigate වෙන්න පුලුවන්:

- **Right-click එක්ක drag** කරලා වටපිට බලන්න පුලුවන්.  
- **Right-click + W, A, S, D keys** වලින් first-person game එකකදි වගේ ඇතුලට යන්න පුලුවන්.
- **Shift** එක ඔබාගෙන move වෙද්දි ඉක්මනට move වෙන්න පුලුවන්.  
- **Scroll wheel** එකෙන් zoom in out කරන්න පුලුවන්.  
- **Middle-click එක්ක drag** කලොත් pan කරන්න පුලුවන්.  
- object එකක් select කරලා **F** එබුවොත් ඒකට focus කරන්න පුලුවන්.  

මේ පාට ඊතල වලින් viewport එකේ මෙන්න මේ අක්ෂ ටික පෙන්නන්නෙ:  
- **රතු (X)**  
- **කොළ (Y)**  
- **නිල් (Z)**  

දැන්ම මේ දේවල් master කරන්න හදිස්සි වෙන්න එපා. නිකන් try කරලා බලන්න.  
ඉස්සරහට යද්දි හොදට viewport එක පාවිච්චි කරන්න ඉබේම ඉගෙනගනීවි.  

:::info නිකන් Godot එකේ වටපිට බලන්න 😋  
මේ දේවල් අමාරු නෑ, පොඩි හරි අමාරු ගතියක් දැනෙනවනම් ඒ ඔයා අලුත් නිසා. ඔයා හිතනවට වඩා ඉක්මනට මේ දේවල් එක්ක comfortable වෙයි ඉස්සරහට!  
:::
