import requests

instructor_id = input()

def parse_instructor_data(course_id:str):
    response = requests.get("https://api.peterportal.org/rest/v0/instructors/" + instructor_id)
    return response.json()