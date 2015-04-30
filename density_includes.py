#!/usr/bin/python

import json, requests

def get_building_info():
  url = 'http://density.adicu.com/docs/building_info'

  resp = requests.get(url=url)
  data = json.loads(resp.text)

  building_info = dict()
  for i in xrange(0, len(data["data"])):
    building_info [data["data"][i]["group_name"]] = data["data"][i]["group_id"]
    #print  data["data"][i]["group_id"], ": ", data["data"][i]["group_name"]
  print "building info retrived"
  return building_info