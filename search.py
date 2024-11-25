import os
import csv

dir = os.path.join(os.path.dirname(__file__), 'output\\Students')
target_person = 'person89'

def get_student_schedule(student_name):
    path = os.path.join(dir, student_name + 'Schedule.csv')
    output = ''

    with open(path, newline='') as csv_f:
        csv_reader = csv.reader(csv_f, delimiter=' ', quotechar='|')
        for row in csv_reader:
            output+=' '.join(row)
        
    return output

print(f"{target_person}'s Schedule: {get_student_schedule(target_person)}")