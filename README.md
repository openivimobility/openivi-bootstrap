# OpenIVI bootstrap

This package turns a Debian image into a HTML5 'kiosk'.

## Installation Procedure

1. Take a stock Debian stable image. The Debian image [that includes firmware](http://cdimage.debian.org/cdimage/unofficial/non-free/cd-including-firmware/8.2.0/amd64/iso-cd/) works much better than the stock installer.

2. Trust ATS's keys.

	curl https://ats-releases.s3.amazonaws.com/ats-key| apt-key add -

3. Add ATS as a source.

	echo "deb http://ats-releases.advancedtelematic.com.s3.amazonaws.com/openivi /" >> /etc/apt/sources.list

4. Update and install.

	apt-get update
	apt-get install openivi-bootstrap

## TODO/Bugs

This currently assumes that a 1280x800 Chalkelec touchscreen is being used. It
should be possible to use systemd-udev to detect what is connected and behave
appropriately.
