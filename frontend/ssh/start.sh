#!/bin/sh
/usr/sbin/sshd
/usr/sbin/httpd -DFOREGROUND -f /etc/apache2/httpd.conf
