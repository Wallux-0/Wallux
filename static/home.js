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
            "<div class=\"glassyContainer\"> <img class = \"imgDisp\" loading=\"lazy\" src = \"https://raw.githubusercontent.com/Wallux-0/Wallpapers/main/compressed/" + final_array[i]['path'] + "\"><div class=\"imgText\"> <b>" + final_array[i]['name'] + "</b><br>Description: "+final_array[i]['description']+"<br>" + tagstr + "<br>Wallux ID: <b>" + final_array[i]['path'].replace(/\D/g, "") + "</b></div></div>";
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
