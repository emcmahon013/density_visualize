<<<<<<< HEAD
#!/usr/bin/python

import json, requests
=======
import json, requests
import datetime
>>>>>>> fa69517b6ccf370ca45299b94662ed7190feb7cc

def get_building_info():
  url = 'http://density.adicu.com/docs/building_info'

  resp = requests.get(url=url)
  data = json.loads(resp.text)

  building_info = dict()
  for i in xrange(0, len(data["data"])):
    building_info [data["data"][i]["group_name"]] = data["data"][i]["group_id"]
    #print  data["data"][i]["group_id"], ": ", data["data"][i]["group_name"]
  print "building info retrived"
<<<<<<< HEAD
  return building_info
=======
  return building_info

def get_json_url(start_date, start_hour, end_data, end_hour, group_id):
  base_url = "http://density.adicu.com/window/%sT%s/%sT%s/group/%d?auth_token=9O4CRZLWI0OFZII4S4HYZNC60OZIZ3CB"

  return base_url % (start_date, start_hour, end_data, end_hour, group_id)
   
def get_day_of_week(date):
  tks = [int(i) for i in date.split("-")]
  ans = datetime.date(tks[0], tks[1], tks[2])

  return ans.strftime("%w") #%A

def daterange(start_date, end_date):
  tks = [int(i) for i in start_date.split("-")]
  start_date = datetime.date(tks[0], tks[1], tks[2])

  tks = [int(i) for i in end_date.split("-")]
  end_date = datetime.date(tks[0], tks[1], tks[2])

  for n in range(int ((end_date - start_date).days)):
    yield start_date + datetime.timedelta(n)

>>>>>>> fa69517b6ccf370ca45299b94662ed7190feb7cc
