import requests

course_id = input()

def parse_course_data(course_id:str):
    response = requests.get("https://api.peterportal.org/rest/v0/courses/" + course_id)
    course = response.json()
    return course["id"], course["prerequisite_for"]

course, course_list = parse_course_data(course_id)
print(course)

for c in course_list:
    course, course_list = parse_course_data(c)
    print(course)