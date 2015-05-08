from density_includes import *
import json, requests
import numpy as np
import pandas as pd
import datetime 

def density_csv():
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


	for single_date in daterange("2014-09-01","2015-01-01"):
		for hour in range(0,24):
			for mnt in [0,15,30,45]:
				date=str(single_date)+"T"+str(datetime.time(hour,mnt,0))
				index.append(date)

	density=pd.DataFrame(columns=cols,index=index,data=0)
	for key, value in building_info.iteritems():
		print "processing ", key,value
		for single_date in daterange("2014-09-01","2015-01-01"):
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

def quick_fix(__file__):
	entry=pd.read_csv(__file__)
	for i in range(len(entry)):
		if entry['HOURS'][i]==24:
			new_date=datetime.date(entry['YEAR'][i],entry['MONTH'][i],entry['DAY'][i])+datetime.timedelta(days=1)
			entry['YEAR'][i]=new_date.year
			entry['MONTH'][i]=new_date.month 
			entry['DAY'][i]=new_date.day 
			entry['HOURS'][i]=0
	print 'number of duplicates:', len(entry[entry.duplicated('DATE')==True])
	entry=entry.convert_objects(convert_numeric=True)
	entry.fillna(0)
	grouped=entry.groupby(['DATE','YEAR','MONTH','DAY','HOURS','MINS'],as_index=False)
	new_entry=grouped.aggregate(np.sum)
	print 'number of duplicates:', len(new_entry[new_entry.duplicated('DATE')==True])
	new_entry.to_csv('LIB_ENTRY.csv')


def entry_csv(__file__):
	entry=pd.read_csv(__file__)
	entry['DATE']=0

	for i in range(len(entry)):
		entry['DATE'][i]=str(datetime.date(entry['YEAR'][i],entry['MONTH'][i],entry['DAY'][i]))+'T'+str(datetime.time(entry['HOURS'][i],entry['MINS'][i],0))
	entry.to_csv(__file__)


density_csv()





				

