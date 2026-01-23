#!/bin/sh
/usr/sbin/sshd -D &
cd /home/app
npm run start
