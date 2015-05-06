from density_includes import *
import json, requests
import numpy as np
import pandas as pd
import datetime 

building_info = get_building_info()
building_parent= get_building_parent()

density = np.zeros((7, 24))
density_count = np.zeros((7, 24))
normalized_density = np.zeros((7, 24))

all_density = np.zeros((7, 24))
all_density_count = np.zeros((7, 24))
all_normalized_density = np.zeros((7, 24))

cols=['YEAR','MONTH','DAY','HOURS','MINS']
cols.extend(building_parent.keys())
index=[]


for single_date in daterange("2014-09-01","2014-12-31"):
	for hour in range(0,24):
		for mnt in [0,15,30,45]:
			date=str(single_date)+"T"+str(datetime.time(hour,mnt,0))
			index.append(date)

density=pd.DataFrame(columns=cols,index=index,data=0)
for key, value in building_info.iteritems():
	print "processing ", key,value
	for single_date in daterange("2014-09-01","2014-12-31"):
	    url = get_json_url(single_date, "00:00", single_date, "23:59", int(value))
	    resp = requests.get(url=url)
	    data = json.loads(resp.text)
	    for p in building_parent:
	    	if key in building_parent[p]:
	    		parent=p
	    for i in xrange(0,len(data["data"])):
	    	curr_datetime=data["data"][i]["dump_time"]
	    	count=data["data"][i]["client_count"]
	    	date_split=curr_datetime.split('T')
	    	date=date_split[0].split('-')
	    	time=date_split[1].split(':')
	    	year=date[0]
	    	mon=date[1]
	    	day=date[2]
	    	hour=time[0]
	    	mnt=time[1]
	    	density['YEAR'][curr_datetime]=year
	    	density['MONTH'][curr_datetime]=mon
	    	density['DAY'][curr_datetime]=day
	    	density['HOURS'][curr_datetime]=hour
	    	density['MINS'][curr_datetime]=mnt
	    	density[parent][curr_datetime]+=count
density.to_csv('LIB_IP.csv')



	    	# density.iloc[curr_datetime]=[year,mon,day,hour,mnt,]




	# for single_date in daterange("2014-09-01","2014-12-12"):
	# 	url=get_json_url(single_date,"00:00",single_date,"23:59",int(value))
	# 	resp=requests.get(url=url)
	# 	data=json.loads(resp.text)
	# 	year=single_date.year	
	# 	mon=single_date.month
	# 	day=single_date.day
	# 	for hour in range(0,24):
	# 		for mnt in [0,15,30,45]:
	# 			date=str(single_date)+"T"+str(datetime.time(hour,mnt,0))
				

