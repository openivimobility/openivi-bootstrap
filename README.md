# OpenIVI bootstrap

This package turns a Debian image into a HTML5 'kiosk'.

## Installation Procedure

1. Take a stock Debian stable image.
2. Set a user to log in by default.
3. Install this package.

## TODO/Bugs

This currently assumes that a 1280x800 Chalkelec touchscreen is being used. It
should be possible to use systemd-udev to detect what is connected and behave
appropriately.
