#!/usr/bin/env python3
import os
import requests

os.system("clear")
print("""
██     ██  █████  ██      ██      ██    ██ ██   ██ 
██     ██ ██   ██ ██      ██      ██    ██  ██ ██  
██  █  ██ ███████ ██      ██      ██    ██   ███   
██ ███ ██ ██   ██ ██      ██      ██    ██  ██ ██  
 ███ ███  ██   ██ ███████ ███████  ██████  ██   ██ 
                                                   """)
print("[INFO] Initializing...\n")
baseurl = "https://github.com/ProjeXt-bb63/Wallux/raw/main/"
req = requests.get(
    "https://raw.githubusercontent.com/ProjeXt-bb63/Wallux/main/static/tags.json")
if req:
    content = eval(req.content)
    content = content['wallpaper']
else:
    print("[ERROR] Please connect to internet and try again.")
print("""Hello! Wallux is a wallpaper library hosted on Github.
Please visit https://projext-bb63.github.io/Wallux/ to choose a wallpaper and enter its Wallux ID here.

Wallux ID:""")
try:
    walluxid = int(input())
except:
    print("[ERROR] Not a valid Wallux ID.")
    exit()
for w in content:
    if str(walluxid) == ''.join([n for n in w['path'] if n.isdigit()]):
        print("[INFO] Downloading your new wallpaper...")
        req = requests.get(baseurl+w['path'], stream=True)
        if req:
            img = req.raw.read()
            path = os.path.expanduser(
                "~/Documents/"+w['path'].lstrip("wallpapers/").strip())
            with open(path, 'wb') as f:
                f.write(img)
            print("[INFO] Image Downloaded")
        else:
            print("[ERROR] Please connect to an internet connection.")
        break
os.system("""echo $(ps -e | grep -E -i "xfce|kde|gnome") > /tmp/wallux.file""")
parseStr = ''
with open("/tmp/wallux.file") as f:
    parseStr = f.read()
os.remove("/tmp/wallux.file")
de = {}
de['kde'] = parseStr.lower().count("kde")
de['gnome'] = parseStr.lower().count('gnome')
de['xfce'] = parseStr.lower().count('xfce')
if max(de, key=de.get) == "gnome":
    os.system(
        "gsettings set org.gnome.desktop.background picture-uri file://{}".format(path))
    print("[SUCCESS] Enjoy your new wallpaper!")
    exit()
elif max(de, key=de.get) == "kde":
    import dbus
    plugin = 'org.kde.image'
    jscript = """
    var allDesktops = desktops();
    print (allDesktops);
    for (i=0;i<allDesktops.length;i++) {
        d = allDesktops[i];
        d.wallpaperPlugin = "%s";
        d.currentConfigGroup = Array("Wallpaper", "%s", "General");
        d.writeConfig("Image", "file://%s")
    }
    """
    bus = dbus.SessionBus()
    plasma = dbus.Interface(bus.get_object(
        'org.kde.plasmashell', '/PlasmaShell'), dbus_interface='org.kde.PlasmaShell')
    plasma.evaluateScript(jscript % (plugin, plugin, path))
    print("[SUCCESS] Enjoy your new wallpaper!")
    exit()
elif max(de, key=de.get) == "xfce":
    """
    To find out what property is changed when the backgound changes, run the following command in a terminal window:
        xfconf-query -c xfce4-desktop -m
    ...and then change the background using the Settings Manager > Desktop.
    The command monitors channel xfce4-desktop for changes. It will tell which property on channel xfce4-desktop is changed.
    Then the command to change that property would be like this
        xfconf-query -c xfce4-desktop -p insert_property_here -s path/image
    """
    os.system("xfconf-query --channel xfce4-desktop --property /backdrop/screen0/monitoreDP-1/workspace0/last-image --set {}".format(path))
    print("[SUCCESS] Enjoy your new wallpaper!")
    exit()
else:
    print("[ERROR] Oops. Your desktop enviroinment is not supported at the moment. But I saved the wallpaper to your Documents folder. Enjoy!")