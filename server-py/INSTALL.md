# Setup guide

## Set Python3 as default (Linux)
Linux distros have ``python2`` and ``python3`` installed.
We need to ensure that **python3** is default.

First, check default python version:
```bash
$ python -V
Python 2.7.15
```
We need to ensure that we either use ``python3`` and ``pip3`` and/or
add these aliases:
```bash
$ alias python='/usr/bin/python3'
$ alias pip='/usr/bin/pip3'
```
Check default python version again:
```bash
$ python -V
Python 3.7.2
```
Now we are all set!

## Create virtual environment
Install 'virtualenv' package
```bash
$ pip3 install --user virtualenv
```
Create virtual environment in path **_python**
```bash
$ virtualenv _python
```
Activate virtual environment
(On Linux)
```bash
$ source _python/bin/activate
```
(On Windows)
```bash
$ source _python/Scripts/activate
```
## Install necessary packages
```bash
$ pip3 install autopep8
$ pip3 install pylint
$ pip3 install falcon
$ pip3 install requests
```
(On Linux)
```bash
$ pip3 install gunicorn
```
(On Windows)
```bash
$ pip3 install waitress
$ pip3 install hupper
```
