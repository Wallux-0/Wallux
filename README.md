
# Wallux


![Wallux](Wallux_cover.png)

<div align="center">
  :small_blue_diamond: <a href="https://wallux-0.github.io/Wallux/"> Visit the Website </a> :small_blue_diamond:
</div>

## Wallpapers for GNOME, KDE and XFCE

A collection of beautiful wallpapers. That's it. As simple as that!

### How to get Wallux

* Download the Desktop App (linux only) from <a href="https://github.com/Wallux-0/Wallux-Desktop/releases/download/beta/wallux">here</a>.

OR

* Download the script from <a href="https://raw.githubusercontent.com/Wallux-0/Wallux/main/wallux.py">here</a> by right clicking the opened raw file and using Save Page As.

### How to run Wallux

* If you have downloaded the binary, make it executable by ```chmod +x wallux``` or right-click, goto permissions tab and select the "Run as executable" checkbox and just double click to run.

* If you have downloaded the script, just download the wallux.py script and,
    ```bash
    python3 wallux.py
    ```

### How to use Wallux (Only if you have downloaded the script)

* Checkout all the available wallpapers using this <a href="https://wallux-0.github.io/Wallux/">link</a>.
* Type the id number of the wallpaper you like and relax.
> Note: If Wallux fails to set your the selected wallpaper, you can find the image downloaded in the ``~/Documents/`` folder.

### How to contribute

Feel free to contribute your favorite wallpapers by:
* Adding your wallpaper:
  * Fork <a href="https://github.com/Wallux-0/Wallpapers">this repository</a> which contains all the wallpapers.
  * Name your wallpaper as the largest wallpaper number + 1 without changing the extension. Upload the wallpaper to ``\wallpapers`` folder.
  * Resize the images that you just added in the previous step to <b>500kb</b> using <a href="https://redketchup.io/bulk-image-resizer">www.redketchup.io</a> and add them to ``\compressed\wallpapers``.
  > How to use <a href="https://redketchup.io/bulk-image-resizer">www.redketchup.io</a> to resize the images in bulk? Upload the images first. Set Predefined Task to ``Downscale to a maximum file size``. Then set the Maximum File Size to ``500 KB``. Proceed to process the images and download them.
  * Please check if you have named the images properly as instructed above. The naming part is very important for the images to work.
  * Create a Pull Request and copy the PR's link for the next step.

* Provide details of the wallpaper:
  * Fork <a href="https://github.com/Wallux-0/Wallux">this repository</a> which contains all program.
  * Add a line at the end in ``static/tags.json`` as shown below.
  ```json
  {
      "name": "<wallpaper name>",
      "description": "<Description | Credits>",
      "tags": ["<Tag1>", "<Tag2>", "Dark", "Light"],
      "path": "wallpapers/<wallpaper_number_in_wallpaper_repo>.<jpg|png>"
  }
  ```
  > Make sure to add ``"Light"`` and/or ``"Dark"`` in ``"tags"``.
  * Create a PR and provide the link of the PR you have previosly created in the description.

### Problems?

If you have any issues, open an issue <a href="https://github.com/Wallux-0/Wallux/issues">here</a>.

### Disclaimer

All the content belong to their respective owners. We have tried to give credits and link backs to the original user wherever possible. Please DM one of our members if you don't want your content here or if we forgot to add due credits.
