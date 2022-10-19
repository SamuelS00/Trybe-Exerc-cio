MINIMUM_GRADE = 6

failed_students = []

with open("students_file.txt") as file:
    for line in file:
        student_grade = line.split(' ')
        if int(student_grade[1]) < MINIMUM_GRADE:
            failed_students.append(student_grade[0] + '\n')

    with open("failed_students.txt", mode="w") as file:
        file.writelines(failed_students)
