#!/usr/bin/python3.2
import * from './chatbot.py'
print("Content-Type: text/html \n")

def htmlhead():
	print("<!DOCTYPE HTML><html><head><title>My output</title><link rel='stylesheet' type='text/css' href='../style.css'></head><body>")

htmlhead()

import cgi

data=cgi.FieldStorage()

name = data['name'].value
email = data['email'].value
category = data['category'].value

args = generateArgs()

reply = sample_main(args, name)

print("<h1> Dear", name, ", ", reply, "</h1>")

#for variable in data.keys():
#	print("<h1> The", name, "weight is", n1+n2, "</h1>")

print("</body></html>")
