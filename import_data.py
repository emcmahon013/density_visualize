from xml.dom import minidom
import json, requests


url='http://density.adicu.com/window/2014-10-10T08:00/2014-10-10T21:30/building/75?auth_token=9O4CRZLWI0OFZII4S4HYZNC60OZIZ3CB'

re=requests.get(url=url)
page=json.loads(re.text)

data=page['data']


