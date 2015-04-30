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