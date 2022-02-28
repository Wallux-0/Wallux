var theWallpaperDict = {};

var ScrollCounter = 0;

function onScrollFunction() {
    console.log(window.scrollY);
    elem = document.getElementById('fullimg');
    elem.style.top = window.scrollY + 120;
}

window.addEventListener('scroll', function(event) { onScrollFunction() });

function shuffle(array) {
    var currentIndex = array.length,
        randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

function copyToClipboard(link) {
    navigator.clipboard.writeText(link);
    alert("Copied sharing link to clipboard!");
}

function openfullimage(id) {
    tagstr = '';
    id = parseInt(id);
    for (i in theWallpaperDict) {
        if (theWallpaperDict[i]['path'].replace(/\D/g, "") == id) {
            elem = theWallpaperDict[i];
        }
    }
    arr = elem['tags'];
    for (j in arr) {
        tagstr += arr[j];
        tagstr += ", ";
    }
    tagstr = tagstr.slice(0, -2);
    // Set new meta tags for current image

    document.getElementsByTagName('head')[0].appendChild(metasitetype);
    var metaimg = document.createElement('meta');
    metaimg.setAttribute('property', 'og:image');
    metaimg.content = metaimg.content = "https://raw.githubusercontent.com/Wallux-0/Wallpapers/main/compressed/" + final_array[i]['path'];
    document.getElementsByTagName('head')[0].appendChild(metaimg);
    var metatitle = document.createElement('meta');
    metatitle.setAttribute('property', 'og:title');
    metatitle.content = metatitle.content = "Wallux - " + elem['name'];
    document.getElementsByTagName('head')[0].appendChild(metatitle);
    var metadesc = document.createElement('meta');
    metadesc.setAttribute('property', 'og:description');
    metadesc.content = metadesc.content = "Get " + elem['name'] + " from Wallux.";
    document.getElementsByTagName('head')[0].appendChild(metadesc);
    var metaurl = document.createElement('meta');
    metaurl.setAttribute('property', 'og:url');
    metaurl.content = metaurl.content = "https://wallux-0.github.io/Wallux/?walluxid=" + elem['path'].replace(/\D/g, "");
    document.getElementsByTagName('head')[0].appendChild(metaurl);

    // Do image display stuff

    document.getElementById("fulldisp_img").src = "https://raw.githubusercontent.com/Wallux-0/Wallpapers/main/" + elem['path'];
    document.getElementById("fullimagedisplay_name").innerHTML = elem['name'];
    document.getElementById("fullimagedisplay_desc").innerHTML = elem['description'];
    document.getElementById("fullimagedisplay_id").innerHTML = "Wallux ID: " + elem['path'].replace(/\D/g, "");
    document.getElementById("fullimagedisplay_tags").innerHTML = tagstr;
    document.getElementById("fullimagedisplay_link_download").href = "https://raw.githubusercontent.com/Wallux-0/Wallpapers/main/" + elem['path'];
    document.getElementById("fullimagedisplay_link_share").onclick = function() { copyToClipboard(window.location.href.split("?")[0] + "?walluxid=" + elem['path'].replace(/\D/g, "")); }
    document.getElementById("fullimg").style.display = 'block';
}

function onlyTags(tag) {
    final_array = shuffle(theWallpaperDict);
    var container_ = document.getElementById("randomContainer");
    container_.innerHTML = '';
    for (i in final_array) {
        tagstr = '';
        arr = final_array[i]['tags'];
        if (arr.indexOf(tag) >= 0) {
            for (j in arr) {
                tagstr += arr[j];
                tagstr += ", ";
            }
            tagstr = tagstr.slice(0, -2);
            container_.innerHTML +=
                "<div class=\"glassyContainer\" onclick=openfullimage(" + final_array[i]['path'].replace(/\D/g, "") + ")> <img class = \"imgDisp\" loading=\"lazy\" src = \"https://raw.githubusercontent.com/Wallux-0/Wallpapers/main/compressed/" + final_array[i]['path'] + "\"><div class=\"imgText\"> <b>" + final_array[i]['name'] + "</b><br>Description: " + final_array[i]['description'] + "<br>" + tagstr + "</b></div></div>"; //<br>Wallux ID: <b>" + final_array[i]['path'].replace(/\D/g, "") + 
        }
    }
}

function workwithdata(data) {
    var final_array = [];
    final_array = shuffle(data['wallpaper']);
    var container_ = document.getElementById("randomContainer");
    container_.innerHTML = '';
    for (i in final_array) {
        tagstr = '';
        arr = final_array[i]['tags'];
        for (j in arr) {
            tagstr += arr[j];
            tagstr += ", ";
        }
        tagstr = tagstr.slice(0, -2);
        container_.innerHTML +=
            "<div class=\"glassyContainer\" onclick=openfullimage(" + final_array[i]['path'].replace(/\D/g, "") + ")> <img class = \"imgDisp\" loading=\"lazy\" src = \"https://raw.githubusercontent.com/Wallux-0/Wallpapers/main/compressed/" + final_array[i]['path'] + "\"><div class=\"imgText\"> <b>" + final_array[i]['name'] + "</b><br>Description: " + final_array[i]['description'] + "<br>" + tagstr + "</b></div></div>"; //"<br>Wallux ID: <b>" + final_array[i]['path'].replace(/\D/g, "") +
    }
    var tagContainer = document.getElementById("tagContainer");
    tagContainer.innerHTML = '';
    tags = '';
    tarr = [];
    for (i in final_array) {
        arr = final_array[i]['tags'];
        for (j in arr) {
            if (tarr.indexOf(arr[j]) < 0) {
                tarr.push(arr[j]);
                tags += "<a onclick=\"onlyTags(\'" + arr[j] + "\')\"> <div class=\"tag\">" + arr[j] + "</div> </a>";
            }
        }
    }
    tagContainer.innerHTML = tags;
    theWallpaperDict = final_array;
    // Check if wallpaper ID is passed and if so, display that wallpaper
    let currenturl = new URL(window.location.href);
    let params = new URLSearchParams(currenturl.search);
    let walluxid = params.get('walluxid');
    if (walluxid !== null) {
        if (isNaN(parseInt(walluxid)) === false) {
            openfullimage(parseInt(walluxid));
        }
    } else {
        var metasitetype = document.createElement('meta');
        metasitetype.setAttribute('property', 'og:type');
        metasitetype.content = "website";
        document.getElementsByTagName('head')[0].appendChild(metasitetype);
        var metaimg = document.createElement('meta');
        metaimg.setAttribute('property', 'og:image');
        metaimg.content = "https://raw.githubusercontent.com/Wallux-0/Wallux/main/Wallux_cover.png"; //metaimg.content = "https://raw.githubusercontent.com/Wallux-0/Wallpapers/main/compressed/" + final_array[i]['path'];
        document.getElementsByTagName('head')[0].appendChild(metaimg);
        var metatitle = document.createElement('meta');
        metatitle.setAttribute('property', 'og:title');
        metatitle.content = "Wallux"; //metatitle.content = "Wallux - "+elem['name'];
        document.getElementsByTagName('head')[0].appendChild(metatitle);
        var metadesc = document.createElement('meta');
        metadesc.setAttribute('property', 'og:description');
        metadesc.content = "Beautiful Wallpapers. Curated."; //metadesc.content = "Get "+elem['name']+" from Wallux.";
        document.getElementsByTagName('head')[0].appendChild(metadesc);
        var metaurl = document.createElement('meta');
        metaurl.setAttribute('property', 'og:url');
        metaurl.content = "https://wallux-0.github.io/Wallux/"; //metaurl.content = "https://wallux-0.github.io/Wallux/?walluxid="+id;
        document.getElementsByTagName('head')[0].appendChild(metaurl);
        var metathemecolor = document.createElement('meta');
        metathemecolor.setAttribute('property', 'og:url');
        metathemecolor.content = "#ff00bb";
        document.getElementsByTagName('head')[0].appendChild(metathemecolor);
        var metacardlarge = document.createElement('meta');
        metacardlarge.setAttribute('property', 'twitter:card');
        metacardlarge.content = "summary_large_image";
        document.getElementsByTagName('head')[0].appendChild(metacardlarge);
    }
};

$.ajax({
    url: "static/tags.json",
    success: function(data) {
        workwithdata(data);
    },
    error: function(data) {
        console.log("Couldn't fetch json");
    },
    dataType: "json",
    timeout: 3000
});

window.addEventListener('mouseup', function(event) {
    var pol = document.getElementById('fullimg');
    if (event.target != pol && event.target.parentNode != pol) {
        document.getElementById("fulldisp_img").src = "";
        pol.style.display = 'none';
    }
});
