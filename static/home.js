var theWallpaperDict = {};

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
    document.getElementById("fulldisp_img").src = "https://raw.githubusercontent.com/Wallux-0/Wallpapers/main/" + elem['path'];
    document.getElementById("fullimagedisplay_name").innerHTML = elem['name'];
    document.getElementById("fullimagedisplay_desc").innerHTML = elem['description'];
    document.getElementById("fullimagedisplay_tags").innerHTML = tagstr;
    document.getElementById("fullimagedisplay_link_download_primary").href = "https://raw.githubusercontent.com/Wallux-0/Wallpapers/main/" + elem['path'];
    document.getElementById("fullimagedisplay_link_download_secondary").href = "https://raw.githubusercontent.com/Wallux-0/Wallpapers/main/" + elem['path'];
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
        pol.style.display = 'none';
    }
});