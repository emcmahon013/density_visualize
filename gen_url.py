#!/usr/bin/python

from density_includes import *
import json, requests
import numpy as np


building_info = get_building_info()

def get_data(start_date,end_date,building_info):
  density_spring = np.zeros((7, 24))
  density_spring_count = np.zeros((7, 24))
  normalized_spring_density = np.zeros((7, 24))
  density_fall = np.zeros((7, 24))
  density_fall_count = np.zeros((7, 24))
  normalized_fall_density = np.zeros((7, 24))
  density_summer = np.zeros((7, 24))
  density_summer_count = np.zeros((7, 24))
  normalized_summer_density = np.zeros((7, 24))

  all_spring_density = np.zeros((7, 24))
  all_spring_density_count = np.zeros((7, 24))
  all_spring_normalized_density = np.zeros((7, 24))
  all_summer_density = np.zeros((7, 24))
  all_summer_density_count = np.zeros((7, 24))
  all_summer_normalized_density = np.zeros((7, 24))
  all_fall_density = np.zeros((7, 24))
  all_fall_density_count = np.zeros((7, 24))
  all_fall_normalized_density = np.zeros((7, 24))

  spring_total=0
  fall_total=0
  summer_total=0

  result = list()
  fall2spring = list()
  all_normalized_density=list()

  for key, value in building_info.iteritems():
    print "processing ", key, value
    building_result=list()
    normalized_spring_total = 0
    normalized_summer_total = 0
    normalized_fall_total = 0
    for single_date in daterange(start_date, end_date):
      url = get_json_url(single_date, "00:00", single_date, "23:59", int(value))
      resp = requests.get(url=url)
      data = json.loads(resp.text)

      day = get_day_of_week(str(single_date))
      for i in xrange(0, len(data["data"])):
        curr_date = data["data"][i]["dump_time"]
        curr_month = int(curr_date[5:7])
        curr_time = int(curr_date[11:13])
        if curr_month >=1 and curr_month<=5:
          density_spring[day, curr_time] += float(data["data"][i]["percent_full"] )
          density_spring_count[day, curr_time] += 1
          all_spring_density[day, curr_time] += float(data["data"][i]["percent_full"] )
          all_spring_density_count[day, curr_time] += 1
        elif curr_month>=6 and curr_month<=8:
           density_summer[day, curr_time] += float(data["data"][i]["percent_full"] )
           density_summer_count[day, curr_time] += 1
           all_summer_density[day, curr_time] += float(data["data"][i]["percent_full"] )
           all_summer_density_count[day, curr_time] += 1
        elif curr_month>=9 and curr_month<=12:
          density_fall[day, curr_time] += float(data["data"][i]["percent_full"] )
          density_fall_count[day, curr_time] += 1 
          all_fall_density[day, curr_time] += float(data["data"][i]["percent_full"] )
          all_fall_density_count[day, curr_time] += 1               

          #print  data["data"][i]["percent_full"]
    normalized_spring_density = density_spring / density_spring_count
    normalized_summer_density = density_summer / density_summer_count
    normalized_fall_density = density_fall / density_fall_count
    normalized_spring_total += sum(normalized_spring_density.flatten())
    normalized_summer_total += sum(normalized_summer_density.flatten())
    normalized_fall_total += sum(normalized_fall_density.flatten())
    spring_total += normalized_spring_total
    fall_total += normalized_fall_total
    summer_total += normalized_summer_total 

    density_spring *= 0
    density_spring_count *= 0
    density_summer *= 0
    density_summer_count *= 0
    density_fall *= 0
    density_fall_count *= 0

    fall2spring.append(normalized_fall_total/normalized_spring_total)
    print np.shape(fall2spring)

    for day in range(0,7):
        building_result.append(zip(normalized_fall_density[day],normalized_spring_density[day],normalized_summer_density[day]))
    result.append(building_result)

    #break
  all_spring_normalized_density = all_spring_density / all_spring_density_count
  all_summer_normalized_density = all_summer_density / all_summer_density_count
  all_fall_normalized_density = all_fall_density / all_fall_density_count
  for day in range(0,7):
    all_normalized_density.append(zip(normalized_fall_density[day],normalized_spring_density[day],normalized_summer_density[day]))
  print np.shape(all_normalized_density)
  all_fall2spring=fall_total / spring_total


  return result, fall2spring, all_normalized_density, all_fall2spring

result, fall2spring, all_normalized_density, all_fall2spring=get_data("2014-09-01", "2015-05-01", building_info)

write_to_json(all_normalized_density, result, fall2spring, all_fall2spring, building_info)

#  np.savetxt("foo.csv", normalized_density, delimiter=",")
# url = 'http://density.adicu.com/latest?auth_token=9O4CRZLWI0OFZII4S4HYZNC60OZIZ3CB'
