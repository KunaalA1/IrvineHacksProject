import requests

instructor_id = input()

def parse_course_data(course_id:str):
    response = requests.get("https://api.peterportal.org/rest/v0/courses/" + course_id)
    return response.json()
