for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        document.querySelector("h3").innerHTML = text + " is clicked"
    });
}

for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var audioText = this.innerHTML;



        switch (audioText) {
            case "Button 1":
                var audio = new Audio("sounds/a.mp3");
                audio.play();
                break;

            case "Button 2":
                var audio = new Audio("sounds/b.mp3");
                audio.play();
                break;

            case "Button 3":
                var audio = new Audio("sounds/c.mp3");
                audio.play();
                break;
        }

    })


}