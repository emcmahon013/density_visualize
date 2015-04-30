<<<<<<< HEAD
from density_includes import *
import json, requests
from pprint import pprint

build_info = get_building_info()

for 

url = 'http://density.adicu.com/latest?auth_token=9O4CRZLWI0OFZII4S4HYZNC60OZIZ3CB'

resp = requests.get(url=url)
data = json.loads(resp.text)

for i in xrange(0, len(data["data"])):
  print  data["data"][i]["parent_name"]
=======
#!/usr/bin/python

from density_includes import *
import json, requests
import numpy as np

#build_info = get_building_info()

#http://density.adicu.com/window/2014-10-10T08:00/2014-10-10T21:30/group/147?auth_token=9O4CRZLWI0OFZII4S4HYZNC60OZIZ3CB

get_day_of_week("2015-04-30")

density = np.zeros((7, 24))
density_count = np.zeros((7, 24))

for single_date in daterange("2014-10-10", "2014-10-12"):
	url = get_json_url(single_date, "00:00", single_date, "23:59", 130)
	print url


#print density
#url = 'http://density.adicu.com/latest?auth_token=9O4CRZLWI0OFZII4S4HYZNC60OZIZ3CB'

#resp = requests.get(url=url)
#data = json.loads(resp.text)

#for i in xrange(0, len(data["data"])):
#  print  data["data"][i]["parent_name"]
>>>>>>> fa69517b6ccf370ca45299b94662ed7190feb7cc
