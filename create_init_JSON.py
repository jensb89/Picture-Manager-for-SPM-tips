#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Search for png/gif/jpg/bmp files in folder and create initial json file
"""

import os
import re
import json

def natural_key(string_):
    """See http://www.codinghorror.com/blog/archives/001018.html"""
    return [int(s) if s.isdigit() else s for s in re.split(r'(\d+)', string_)]

all_files = os.listdir(".")

files = [f for f in sorted(all_files,key=natural_key) if f.endswith('.gif') or f.endswith('.png') or f.lower().endswith('jpg') or f.endswith('bmp')]

used_tips = []
for filename in files:
	used_tips.append({'FileName':filename,'Used':0,'User':'None'})


with open('data.json', 'w') as outfile:
    data = json.dumps(used_tips)
    data = 'angular.callbacks._0(' + data + ')'
    outfile.write(data)