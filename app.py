
from flask import Flask, render_template, request

app = Flask(__name__)

attendance_data = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit_attendance', methods=['POST'])
def submit_attendance():
    student_number = request.form.get('studentNumber')
    absent_reason = request.form.get('absentReason')

    if not student_number:
        return 'Please enter a student number'

    attendance_data.append({'student_number': student_number, 'absent_reason': absent_reason})

    return 'Attendance submitted successfully'

if __name__ == '__main__':
    app.run()