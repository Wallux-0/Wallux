#!/usr/bin/env python3
import os
import requests

os.system("clear")
text = ["██     ██  █████  ██      ██      ██    ██ ██   ██ ",
        "██     ██ ██   ██ ██      ██      ██    ██  ██ ██  ",
        "██  █  ██ ███████ ██      ██      ██    ██   ███   ",
        "██ ███ ██ ██   ██ ██      ██      ██    ██  ██ ██  ",
        " ███ ███  ██   ██ ███████ ███████  ██████  ██   ██ "
        ]
print("\n")
for i in text:
    print(' ' * ((os.get_terminal_size().columns - len(i))//2) + i)
print("\n")
print("[INFO] Initializing...\n")
baseurl = "https://raw.githubusercontent.com/Wallux-0/Wallpapers/main/"
req = requests.get(
    "https://raw.githubusercontent.com/Wallux-0/Wallux/main/static/tags.json")
if req:
    content = eval(req.content)
    content = content['wallpaper']
else:
    print("[ERROR] Please connect to internet and try again.")
print("""Hello! Wallux is a wallpaper library hosted on Github.
Visit https://wallux-0.github.io/Wallux/ to choose a wallpaper and enter its Wallux ID below.
""")
try:
    walluxid = int(input("Wallux ID: "))
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
os.system("""echo $(ps -e | grep -E -i "xfce|kde|gnome|mate") > /tmp/wallux.file""")
parseStr = ''
with open("/tmp/wallux.file") as f:
    parseStr = f.read()
os.remove("/tmp/wallux.file")
de = {}
de['kde'] = parseStr.lower().count("kde")
de['gnome'] = parseStr.lower().count('gnome')
de['xfce'] = parseStr.lower().count('xfce')
de['mate'] = parseStr.lower().count('mate')
if max(de, key=de.get) == "gnome":
    os.system(
        "gsettings set org.gnome.desktop.background picture-uri file://{}".format(path))
    print("[SUCCESS] New wallpaper set!")
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
    print("[SUCCESS] New wallpaper set!")
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
    print("[SUCCESS] New wallpaper set!")
    exit()
elif max(de, key=de.get) == "mate":
    """
    Command example: conf write /org/mate/desktop/background/picture-filename "'path_to_img.png'"
    Note that the single quotes inside the double quotes (around the file path) are absolutely necessary.
    """
    cmd = "dconf write /org/mate/desktop/background/picture-filename \"" + \
        f"'{path}'" + "\""
    os.system(cmd)
    print("[SUCCESS] New wallpaper set!")
else:
    print("[ERROR] Your desktop enviroinment is not supported at the moment. But the wallpaper has been saved in the Documents folder. Enjoy!")
    print("Please raise an issue at https://github.com/Wallux-0/Wallux/issues")
