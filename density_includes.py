import json, requests
import datetime
import numpy as np

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

def get_json_url(start_date, start_hour, end_data, end_hour, group_id):
  base_url = "http://density.adicu.com/window/%sT%s/%sT%s/group/%d?auth_token=9O4CRZLWI0OFZII4S4HYZNC60OZIZ3CB"

  return base_url % (start_date, start_hour, end_data, end_hour, group_id)
   
def get_day_of_week(date):
  tks = [int(i) for i in date.split("-")]
  ans = datetime.date(tks[0], tks[1], tks[2])

  return int(ans.strftime("%w"))-1 #%A

def daterange(start_date, end_date):
  tks = [int(i) for i in start_date.split("-")]
  start_date = datetime.date(tks[0], tks[1], tks[2])

  tks = [int(i) for i in end_date.split("-")]
  end_date = datetime.date(tks[0], tks[1], tks[2])

  for n in range(int ((end_date - start_date).days)):
    yield start_date + datetime.timedelta(n)

def write_to_json(result, building_list):
  f = open('workfile', 'w+')
  f.write('{')
  aaa = 0
  for buliding_info, library in zip(building_list, result):
    if (aaa!=0):
      f.write(',')
    aaa=1
    f.write('\n\t"'+ str(building_list[str(buliding_info)]) +'":{')
    f.write('\n\t\t"pc2mob": 4.46,')
    f.write('\n\t\t"views": [')

    rows, colomns =  library.shape
    for i in xrange(0, rows):
      if (i!=0):
        f.write(',')
      f.write('\n\t\t\t[')
      for j in xrange(0, colomns):
        if (j!=0):
          f.write(',')
        f.write('\n\t\t\t\t{')
        f.write('\n\t\t\t\t\t"sep": ' + str(library[i,j]) + ',')
        f.write('\n\t\t\t\t\t"oct": ' + str(library[i,j]))
        f.write('\n\t\t\t\t}')

      f.write('\n\t\t\t]')


    f.write('\n\t\t]')
    f.write('\n\t}')
  f.write('\n}')
  f.close()
