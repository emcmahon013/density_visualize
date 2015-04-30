#!/usr/bin/python

from density_includes import *
import json, requests
import numpy as np

building_info = get_building_info()

density = np.zeros((7, 24))
density_count = np.zeros((7, 24))
normalized_density = np.zeros((7, 24))

result = list()

for key, value in building_info.iteritems():
  print "processing " , key, value

  for single_date in daterange("2014-09-01", "2014-10-01"):
    url = get_json_url(single_date, "00:00", single_date, "23:59", int(value))
    resp = requests.get(url=url)
    data = json.loads(resp.text)

    day = get_day_of_week(str(single_date))
    for i in xrange(0, len(data["data"])):
      curr_time = data["data"][i]["dump_time"]
      curr_time = int(curr_time[11:13])
      density[day, curr_time] += float(data["data"][i]["percent_full"] )
      density_count[day, curr_time] += 1
        #print  data["data"][i]["percent_full"] 
  normalized_density = density / density_count

  result.append(normalized_density)
  #break
write_to_json(result, building_info)

#  np.savetxt("foo.csv", normalized_density, delimiter=",")
# url = 'http://density.adicu.com/latest?auth_token=9O4CRZLWI0OFZII4S4HYZNC60OZIZ3CB'
