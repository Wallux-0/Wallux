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

Feel free to contribute your favorite wallpapers by:
* Adding your wallpaper:
  * Fork <a href="https://github.com/Wallux-0/Wallpapers">this repository</a> which contains all the wallpapers.
  * Name your wallpaper as the largest wallpaper number + 1 without changing the extension. Upload the wallpaper to ``\wallpapers`` folder.
  * Create a Pull Request and copy the PR's link for the next step.

* Provide details of the wallpaper:
  * Fork <a href="https://github.com/Wallux-0/Wallux">this repository</a> which contains all program.
  * Add a line at the end in ``static/tags.json`` as shown below.
  ```json
  {
      "name": "<wallpaper name>",
      "description": "<Description | Credits>",
      "tags": ["<Tag1>", "<Tag2>", "dark", "light"],
      "path": "wallpapers/<wallpaper_number_in_wallpaper_repo>.<jpg|png>"
  }
  ```
  > Make sure to add ``"Light"`` and/or ``"Dark"`` in ``"tags"``.
  * Create a PR and provide the link of the PR you have previosly created in the description.

### Problems?

If you have any problems, open an issue <a href="https://github.com/Wallux-0/Wallux/issues">here</a>.

### Disclaimer

All the content belong to their respective owners. We have tried to give credits and link backs to the original user wherever possible. Please DM one of our members if you don't want your content here or if we forgot to add due credits.
