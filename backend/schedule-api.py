from flask import Flask, request
from datetime import datetime


app = Flask(__name__)

@app.route('/analyze', methods = ['GET'])
def analyze_schedule():
    schedule = request.json
    activity_times = {}
    for item in schedule['activities']:
        duration = calculate_duration(item['start'], item['end'])
        if item["type"] not in activity_times:
            activity_times[item["type"]] = duration
        else:
            current = activity_times[item["type"]] 
            current_time = datetime.strptime(current, "%H:%M:%S")
            activity_times[item["type"]] = duration + current_time
    return activity_times


def calculate_duration(start, end):
    FMT = '%H:%M'
    tdelta = datetime.strptime(end, FMT) - datetime.strptime(start, FMT)
    return str(tdelta)


if __name__ == '__main__':
    app.run()
