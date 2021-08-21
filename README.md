# Wallux


![Wallux](cover.jpg)

<div align="center">
  :small_blue_diamond: <a href="https://wallux-0.github.io/Wallux/"> Visit the Website </a> :small_blue_diamond:
</div>

## Wallpapers for GNOME, KDE and XFCE
A collection of beautiful wallpapers. That's it. As simple as that!

### How to get Wallux

* Download the program by directly from the repo or get from releases.


### How to run Wallux

* Just download the wallux.py script and,

    

    ```bash
    python3 wallux.py
    ```


### How to use Wallux

* Checkout all the available wallpapers using this <a href="https://wallux-0.github.io/Wallux/">link</a>.
* Type the id number of the wallpaper you like and relax.
> Note: If Wallux fails to set your the selected wallpaper, you can find the image downloaded in the ``~/Documents/`` folder.

### How to contribute
Feel free to contribute your favorite wallpapers by

* Fork the <a href="https://github.com/Wallux-0/Wallpapers">wallpaper's repo</a>.
* Rename your wallpaper to the biggest wallpaper number + 1 without changing the extension. Upload the wallpaper to the wallpapers folder.
* Fork this repo and,
* Add a line at the end in the static/tags.json as shown below. Follow JSON rules.

```json
{
            "name": "A nice name for your wallpaper",
            "description": "Description for the image and credits to the creator if available.",
            "tags": ["Tags", "that", "you", "think", "that", "describes", "the", "wallpaper", "Add", "dark", "or", "light"],
            "path": "wallpapers/<the same number as the one you uploaded in the wallpapers repo>.<jpg|png>"
}
```

* Create a PR in both repo's.

### Problems?
Open an issue <a href="https://github.com/Wallux-0/Wallux/issues">here</a>.

### Disclaimer
All the content belong to their respective owners. We have tried to give credits and link backs to the original user wherever possible. Please DM one of our members if you don't want your content here or if we forgot to add due credits. ^~^
